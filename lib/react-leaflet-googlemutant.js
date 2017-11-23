(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("leaflet"), require("react-leaflet"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "leaflet", "react-leaflet", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeafletGoogleMutant"] = factory(require("prop-types"), require("leaflet"), require("react-leaflet"), require("react"));
	else
		root["ReactLeafletGoogleMutant"] = factory(root["PropTypes"], root[undefined], root[undefined], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleApiLoader = function (_Component) {
  _inherits(GoogleApiLoader, _Component);

  function GoogleApiLoader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleApiLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleApiLoader.__proto__ || Object.getPrototypeOf(GoogleApiLoader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      googleLoaded: false,
      url: 'https://maps.googleapis.com/maps/api/js',
      version: '3.27',
      client: null,
      language: null,
      region: null,
      channel: null,
      libraries: [],
      callback: '__google_maps_api_provider_initializator__',
      children: null
    }, _this.afterLoad = function () {
      _this.setState(_extends({}, _this.state, {
        googleLoaded: true
      }));
    }, _this.createUrl = function () {
      var _this$state = _this.state,
          url = _this$state.url,
          callback = _this$state.callback,
          apiKey = _this$state.apiKey,
          libraries = _this$state.libraries,
          client = _this$state.client,
          version = _this$state.version,
          channel = _this$state.channel,
          language = _this$state.language,
          region = _this$state.region;

      var chave = apiKey ? '&key=' + apiKey : '';
      var libs = libraries.length ? '&libraries=' + libraries.join(',') : '';
      var cliente = client ? '&client=' + client + '&v=' + version : '';
      var canal = channel ? '&channel=' + channel : '';
      var lang = language ? '&language=' + language : '';
      var regiao = region ? '&region=' + region : '';
      return url + '?callback=' + callback + chave + libs + cliente + canal + lang + regiao;
    }, _this.load = function () {
      var callback = _this.state.callback;

      if (!window[callback]) {
        window[callback] = function () {};
      }
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = _this.createUrl();
      script.onload = _this.afterLoad;
      document.body.appendChild(script);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleApiLoader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState(_extends({}, this.state, this.props));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.state.googleLoaded) {
        this.load();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var googleLoaded = this.state.googleLoaded;
      var children = this.props.children;

      if (!googleLoaded) {
        return null;
      }
      return children;
    }
  }]);

  return GoogleApiLoader;
}(_react.Component);

GoogleApiLoader.propTypes = {
  children: _propTypes2.default.element.isRequired,
  apiKey: _propTypes2.default.string,
  libraries: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['drawing', 'geometry', 'places', 'visualization', 'directions']))
};
exports.default = GoogleApiLoader;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _leaflet = __webpack_require__(5);

var _leaflet2 = _interopRequireDefault(_leaflet);

__webpack_require__(4);

var _reactLeaflet = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMutant = function (_MapLayer) {
  _inherits(GoogleMutant, _MapLayer);

  function GoogleMutant() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleMutant);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleMutant.__proto__ || Object.getPrototypeOf(GoogleMutant)).call.apply(_ref, [this].concat(args))), _this), _this.version = "0.1.15", _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleMutant, [{
    key: 'createLeafletElement',
    value: function createLeafletElement(props) {
      var config = _extends({ type: 'roadmap' }, props);
      return new _leaflet2.default.gridLayer.googleMutant(config);
    }
  }]);

  return GoogleMutant;
}(_reactLeaflet.MapLayer);

GoogleMutant.propTypes = {
  type: _propTypes2.default.oneOf(['hybrid', 'roadmap', 'satellite', 'terrain'])
};
exports.default = GoogleMutant;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _googleapiloader = __webpack_require__(1);

Object.defineProperty(exports, 'GoogleApiLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_googleapiloader).default;
  }
});

var _googlemutant = __webpack_require__(2);

Object.defineProperty(exports, 'GoogleMutant', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_googlemutant).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Based on https://github.com/shramov/leaflet-plugins
// GridLayer like https://avinmathew.com/leaflet-and-google-maps/ , but using MutationObserver instead of jQuery


