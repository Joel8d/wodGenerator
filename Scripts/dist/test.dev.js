"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = imprimir;

function imprimir(titulos, wod, contador) {
  var f = document.createElement('article');
  f.id = contador;
  document.getElementById('contenedor_tarjetas').appendChild(f);
  var g = document.createElement('div');
  g.id = "ul ".concat(contador);
  document.getElementById(f.id).appendChild(g);
  titulos.forEach(function (element) {
    var temp = document.createElement('h1');
    temp.className = 'Titulo';
    temp.innerHTML = element;
    document.getElementById(f.id).appendChild(temp);
  });
  wod.forEach(function (element) {
    var temp = document.createElement('h4');
    temp.className = 'Elementos';
    temp.innerHTML = element;
    var moveBut = document.createElement('h5');
    moveBut.className = 'movebut';
    var delBut = document.createElement('button');
    delBut.className = 'delbut';
    delBut.id = 'delbut';

    delBut.onmousedown = function () {
      delBut.parentElement.remove();
    };

    delBut.ontouchend = function () {
      delBut.parentElement.remove();
    };

    var padre = document.getElementById(g.id);
    var div = document.createElement('div');
    div.className = 'seleccion';
    padre.appendChild(div).append(moveBut, temp, delBut);
  });
}