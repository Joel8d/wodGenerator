"use strict";

var _tipowod = _interopRequireDefault(require("./tipowod.js"));

var _wod_gen = _interopRequireDefault(require("./wod_gen.js"));

var _variables = require("./variables.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var arrayWod = (0, _wod_gen["default"])();
var contador = 0;
arrayWod.forEach(function (Element) {
  return (0, _tipowod["default"])(Element, contador++);
}); //Añade los valores a los draggeables
//Draggeable Ejercicios

_variables.ejercicios.forEach(function (Element) {
  var temp = document.createElement('option');
  temp.innerHTML = Element;
  document.getElementById("addExercise").appendChild(temp);
}); //Draggeable Reps


_variables.allreps.forEach(function (Element) {
  var temp = document.createElement('option');
  temp.innerHTML = Element;
  document.getElementById("addReps").appendChild(temp);
});

var button = document.getElementById("add");

button.onclick = function () {
  var e = document.getElementById("addExercise");
  var eValue = e.options[e.selectedIndex].value;
  var f = document.getElementById("SelectCard");
  var fvalue = f.options[f.selectedIndex].value;
  var g = document.getElementById("addReps");
  var gvalue = g.options[g.selectedIndex].value;
  var temp = document.createElement('h4');
  temp.className = 'Elementos'; //Asigna el ejercicio

  if (gvalue === "") {
    temp.innerHTML = "".concat(eValue);
  } else {
    temp.innerHTML = "".concat(gvalue, " ").concat(eValue);
  }

  var but = document.createElement('span'); //crea boton eliminar

  but.className = 'delbut';
  but.id = 'delbut';

  but.onclick = function () {
    but.parentElement.remove();
  };

  var moveBut = document.createElement('h5');
  moveBut.className = 'movebut'; //selecciona a que tarjeta se añade

  switch (fvalue) {
    case "Tarjeta 1":
      {
        var tarjeta = document.getElementById("ul 0");
        console.log(tarjeta);
        var div = document.createElement('div');
        div.className = 'seleccion';
        tarjeta.appendChild(div);
        div.append(moveBut, temp, but);
        break;
      }

    case "Tarjeta 2":
      {
        var tarjeta = document.getElementById("ul 1");
        console.log(tarjeta);

        var _div = document.createElement('div');

        _div.className = 'seleccion';
        tarjeta.appendChild(_div);

        _div.append(moveBut, temp, but);

        break;
      }

    case "Tarjeta 3":
      {
        var tarjeta = document.getElementById("ul 2");
        console.log(tarjeta);

        var _div2 = document.createElement('div');

        _div2.className = 'seleccion';
        tarjeta.appendChild(_div2);

        _div2.append(moveBut, temp, but);

        break;
      }
  }
}; //Funcion aparecer y ocultar


var toggle = document.getElementById("checkbox");

toggle.onclick = function () {
  var contAddEx = document.getElementById("contenedor_addEx");

  if (toggle.checked === true) {
    contAddEx.style.visibility = "visible";
    contAddEx.style.display = "flex";
  } else {
    contAddEx.style.visibility = "none";
    contAddEx.style.display = "none";
  }
};