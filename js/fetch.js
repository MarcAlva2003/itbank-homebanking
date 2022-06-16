const contenedorDolares = document.getElementById('dolars-container-javascrips');

function imprimirValores(dolar){
    const nombreDolar = document.createElement('span');
    nombreDolar.innerHTML = dolar.nombre;

    const precioVenta = document.createElement('p');
    precioVenta.innerHTML = dolar.venta;

    const contenedorDolar = document.createElement('div')

    contenedorDolar.className = 'carta'

    contenedorDolar.appendChild(nombreDolar)
    contenedorDolar.appendChild(precioVenta)

    contenedorDolares.appendChild(contenedorDolar)
}


function llamarApiDolares(){
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => res.json()) //SE PONE COMO PRIMER THEN
        .then(res => { //RES = ARRAY DE OBJETOS
            for(dolar of res){
                imprimirValores(dolar.casa)
            }
        })
}

    llamarApiDolares()
