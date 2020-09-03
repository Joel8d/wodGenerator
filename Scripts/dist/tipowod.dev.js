"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tipowod;

var _forTime = _interopRequireDefault(require("./forTime.js"));

var _tabata = _interopRequireDefault(require("./tabata.js"));

var _emom = _interopRequireDefault(require("./emom.js"));

var _amrap = _interopRequireDefault(require("./amrap.js"));

var _variables = require("./variables.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function tipowod(arr, contador) {
  switch (arr) {
    case 0:
      //fortime
      console.log("fortime");
      (0, _forTime["default"])(contador);
      break;

    case 1:
      //tabata
      console.log("tabata");
      (0, _tabata["default"])(contador);
      break;

    case 2:
      //amrap
      console.log("amrap");
      (0, _amrap["default"])(contador);
      break;

    case 3:
      //emom
      console.log("emom");
      (0, _emom["default"])(contador);
      break;
  } //Asigna Grupos entre los cuales se pueden hacer draggeables o no 


  var lista = document.getElementById("ul ".concat(contador));

  if (_variables.indexGrupo[contador] === 1) {
    Sortable.create(lista, {
      //se crea grupo entre los cuales se podrá reasignar los ejercicios
      group: 2,
      // set both lists to same group
      animation: 150,
      chosenClass: "seleccionado",
      dragClass: "drag",
      removeOnSpill: true,
      // Enable plugin
      // Called when item is spilled
      onSpill: function onSpill(
      /**Event*/
      evt) {
        evt.item; // The spilled item
      }
    });
  } else {
    Sortable.create(lista, {
      //se crea grupo entre los cuales se podrá reasignar los ejercicios
      group: "".concat(_variables.indexGrupo[contador]),
      // set both lists to same group
      animation: 150,
      chosenClass: "seleccionado",
      dragClass: "drag",
      removeOnSpill: true,
      // Enable plugin
      // Called when item is spilled
      onSpill: function onSpill(
      /**Event*/
      evt) {
        evt.item; // The spilled item
      }
    });
  }
}