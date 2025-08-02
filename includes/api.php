<?php
add_action('rest_api_init', function () {
    register_rest_route('meteo/v1', '/forecast', [
        'methods' => 'GET',
        'callback' => 'get_forecast',
        'permission_callback' => '__return_true',
    ]);
});

function get_forecast(WP_REST_Request $request)
{
    global $wpdb;

    $lat = sanitize_text_field($request->get_param('lat'));
    $lon = sanitize_text_field($request->get_param('lon'));

    if (empty($lat) || empty($lon)) {
        return new WP_Error('missing_params', 'Latitude ou longitude manquante', ['status' => 400]);
    }

    $date = date('Y-m-d');
    $key = md5($lat . $lon . $date);
    $table = $wpdb->prefix . 'wp_meteo_cache';

    // Vérifier cache et expiration (ex: 1h)
    $cache_duration = 3600; // 3600 sec = 1 heure
    $row = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE cache_key = %s", $key));

    if ($row) {
        $cached_time = strtotime($row->timestamp);
        if (time() - $cached_time < $cache_duration) {
            return rest_ensure_response(json_decode($row->data));
        }
    }

    // Ta clé API WeatherAPI
    $apiKey = 'a56a896a86f4484291c80853250208';

    $response = wp_remote_get("https://api.weatherapi.com/v1/current.json?key=$apiKey&q=$lat,$lon");

    if (is_wp_error($response)) {
        return new WP_Error('api_error', 'API inaccessible', ['status' => 500]);
    }

    $body = wp_remote_retrieve_body($response);
    $data = json_decode($body);

    if (!$data || empty($data->current)) {
        return new WP_Error('no_data', 'Pas de données disponibles', ['status' => 404]);
    }

    $result = [
        'location' => $data->location->name,
        'temp' => $data->current->temp_c,
        'condition' => $data->current->condition->text,
        'localtime' => $data->location->localtime,
        'day' => date('l', strtotime($data->location->localtime))
    ];

    if ($row) {
        $wpdb->update($table, [
            'data' => wp_json_encode($result),
            'timestamp' => current_time('mysql')
        ], ['cache_key' => $key]);
    } else {
        $wpdb->insert($table, [
            'cache_key' => $key,
            'data' => wp_json_encode($result),
            'timestamp' => current_time('mysql')
        ]);
    }

    return rest_ensure_response($result);
}