// 🍂class GridLayer.GoogleMutant
// 🍂extends GridLayer
L.GridLayer.GoogleMutant = L.GridLayer.extend({
	includes: L.Mixin.Events,

	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		subdomains: 'abc',
		errorTileUrl: '',
		attribution: '',	// The mutant container will add its own attribution anyways.
		opacity: 1,
		continuousWorld: false,
		noWrap: false,
		// 🍂option type: String = 'roadmap'
		// Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
		type: 'roadmap',
		maxNativeZoom: 21
	},

	initialize: function (options) {
		L.GridLayer.prototype.initialize.call(this, options);

		this._ready = !!window.google && !!window.google.maps && !!window.google.maps.Map;

		this._GAPIPromise = this._ready ? Promise.resolve(window.google) : new Promise(function (resolve, reject) {
			var checkCounter = 0;
			var intervalId = null;
			intervalId = setInterval(function () {
				if (checkCounter >= 10) {
					clearInterval(intervalId);
					return reject(new Error('window.google not found after 10 attempts'));
				}
				if (!!window.google && !!window.google.maps && !!window.google.maps.Map) {
					clearInterval(intervalId);
					return resolve(window.google);
				}
				checkCounter++;
			}, 500);
		});

		// Couple data structures indexed by tile key
		this._tileCallbacks = {};	// Callbacks for promises for tiles that are expected
		this._freshTiles = {};	// Tiles from the mutant which haven't been requested yet

		this._imagesPerTile = (this.options.type === 'hybrid') ? 2 : 1;
	},

	onAdd: function (map) {
		L.GridLayer.prototype.onAdd.call(this, map);
		this._initMutantContainer();

		this._GAPIPromise.then(function () {
			this._ready = true;
			this._map = map;

			this._initMutant();

			map.on('viewreset', this._reset, this);
			map.on('move', this._update, this);
			map.on('zoomend', this._handleZoomAnim, this);
			map.on('resize', this._resize, this);

			//handle layer being added to a map for which there are no Google tiles at the given zoom
			google.maps.event.addListenerOnce(this._mutant, 'idle', function () {
				this._checkZoomLevels();
				this._mutantIsReady = true;
			}.bind(this));

			//20px instead of 1em to avoid a slight overlap with google's attribution
			map._controlCorners.bottomright.style.marginBottom = '20px';
			map._controlCorners.bottomleft.style.marginBottom = '20px';

			this._reset();
			this._update();

			if (this._subLayers) {
				//restore previously added google layers
				for (var layerName in this._subLayers) {
					this._subLayers[layerName].setMap(this._mutant);
				}
			}
		}.bind(this));
	},

	onRemove: function (map) {
		L.GridLayer.prototype.onRemove.call(this, map);
		map._container.removeChild(this._mutantContainer);
		this._mutantContainer = undefined;

		map.off('viewreset', this._reset, this);
		map.off('move', this._update, this);
		map.off('zoomend', this._handleZoomAnim, this);
		map.off('resize', this._resize, this);

		if(map._controlCorners) {
			map._controlCorners.bottomright.style.marginBottom = '0em';
			map._controlCorners.bottomleft.style.marginBottom = '0em';
		}
	},

	getAttribution: function () {
		return this.options.attribution;
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (opacity < 1) {
			L.DomUtil.setOpacity(this._mutantContainer, opacity);
		}
	},

	setElementSize: function (e, size) {
		e.style.width = size.x + 'px';
		e.style.height = size.y + 'px';
	},


	addGoogleLayer: function (googleLayerName, options) {
		if (!this._subLayers) this._subLayers = {};
		return this._GAPIPromise.then(function () {
			var Constructor = google.maps[googleLayerName];
			var googleLayer = new Constructor(options);
			googleLayer.setMap(this._mutant);
			this._subLayers[googleLayerName] = googleLayer;
			return googleLayer;
		}.bind(this));
	},

	removeGoogleLayer: function (googleLayerName) {
		var googleLayer = this._subLayers && this._subLayers[googleLayerName];
		if (!googleLayer) return;

		googleLayer.setMap(null);
		delete this._subLayers[googleLayerName];
	},


	_initMutantContainer: function () {
		if (!this._mutantContainer) {
			this._mutantContainer = L.DomUtil.create('div', 'leaflet-google-mutant leaflet-top leaflet-left');
			this._mutantContainer.id = '_MutantContainer_' + L.Util.stamp(this._mutantContainer);
			this._mutantContainer.style.zIndex = '800'; //leaflet map pane at 400, controls at 1000
			this._mutantContainer.style.pointerEvents = 'none';

			this._map.getContainer().appendChild(this._mutantContainer);
		}

		this.setOpacity(this.options.opacity);
		this.setElementSize(this._mutantContainer, this._map.getSize());

		this._attachObserver(this._mutantContainer);
	},

	_initMutant: function () {
		if (!this._ready || !this._mutantContainer) return;
		this._mutantCenter = new google.maps.LatLng(0, 0);

		var map = new google.maps.Map(this._mutantContainer, {
			center: this._mutantCenter,
			zoom: 0,
			tilt: 0,
			mapTypeId: this.options.type,
			disableDefaultUI: true,
			keyboardShortcuts: false,
			draggable: false,
			disableDoubleClickZoom: true,
			scrollwheel: false,
			streetViewControl: false,
			styles: this.options.styles || {},
			backgroundColor: 'transparent'
		});

		this._mutant = map;

		google.maps.event.addListenerOnce(map, 'idle', function () {
			var nodes = this._mutantContainer.querySelectorAll('a');
			for (var i = 0; i < nodes.length; i++) {
				nodes[i].style.pointerEvents = 'auto';
			}
		}.bind(this));

		// 🍂event spawned
		// Fired when the mutant has been created.
		this.fire('spawned', {mapObject: map});
	},

	_attachObserver: function _attachObserver (node) {
// 		console.log('Gonna observe', node);

		var observer = new MutationObserver(this._onMutations.bind(this));

		// pass in the target node, as well as the observer options
		observer.observe(node, { childList: true, subtree: true });
	},

	_onMutations: function _onMutations (mutations) {
		for (var i = 0; i < mutations.length; ++i) {
			var mutation = mutations[i];
			for (var j = 0; j < mutation.addedNodes.length; ++j) {
				var node = mutation.addedNodes[j];

				if (node instanceof HTMLImageElement) {
					this._onMutatedImage(node);
				} else if (node instanceof HTMLElement) {
					Array.prototype.forEach.call(node.querySelectorAll('img'), this._onMutatedImage.bind(this));
				}
			}
		}
	},

	// Only images which 'src' attrib match this will be considered for moving around.
	// Looks like some kind of string-based protobuf, maybe??
	// Only the roads (and terrain, and vector-based stuff) match this pattern
	_roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+)!/,

	// On the other hand, raster imagery matches this other pattern
	_satRegexp: /x=(\d+)&y=(\d+)&z=(\d+)/,

	// On small viewports, when zooming in/out, a static image is requested
	// This will not be moved around, just removed from the DOM.
	_staticRegExp: /StaticMapService\.GetMapImage/,

	_onMutatedImage: function _onMutatedImage (imgNode) {
// 		if (imgNode.src) {
// 			console.log('caught mutated image: ', imgNode.src);
// 		}

		var coords;
		var match = imgNode.src.match(this._roadRegexp);
		var sublayer = 0;

		if (match) {
			coords = {
				z: match[1],
				x: match[2],
				y: match[3]
			};
			if (this._imagesPerTile > 1) { 
				imgNode.style.zIndex = 1;
				sublayer = 1;
			}
		} else {
			match = imgNode.src.match(this._satRegexp);
			if (match) {
				coords = {
					x: match[1],
					y: match[2],
					z: match[3]
				};
			}
// 			imgNode.style.zIndex = 0;
			sublayer = 0;
		}

		if (coords) {
			var tileKey = this._tileCoordsToKey(coords);
			imgNode.style.position = 'absolute';
			imgNode.style.visibility = 'hidden';

			var key = tileKey + '/' + sublayer;
			// console.log('mutation for tile', key)
			//store img so it can also be used in subsequent tile requests
			this._freshTiles[key] = imgNode;

			if (key in this._tileCallbacks && this._tileCallbacks[key]) {
// console.log('Fullfilling callback ', key);
				//fullfill most recent tileCallback because there maybe callbacks that will never get a 
				//corresponding mutation (because map moved to quickly...)
				this._tileCallbacks[key].pop()(imgNode); 
				if (!this._tileCallbacks[key].length) { delete this._tileCallbacks[key]; }
			} else {
				if (this._tiles[tileKey]) {
					//we already have a tile in this position (mutation is probably a google layer being added)
					//replace it
					var c = this._tiles[tileKey].el;
					var oldImg = (sublayer === 0) ? c.firstChild : c.firstChild.nextSibling;
					var cloneImgNode = this._clone(imgNode);
					c.replaceChild(cloneImgNode, oldImg);
				}
			}
		} else if (imgNode.src.match(this._staticRegExp)) {
			imgNode.style.visibility = 'hidden';
		}
	},


	createTile: function (coords, done) {
		var key = this._tileCoordsToKey(coords);

		var tileContainer = L.DomUtil.create('div');
		tileContainer.dataset.pending = this._imagesPerTile;
		done = done.bind(this, null, tileContainer);

		for (var i = 0; i < this._imagesPerTile; i++) {
			var key2 = key + '/' + i;
			if (key2 in this._freshTiles) {
				var imgNode = this._freshTiles[key2];
				tileContainer.appendChild(this._clone(imgNode));
				tileContainer.dataset.pending--;
// 				console.log('Got ', key2, ' from _freshTiles');
			} else {
				this._tileCallbacks[key2] = this._tileCallbacks[key2] || [];
				this._tileCallbacks[key2].push( (function (c/*, k2*/) {
					return function (imgNode) {
						c.appendChild(this._clone(imgNode));
						c.dataset.pending--;
						if (!parseInt(c.dataset.pending)) { done(); }
// 						console.log('Sent ', k2, ' to _tileCallbacks, still ', c.dataset.pending, ' images to go');
					}.bind(this);
				}.bind(this))(tileContainer/*, key2*/) );
			}
		}

		if (!parseInt(tileContainer.dataset.pending)) {
			L.Util.requestAnimFrame(done);
		}
		return tileContainer;
	},

	_clone: function (imgNode) {
		var clonedImgNode = imgNode.cloneNode(true);
		clonedImgNode.style.visibility = 'visible';
		return clonedImgNode;
	},

	_checkZoomLevels: function () {
		//setting the zoom level on the Google map may result in a different zoom level than the one requested
		//(it won't go beyond the level for which they have data).
		var zoomLevel = this._map.getZoom();
		var gMapZoomLevel = this._mutant.getZoom();
		if (!zoomLevel || !gMapZoomLevel) return;


		if ((gMapZoomLevel !== zoomLevel) || //zoom levels are out of sync, Google doesn't have data
			(gMapZoomLevel > this.options.maxNativeZoom)) { //at current location, Google does have data (contrary to maxNativeZoom)
			//Update maxNativeZoom
			this._setMaxNativeZoom(gMapZoomLevel);
		}
	},

	_setMaxNativeZoom: function (zoomLevel) {
		if (zoomLevel != this.options.maxNativeZoom) {
			this.options.maxNativeZoom = zoomLevel;
			this._resetView();
		}
	},

	_reset: function () {
		this._initContainer();
	},

	_update: function () {
		// zoom level check needs to happen before super's implementation (tile addition/creation)
		// otherwise tiles may be missed if maxNativeZoom is not yet correctly determined
		if (this._mutant) {
			var center = this._map.getCenter();
			var _center = new google.maps.LatLng(center.lat, center.lng);

			this._mutant.setCenter(_center);
			var zoom = this._map.getZoom();
			var fractionalLevel = zoom !== Math.round(zoom);
			var mutantZoom = this._mutant.getZoom();

			//ignore fractional zoom levels
			if (!fractionalLevel && (zoom != mutantZoom)) {
				this._mutant.setZoom(zoom);
							
				if (this._mutantIsReady) this._checkZoomLevels();
				//else zoom level check will be done later by 'idle' handler
			}
		}

		L.GridLayer.prototype._update.call(this);
	},

	_resize: function () {
		var size = this._map.getSize();
		if (this._mutantContainer.style.width === size.x &&
			this._mutantContainer.style.height === size.y)
			return;
		this.setElementSize(this._mutantContainer, size);
		if (!this._mutant) return;
		google.maps.event.trigger(this._mutant, 'resize');
	},

	_handleZoomAnim: function () {
		if (!this._mutant) return;
		var center = this._map.getCenter();
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._mutant.setCenter(_center);
		this._mutant.setZoom(Math.round(this._map.getZoom()));
	},

	// Agressively prune _freshtiles when a tile with the same key is removed,
	// this prevents a problem where Leaflet keeps a loaded tile longer than
	// GMaps, so that GMaps makes two requests but Leaflet only consumes one,
	// polluting _freshTiles with stale data.
	_removeTile: function (key) {
		if (!this._mutant) return;

		//give time for animations to finish before checking it tile should be pruned
		setTimeout(this._pruneTile.bind(this, key), 1000);


		return L.GridLayer.prototype._removeTile.call(this, key);
	},

	_pruneTile: function (key) {
		var gZoom = this._mutant.getZoom();
		var tileZoom = key.split(':')[2];
		var googleBounds = this._mutant.getBounds();
		var sw = googleBounds.getSouthWest();
		var ne = googleBounds.getNorthEast();
		var gMapBounds = L.latLngBounds([[sw.lat(), sw.lng()], [ne.lat(), ne.lng()]]);

		for (var i=0; i<this._imagesPerTile; i++) {
			var key2 = key + '/' + i;
			if (key2 in this._freshTiles) { 
				var tileBounds = this._map && this._keyToBounds(key);
				var stillVisible = this._map && tileBounds.overlaps(gMapBounds) && (tileZoom == gZoom);

				if (!stillVisible) delete this._freshTiles[key2]; 
//				console.log('Prunning of ', key, (!stillVisible))
			}
		}
	}
});


// 🍂factory gridLayer.googleMutant(options)
// Returns a new `GridLayer.GoogleMutant` given its options
L.gridLayer.googleMutant = function (options) {
	return new L.GridLayer.GoogleMutant(options);
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-leaflet-googlemutant.js.map