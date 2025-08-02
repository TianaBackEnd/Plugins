<?php
/**
 * Plugin Name: Météo
 * Description: Un bloc Gutenberg pour afficher les prévisions météo
 * Version: 1.0.1
 * Author: Tiana RT
**/
register_activation_hook(__FILE__, function () {
    global $wpdb;
    $table = $wpdb->prefix . 'wp_meteo_cache';
    $sql = "CREATE TABLE IF NOT EXISTS $table (
        id INT PRIMARY KEY AUTO_INCREMENT,
        cache_key VARCHAR(255) NOT NULL,
        data LONGTEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );";
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
});

// Enqueue Gutenberg + styles
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script('meteo-block', plugins_url('build/block.js', __FILE__), [], false, true);
    wp_enqueue_style('meteo-style', plugins_url('meteo.css', __FILE__));
});

// Register REST
require_once plugin_dir_path(__FILE__) . 'includes/api.php';