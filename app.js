// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    const mensajeError = document.querySelector('.msjError'); // Seleccionar el mensaje de error
    if (nombre) {
        nombresAmigos.push(nombre);
        actualizarLista();
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
        mensajeError.style.display = 'none'; // Ocultar el mensaje de error si se agrega un amigo
    } else {
        mensajeError.textContent = "***Por favor, ingrese un nombre.***"; // Mensaje de error si el nombre está vacío
        mensajeError.style.display = 'block'; // Mostrar el mensaje de error
    }
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizarla
    nombresAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        // Crea el span para el nombre del amigo
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigo;

        // Crea un botón para eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('button-remove');
        botonEliminar.onclick = () => eliminarAmigo(index); // Asocia la función de eliminación

        // Añade el nombre y el botón al <li>
        li.appendChild(nombreSpan);
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}
function eliminarAmigo(index) {
    nombresAmigos.splice(index, 1); // Elimina el amigo del array
    actualizarLista(); // vuelve a actualizar la lista
}
function sortearAmigo() {
    const mensajeError = document.querySelector('.msjError'); 
    const botonNuevoSorteo = document.querySelector('#botonNuevoSorteo');
    if (nombresAmigos.length < 2) {
        // Muestra el  mensaje de error si no hay suficientes amigos
        mensajeError.textContent = "***Por favor, añada al menos dos amigos antes de sortear.***";
        mensajeError.style.display = 'block';
        return;
    }

    mensajeError.style.display = 'none';

    const amigoSorteado = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const liResultado = document.createElement('li');
    liResultado.textContent = `¡Tu amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(liResultado);

    botonNuevoSorteo.style.display = 'inline-block';
}

function nuevoSorteo() {
    const resultado = document.getElementById('resultado');
    const botonNuevoSorteo = document.querySelector('#botonNuevoSorteo'); 
    
    resultado.innerHTML = '';
    nombresAmigos = []; 
    actualizarLista(); 
    botonNuevoSorteo.style.display = 'none';
}
