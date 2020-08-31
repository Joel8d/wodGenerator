"use strict";

var _tipowod = _interopRequireDefault(require("./tipowod.js"));

var _wod_gen = _interopRequireDefault(require("./wod_gen.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var arrayWod = (0, _wod_gen["default"])();
var contador = 0;
arrayWod.forEach(function (Element) {
  return (0, _tipowod["default"])(Element, contador++);
});
var boton = document.getElementsByClassName("delbut");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var item = _step.value;

    item.onclick = function () {
      item.parentElement.remove();
    };
  };

  for (var _iterator = boton[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}