"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Container that will store and remember the relative positions and z-indexes of child components.
 * This component defaults to 100% of the height and width of its parent container.
 * @param {*} props
 * @returns
 */
var ProPanelContainer = function ProPanelContainer(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    zPanels = _useState2[0],
    setZPanels = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    panelPositions = _useState4[0],
    setPanelPositions = _useState4[1];
  var bringPanelToTop = function bringPanelToTop(name) {
    var currentOrder = _toConsumableArray(zPanels);
    var currentIndex = currentOrder.indexOf(name);
    if (currentIndex >= 0) {
      currentOrder.splice(currentIndex, 1);
    }
    currentOrder.push(name);
    setZPanels(currentOrder);
  };
  var storePanelPosition = function storePanelPosition(positionData) {
    var currentPanelPositions = _objectSpread({}, panelPositions);
    currentPanelPositions[positionData.name] = positionData;
    setPanelPositions(currentPanelPositions);
  };
  var renderChildren = function renderChildren() {
    return _react["default"].Children.map(props.children, function (child) {
      if (!child) return null;
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        bringPanelToTop: bringPanelToTop,
        storePanelPosition: storePanelPosition,
        zPanels: zPanels,
        panelPositions: panelPositions
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "panel-pro-container",
    style: {
      width: "100%",
      height: "100%",
      boxSizing: "border-box"
    }
  }, renderChildren());
};
var _default = exports["default"] = ProPanelContainer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRnd = require("react-rnd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Higher-Order Component that wraps a component and allows it to be resized and dragged
 * Will store its size / position / z-index relative to other Pro Panels if it is a direct child of a ProPanelContainer component.
 * @param {*} WrappedComponent
 * @returns
 */
var withProPanel = function withProPanel(WrappedComponent) {
  var HOC = function HOC(_ref) {
    var defaults = _ref.defaults,
      bringPanelToTop = _ref.bringPanelToTop,
      storePanelPosition = _ref.storePanelPosition,
      zPanels = _ref.zPanels,
      panelPositions = _ref.panelPositions;
    // Read from a panel's stored position if it has been opened before
    var prevPositions = panelPositions[defaults.name] ? panelPositions[defaults.name] : defaults;
    return /*#__PURE__*/_react["default"].createElement(_reactRnd.Rnd, {
      "default": prevPositions,
      style: {
        zIndex: 100 + zPanels.indexOf(defaults.name)
      },
      onMouseDown: function onMouseDown() {
        return bringPanelToTop(defaults.name);
      },
      bounds: "parent",
      onResizeStop: function onResizeStop(a, b, c, delta, position) {
        return storePanelPosition(_objectSpread(_objectSpread({}, prevPositions), {}, {
          height: prevPositions.height + delta.height,
          width: prevPositions.width + delta.width,
          x: position.x,
          y: position.y
        }));
      },
      onDragStop: function onDragStop(a, data) {
        return storePanelPosition(_objectSpread(_objectSpread({}, prevPositions), {}, {
          x: data.x,
          y: data.y
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(WrappedComponent, props));
  };
  return HOC;
};
var _default = exports["default"] = withProPanel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ProPanelContainer", {
  enumerable: true,
  get: function get() {
    return _ProPanelContainer["default"];
  }
});
exports["default"] = void 0;
Object.defineProperty(exports, "withProPanel", {
  enumerable: true,
  get: function get() {
    return _withProPanel["default"];
  }
});
var _ProPanelContainer = _interopRequireDefault(require("./components/ProPanelContainer.js"));
var _withProPanel = _interopRequireDefault(require("./components/withProPanel.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = _withProPanel["default"];
