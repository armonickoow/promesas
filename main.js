const cargarAlbums = async function () {
try {
const url = 'https://jsonplaceholder.typicode.com/photos';
const datos = await fetch(url);
const albunes = await datos.json();

const primeros20 = albunes.slice(0, 20);

let html = '';

    primeros20.forEach((album) => {
        html += `<li>${album.title}</li>`;
    });

    document.getElementById('lista-albunes').innerHTML = html;
    } catch (error) {
    console.log('Ha ocurrido un problema');
    console.error(error);
    }
};



const enviarInfo = function () {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Informacion enviada'), 3000);
    });
};



enviarInfo().then((resp) => {
    console.log(resp);
    cargarAlbums();
});