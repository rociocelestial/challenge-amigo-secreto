// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
// Capturar el valor del campo de entrada
let input = document.getElementById("amigo");
let nombre = input.value.trim ();
// Validar la entrada
if (nombre === "" ){                                                             
alert ("Por favor, inserte un nombre.");
return;
}
// Agregar nombres de amigos en el array
amigos.push(nombre);
// Actualiza la lista
actualizarLista();
// Limpiar el campo de entrada
input.value = "";

}

// 3. Función para actualizar la lista de amigos
function actualizarLista() {
// Obtener el elemento de la lista
let lista = document.getElementById("listaAmigos");
// Limpiar la lista existente
lista.innerHTML = "";
// Recorrer sobre el array de lista de amigos
for ( let i = 0; i < amigos.length; i ++) {
// Creamos elementos de lista (<li>) para cada titulo
let li = document.createElement("li");
li.textContent = amigos[i];
// Añande el nuevo nombre a la lista
lista.appendChild(li);
} 
}

// 4. Función para sortear los amigos
function sortearAmigo() {
// Validar que haya amigos disponibles
if ( amigos.length === 0) {
 alert("No hay nombres de amigos para sortear.");
return;
 }
// Genera un indice aleatorio
let indiceAleatorio = Math.floor(Math.random()*amigos.length);
// Obtener el nombre sorteado
let amigoSorteado = amigos [indiceAleatorio];
// Mostrar el resultado
let resultado = document.getElementById("resultado");
resultado.innerHTML = `<li> El amigo sorteado es : <strong> ${amigoSorteado}</strong></li>`;
}
// Funcion para iniciar nueva lista
function nuevaLista() {
    listaAmigos.length=0
    actualizarLista();
}