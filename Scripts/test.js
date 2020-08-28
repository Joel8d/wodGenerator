export default function imprimir(titulos, wod, contador){
    var f = document.createElement('article')
    f.id = contador
    document.getElementById('contenedor_tarjetas').appendChild(f)    
    
    
    var g = document.createElement('div')
    g.id = `div ${contador}` 
    document.getElementById(f.id).appendChild(g)
    
    titulos.forEach(element => {
        let temp = document.createElement('h1');
        temp.className = 'Titulo';
        temp.innerHTML = element;
        document.getElementById(g.id).appendChild(temp);
    });
    wod.forEach(element => {
        let temp = document.createElement('li');
        temp.className = 'Elementos';
        temp.innerHTML = element;
        document.getElementById(g.id).appendChild(temp);
    });
}
