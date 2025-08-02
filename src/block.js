import { registerBlockType } from "@wordpress/blocks";
import { useEffect, useState } from "@wordpress/element";

// Styles CSS inline
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "400px",
    margin: "20px auto",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
    border: "none",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  containerSunny: {
    background: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    color: "#2d3436",
  },

  containerRainy: {
    background: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
    color: "white",
  },

  containerCloudy: {
    background: "linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)",
    color: "white",
  },

  containerSnowy: {
    background: "linear-gradient(135deg, #e1e8ed 0%, #ffffff 100%)",
    color: "#2d3436",
  },

  backgroundAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.1,
    background:
      'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
    animation: "float 6s ease-in-out infinite",
  },

  header: {
    fontSize: "1.4em",
    fontWeight: "bold",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    zIndex: 2,
    position: "relative",
  },

  temperature: {
    fontSize: "3.5em",
    fontWeight: "bold",
    margin: "15px 0",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    zIndex: 2,
    position: "relative",
  },

  condition: {
    fontSize: "1.3em",
    fontStyle: "italic",
    marginBottom: "15px",
    textTransform: "capitalize",
    zIndex: 2,
    position: "relative",
  },

  location: {
    fontSize: "1.1em",
    opacity: 0.9,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    zIndex: 2,
    position: "relative",
  },

  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    marginTop: "20px",
    zIndex: 2,
    position: "relative",
  },

  detailItem: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "12px",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  detailLabel: {
    fontSize: "0.9em",
    opacity: 0.8,
    marginBottom: "5px",
  },

  detailValue: {
    fontSize: "1.1em",
    fontWeight: "bold",
  },

  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    borderRadius: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    minHeight: "200px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },

  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid rgba(255, 255, 255, 0.3)",
    borderTop: "4px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "15px",
  },

  error: {
    background: "linear-gradient(135deg, #ff7675 0%, #d63031 100%)",
    color: "white",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    maxWidth: "400px",
    margin: "20px auto",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    fontSize: "1.1em",
    fontWeight: "bold",
  },

  weatherIcon: {
    fontSize: "2.5em",
    marginBottom: "10px",
    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
  },

  lastUpdate: {
    fontSize: "0.8em",
    opacity: 0.7,
    marginTop: "15px",
    zIndex: 2,
    position: "relative",
  },
};

// Fonction pour obtenir l'icône météo
const getWeatherIcon = (condition) => {
  const icons = {
    sunny: "☀️",
    clear: "☀️",
    cloudy: "☁️",
    rainy: "🌧️",
    stormy: "⛈️",
    snowy: "❄️",
    foggy: "🌫️",
    default: "🌤️",
  };

  const conditionLower = condition?.toLowerCase() || "";

  if (conditionLower.includes("sun") || conditionLower.includes("clear"))
    return icons.sunny;
  if (conditionLower.includes("cloud")) return icons.cloudy;
  if (conditionLower.includes("rain") || conditionLower.includes("drizzle"))
    return icons.rainy;
  if (conditionLower.includes("storm") || conditionLower.includes("thunder"))
    return icons.stormy;
  if (conditionLower.includes("snow")) return icons.snowy;
  if (conditionLower.includes("fog") || conditionLower.includes("mist"))
    return icons.foggy;

  return icons.default;
};

// Fonction pour obtenir le style du container selon la météo
const getContainerStyle = (condition) => {
  const conditionLower = condition?.toLowerCase() || "";

  if (conditionLower.includes("sun") || conditionLower.includes("clear")) {
    return { ...styles.container, ...styles.containerSunny };
  }
  if (
    conditionLower.includes("rain") ||
    conditionLower.includes("drizzle") ||
    conditionLower.includes("storm")
  ) {
    return { ...styles.container, ...styles.containerRainy };
  }
  if (conditionLower.includes("cloud")) {
    return { ...styles.container, ...styles.containerCloudy };
  }
  if (conditionLower.includes("snow")) {
    return { ...styles.container, ...styles.containerSnowy };
  }

  return styles.container;
};

registerBlockType("meteo/block", {
  title: "Météo RT",
  icon: "cloud",
  category: "widgets",

  edit: () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Ajouter les animations CSS
      const styleSheet = document.createElement("style");
      styleSheet.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .meteo-container {
                    animation: fadeIn 0.8s ease-out;
                }
                
                .meteo-temperature {
                    animation: fadeIn 1.2s ease-out;
                }
                
                .meteo-details {
                    animation: fadeIn 1.6s ease-out;
                }
            `;
      document.head.appendChild(styleSheet);

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetch(`/wp-json/meteo/v1/forecast?lat=${latitude}&lon=${longitude}`)
            .then((res) => {
              if (!res.ok) throw new Error("Erreur réseau");

              const contentType = res.headers.get("content-type") || "";
              if (!contentType.includes("application/json")) {
                throw new Error(
                  "Réponse non-JSON : peut-être une erreur serveur."
                );
              }

              return res.json();
            })
            .then((weatherData) => {
              setData(weatherData);
              setLoading(false);
              console.log(weatherData);
            })
            .catch((err) => {
              setError("Erreur météo : " + err.message);
              setLoading(false);
              console.error(err);
            });
        },
        (err) => {
          setError(
            "Permission géolocalisation refusée. Veuillez l'activer pour continuer !"
          );
          setLoading(false);
        }
      );
    }, []);

    // Affichage du loader
    if (loading) {
      return (
        <div style={styles.loader}>
          <div style={styles.spinner}></div>
          <div>🌍 Détection de votre position...</div>
          <div style={{ fontSize: "0.5em", marginTop: "10px", opacity: 0.8 }}>
            Chargement des données météo...
          </div>
        </div>
      );
    }

    // Affichage d'erreur
    if (error) {
      return (
        <div style={styles.error}>
          <div style={{ fontSize: "2em", marginBottom: "10px" }}>⚠️</div>
          <div>{error}</div>
          <div style={{ fontSize: "0.9em", marginTop: "15px", opacity: 0.8 }}>
            Vérifiez vos paramètres de géolocalisation
          </div>
        </div>
      );
    }

    // Affichage des données météo
    if (!data) {
      return (
        <div style={styles.error}>
          <div style={{ fontSize: "0.9em", marginTop: "15px", opacity: 0.8 }}>
            Données non trouvé !!
          </div>
        </div>
      );
    }

    const containerStyle = getContainerStyle(data.condition);
    const weatherIcon = getWeatherIcon(data.condition);
    const currentTime = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div className="meteo-container" style={containerStyle}>
        <div style={styles.backgroundAnimation}></div>

        <div style={styles.header}>
          <span style={styles.weatherIcon}>{weatherIcon}</span>
          <span>{data.condition}</span>
        </div>

        <div className="meteo-temperature" style={styles.temperature}>
          {data.temp}°C
        </div>

        <div className="meteo-details" style={styles.details}>

          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>{data.day || "N/A"}</div>
            <div style={styles.detailValue}>{data.localtime || "N/A"}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.detailLabel}>Votre position :</div>
            <div style={styles.detailValue}>{data.location || "N/A"}</div>
          </div>
        </div>

        <div style={styles.lastUpdate}>Météo-plugBy@TianaRT</div>
      </div>
    );
  },

  save: () => null,
});
