"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = emom;

var _variables = require("./variables.js");

var _random = _interopRequireDefault(require("./random.js"));

var _test = _interopRequireDefault(require("./test.js"));

var _segundos = _interopRequireDefault(require("./segundos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function emom(contador) {
  var duracion = (0, _random["default"])(3, 5);
  var wod = [];
  var titulo = ["EMOM 12 minutos | ".concat(12 / duracion, " rounds")];

  for (var i = 0; i < duracion; i++) {
    var ejercicio = (0, _random["default"])(0, _variables.ejercicios.length);

    if (_variables.indexEjercicios.includes(ejercicio)) {
      i--;
    } else {
      (0, _segundos["default"])(ejercicio, wod, 0);
    }
  }

  (0, _test["default"])(titulo, wod, contador);

  _variables.indexGrupo.push(1);
}