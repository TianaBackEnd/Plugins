/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// Styles CSS inline
var styles = {
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
    justifyContent: "center"
  },
  containerSunny: {
    background: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
    color: "#2d3436"
  },
  containerRainy: {
    background: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
    color: "white"
  },
  containerCloudy: {
    background: "linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)",
    color: "white"
  },
  containerSnowy: {
    background: "linear-gradient(135deg, #e1e8ed 0%, #ffffff 100%)",
    color: "#2d3436"
  },
  backgroundAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.1,
    background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
    animation: "float 6s ease-in-out infinite"
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
    position: "relative"
  },
  temperature: {
    fontSize: "3.5em",
    fontWeight: "bold",
    margin: "15px 0",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    zIndex: 2,
    position: "relative"
  },
  condition: {
    fontSize: "1.3em",
    fontStyle: "italic",
    marginBottom: "15px",
    textTransform: "capitalize",
    zIndex: 2,
    position: "relative"
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
    position: "relative"
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    marginTop: "20px",
    zIndex: 2,
    position: "relative"
  },
  detailItem: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "12px",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  },
  detailLabel: {
    fontSize: "0.9em",
    opacity: 0.8,
    marginBottom: "5px"
  },
  detailValue: {
    fontSize: "1.1em",
    fontWeight: "bold"
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
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid rgba(255, 255, 255, 0.3)",
    borderTop: "4px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "15px"
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
    fontWeight: "bold"
  },
  weatherIcon: {
    fontSize: "2.5em",
    marginBottom: "10px",
    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
  },
  lastUpdate: {
    fontSize: "0.8em",
    opacity: 0.7,
    marginTop: "15px",
    zIndex: 2,
    position: "relative"
  }
};

// Fonction pour obtenir l'icône météo
var getWeatherIcon = function getWeatherIcon(condition) {
  var icons = {
    sunny: "☀️",
    clear: "☀️",
    cloudy: "☁️",
    rainy: "🌧️",
    stormy: "⛈️",
    snowy: "❄️",
    foggy: "🌫️",
    "default": "🌤️"
  };
  var conditionLower = (condition === null || condition === void 0 ? void 0 : condition.toLowerCase()) || "";
  if (conditionLower.includes("sun") || conditionLower.includes("clear")) return icons.sunny;
  if (conditionLower.includes("cloud")) return icons.cloudy;
  if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) return icons.rainy;
  if (conditionLower.includes("storm") || conditionLower.includes("thunder")) return icons.stormy;
  if (conditionLower.includes("snow")) return icons.snowy;
  if (conditionLower.includes("fog") || conditionLower.includes("mist")) return icons.foggy;
  return icons["default"];
};

