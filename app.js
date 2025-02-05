
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo'); 
    const nombre = input.value.trim();

    if (!nombre) { 
        alert('Por favor, inserte un nombre :3'); 
        return; 
    }
    amigos.push(nombre); 
    input.value = ''; 
    mostrarListaAmigos(); 
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join(''); 
}
function sortearAmigo() {
    if (!amigos.length) { 
        alert('No hay amigos en la lista para sortear.'); 
        return; 
    }
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]; 
    document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; 
}