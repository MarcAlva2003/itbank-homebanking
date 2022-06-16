const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

fetch(url)
    .then(response => response.json() )
    .then(data => {

        let element = document.getElementById('elemen')
        element.innerHTML = '<p>${data.name}</p>'


        console.log(data)
    })
    .catch(err=>console.log(err))