// Fonction pour obtenir le style du container selon la météo
var getContainerStyle = function getContainerStyle(condition) {
  var conditionLower = (condition === null || condition === void 0 ? void 0 : condition.toLowerCase()) || "";
  if (conditionLower.includes("sun") || conditionLower.includes("clear")) {
    return _objectSpread(_objectSpread({}, styles.container), styles.containerSunny);
  }
  if (conditionLower.includes("rain") || conditionLower.includes("drizzle") || conditionLower.includes("storm")) {
    return _objectSpread(_objectSpread({}, styles.container), styles.containerRainy);
  }
  if (conditionLower.includes("cloud")) {
    return _objectSpread(_objectSpread({}, styles.container), styles.containerCloudy);
  }
  if (conditionLower.includes("snow")) {
    return _objectSpread(_objectSpread({}, styles.container), styles.containerSnowy);
  }
  return styles.container;
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("meteo/block", {
  title: "Météo RT",
  icon: "cloud",
  category: "widgets",
  edit: function edit() {
    var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];
    var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];
    var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      // Ajouter les animations CSS
      var styleSheet = document.createElement("style");
      styleSheet.textContent = "\n                @keyframes spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }\n                \n                @keyframes float {\n                    0%, 100% { transform: translateY(0px); }\n                    50% { transform: translateY(-10px); }\n                }\n                \n                @keyframes fadeIn {\n                    from { opacity: 0; transform: translateY(20px); }\n                    to { opacity: 1; transform: translateY(0); }\n                }\n                \n                .meteo-container {\n                    animation: fadeIn 0.8s ease-out;\n                }\n                \n                .meteo-temperature {\n                    animation: fadeIn 1.2s ease-out;\n                }\n                \n                .meteo-details {\n                    animation: fadeIn 1.6s ease-out;\n                }\n            ";
      document.head.appendChild(styleSheet);
      navigator.geolocation.getCurrentPosition(function (pos) {
        var _pos$coords = pos.coords,
          latitude = _pos$coords.latitude,
          longitude = _pos$coords.longitude;
        fetch("/wp-json/meteo/v1/forecast?lat=".concat(latitude, "&lon=").concat(longitude)).then(function (res) {
          if (!res.ok) throw new Error("Erreur réseau");
          var contentType = res.headers.get("content-type") || "";
          if (!contentType.includes("application/json")) {
            throw new Error("Réponse non-JSON : peut-être une erreur serveur.");
          }
          return res.json();
        }).then(function (weatherData) {
          setData(weatherData);
          setLoading(false);
          console.log(weatherData);
        })["catch"](function (err) {
          setError("Erreur météo : " + err.message);
          setLoading(false);
          console.error(err);
        });
      }, function (err) {
        setError("Permission géolocalisation refusée. Veuillez l'activer pour continuer !");
        setLoading(false);
      });
    }, []);

    // Affichage du loader
    if (loading) {
      return /*#__PURE__*/React.createElement("div", {
        style: styles.loader
      }, /*#__PURE__*/React.createElement("div", {
        style: styles.spinner
      }), /*#__PURE__*/React.createElement("div", null, "\uD83C\uDF0D D\xE9tection de votre position..."), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "0.5em",
          marginTop: "10px",
          opacity: 0.8
        }
      }, "Chargement des donn\xE9es m\xE9t\xE9o..."));
    }

    // Affichage d'erreur
    if (error) {
      return /*#__PURE__*/React.createElement("div", {
        style: styles.error
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "2em",
          marginBottom: "10px"
        }
      }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("div", null, error), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "0.9em",
          marginTop: "15px",
          opacity: 0.8
        }
      }, "V\xE9rifiez vos param\xE8tres de g\xE9olocalisation"));
    }

    // Affichage des données météo
    if (!data) {
      return /*#__PURE__*/React.createElement("div", {
        style: styles.error
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "0.9em",
          marginTop: "15px",
          opacity: 0.8
        }
      }, "Donn\xE9es non trouv\xE9 !!"));
    }
    var containerStyle = getContainerStyle(data.condition);
    var weatherIcon = getWeatherIcon(data.condition);
    var currentTime = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "meteo-container",
      style: containerStyle
    }, /*#__PURE__*/React.createElement("div", {
      style: styles.backgroundAnimation
    }), /*#__PURE__*/React.createElement("div", {
      style: styles.header
    }, /*#__PURE__*/React.createElement("span", {
      style: styles.weatherIcon
    }, weatherIcon), /*#__PURE__*/React.createElement("span", null, data.condition)), /*#__PURE__*/React.createElement("div", {
      className: "meteo-temperature",
      style: styles.temperature
    }, data.temp, "\xB0C"), /*#__PURE__*/React.createElement("div", {
      className: "meteo-details",
      style: styles.details
    }, /*#__PURE__*/React.createElement("div", {
      style: styles.detailItem
    }, /*#__PURE__*/React.createElement("div", {
      style: styles.detailLabel
    }, data.day || "N/A"), /*#__PURE__*/React.createElement("div", {
      style: styles.detailValue
    }, data.localtime || "N/A")), /*#__PURE__*/React.createElement("div", {
      style: styles.detailItem
    }, /*#__PURE__*/React.createElement("div", {
      style: styles.detailLabel
    }, "Votre position :"), /*#__PURE__*/React.createElement("div", {
      style: styles.detailValue
    }, data.location || "N/A"))), /*#__PURE__*/React.createElement("div", {
      style: styles.lastUpdate
    }, "M\xE9t\xE9o-plugBy@TianaRT"));
  },
  save: function save() {
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=block.js.map