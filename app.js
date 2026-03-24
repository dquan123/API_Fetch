const input = document.querySelector('#inputPokemon');
const boton = document.querySelector('#btn');
const mensaje = document.querySelector('#mensaje');

//Variables de los elementos del DOM
const imagen = document.querySelector('#imagen');
const nombreEl = document.querySelector('#nombre');
const idEl = document.querySelector('#id');
const alturaEl = document.querySelector('#altura');
const pesoEl = document.querySelector('#peso');
const tipoEl = document.querySelector('#tipo');

//Función Fetch API que busca un pokemon
const cargarPokemon = async () => {

    const nombre = input.value.toLocaleLowerCase();
    try {
        mensaje.textContent = 'Cargando...';
        await new Promise(resolve => setTimeout(resolve, 1000)); //Para que se vea cuando está cargando
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        console.log(datos);
        mensaje.textContent = '';

        //Mostrar datos en el DOM
        imagen.src = datos.sprites.front_default;
        nombreEl.textContent = `Nombre: ${datos.name}`;
        idEl.textContent = `ID: ${datos.id}`;
        alturaEl.textContent = `Altura: ${datos.height}`;
        pesoEl.textContent = `Peso: ${datos.weight}`;
        tipoEl.textContent = `Tipo: ${datos.types[0].type.name}`;
    } catch (error) {
        mensaje.textContent = 'Pokemon no encontrado';
        imagen.src = '';
        nombreEl.textContent = '';
        idEl.textContent = '';
        alturaEl.textContent = '';
        pesoEl.textContent = '';
        tipoEl.textContent = '';
    }
};

document.querySelector('#btn').addEventListener('click', cargarPokemon);