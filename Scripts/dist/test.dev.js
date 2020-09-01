"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = imprimir;

function imprimir(titulos, wod, contador) {
  var f = document.createElement('article');
  f.id = contador;
  document.getElementById('contenedor_tarjetas').appendChild(f);
  var g = document.createElement('ul');
  g.id = "ul ".concat(contador);
  document.getElementById(f.id).appendChild(g);
  titulos.forEach(function (element) {
    var temp = document.createElement('h1');
    temp.className = 'Titulo';
    temp.innerHTML = element;
    document.getElementById(g.id).appendChild(temp);
  });
  wod.forEach(function (element) {
    var temp = document.createElement('li');
    temp.className = 'Elementos';
    temp.innerHTML = element;
    var but = document.createElement('span');
    but.className = 'delbut';
    but.id = 'delbut';
    document.getElementById(g.id).appendChild(temp).appendChild(but);
  });
}