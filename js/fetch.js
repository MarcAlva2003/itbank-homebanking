// const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

// fetch(url)
//     .then(response => response.json() )
//     .then(data => {

//         let element = document.getElementById('elemen')
//         element.innerHTML = '<p>${data.name}</p>'


//         console.log(data)
//     })
//     .catch(err=>console.log(err))

const contenedorDolares = document.getElementById('tets');

function imprimirValores(dolar){
    
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