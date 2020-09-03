export default function imprimir(titulos, wod, contador){
    

    var f = document.createElement('article')
    f.id = contador
    document.getElementById('contenedor_tarjetas').appendChild(f)    

    var g = document.createElement('div')
    g.id = `ul ${contador}` 
    document.getElementById(f.id).appendChild(g)
    
    titulos.forEach(element => {
        let temp = document.createElement('h1');
        temp.className = 'Titulo';
        temp.innerHTML = element;
        document.getElementById(f.id).appendChild(temp);
    });

    wod.forEach(element => {        
        let temp = document.createElement('h4');
        temp.className = 'Elementos';
        temp.innerHTML = element;
        let moveBut = document.createElement('h5');
        moveBut.className = 'movebut'

        let delBut = document.createElement('button');
        delBut.className = 'delbut'
        delBut.id = 'delbut';
        delBut.onmousedown = function() {
            delBut.parentElement.remove();
        }
        let padre = document.getElementById(g.id)
        let div = document.createElement('div')
        div.className = 'seleccion'
        padre.appendChild(div).append(moveBut, temp, delBut)
    });

    
}
