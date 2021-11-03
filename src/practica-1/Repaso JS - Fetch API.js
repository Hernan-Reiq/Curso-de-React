const url = 'https://jsonplaceholder.typicode.com/users';

//EJEMPLO USANDO EL METODO GET
fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data));

//EJEMPLO USANDO EL METODO POST EN MODO ASINCRONO
const FetchAsincrono = async () => {

    const response = await fetch(url, {
        method: 'POST', //GET, POST, PUT, PATCH, DELETE
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer MI-TOKEN-DE-LA-API-QUE-ESTE-USANDO'
        },
        body: JSON.stringify({
            name: 'Hernan Demorizi Ureña',
            website: 'bit.ly/hernanreiq'
        })
    })
    const data = await response.json();

    console.log(data);
}

FetchAsincrono();