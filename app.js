// Array con las imagenes para la funcion aleatoria
const pathsList = ['Lagarto', 'Papel', 'Piedra', 'Spock', 'Tijeras']
// Funcion para elegir una imagen aleatoriamente cada vez que llames a la funcion
let result = aleatoria()
function aleatoria() {
    return Math.floor(Math.random() * pathsList.length)
}

// Estas dos variables sin valor se crean para valorarlas en funciones, y poder utilizarlas a lo largo del codigo igualmente.
let estadoImagenMaquina
let estadoImagenUsuario

// Dentro de esta funcion hemos dado valor a la variable estadoImagenMaquina, y será el mismo valor cada vez que la utilices en el codigo.
function CreateImageMachine() {
    estadoImagenMaquina = (pathsList[aleatoria()])
    const machineTurn = document.createElement('img')
    machineTurn.setAttribute('src', `imagenes/${estadoImagenMaquina}.png`)
    machineTurn.setAttribute('id', "machineTurn")
    const machineContainer = document.querySelector('#imagenOpcionPC')


    //Variable que recojerá la imagen de la maquina tras el primer click
    let viejo = document.getElementById("machineTurn")

    // Condicion para mostrar o no la imagen de opcion del PC
    if (viejo) {
        //Esto es para sustituir la imagen vieja por la nueva
        machineContainer.replaceChild(machineTurn, viejo)
    }
    else {
        // Y esto es para crear la imagen para el primer click
        machineContainer.appendChild(machineTurn)
    }
}

// condiciones del juego con mensaje de navegador
function mensajes() {

    if (estadoImagenMaquina === estadoImagenUsuario) {
        return "Empate"
    }
    else if (estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Tijeras' || estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Lagarto') {

        return "Tijera decapitan a lagarto"
    }
    else if (estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Tijeras' || estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Papel') {

        return "Tijera cortan papel"
    }
    else if (estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Papel' || estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Spock') {
        return "Papel desautoriza a Spock"
    }
    else if (estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Papel' || estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Piedra') {
        return "Papel envuelve a piedra"
    }
    else if (estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Piedra' || estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Tijeras') {

        return "Piedra aplasta a tijera"
    }
    else if (estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Piedra' || estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Lagarto') {

        return "Piedra aplasta a lagarto"
    }
    else if (estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Lagarto' || estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Papel') {

        return "Lagarto devora a papel"
    }
    else if (estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Lagarto' || estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Spock') {

        return "Lagarto envenena a Spock"
    }
    else if (estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Spock' || estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Tijeras') {

        return "Spock desintegra tijera"
    }
    else if (estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Spock' || estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Piedra') {

        return "Spock vaporiza a Piedra"
    }
    else {

        return "No has pulsado correctamente"
    }
}

// Funcion que añade el mensaje de la funcion If else en el navegador,
function mensajesNavegador() {
    const tagMensajes = document.createElement('p');
    tagMensajes.setAttribute('id', "tagMensajes")
    tagMensajes.textContent = `${mensajes()}`;
    const mensajesContainer = document.getElementById("contenedorMensajes");

    let MensajeAnterior = document.getElementById("tagMensajes")
// Aqui añado condicion para que el navegador añada el mensaje, o reemplace por uno nuevo si hay uno anterior
    if (MensajeAnterior) {
        mensajesContainer.replaceChild(tagMensajes, MensajeAnterior)
    } else {
        mensajesContainer.appendChild(tagMensajes)
    }
}


// Funcion inicial desde donde empieza el juego, contiene el evento, y la llamada a todas las funciones que queremos que ejecute con ese evento. 
function selectOption() {
    //const pc = document.getElementById("imagenOpcionPC")
    const piedra = document.getElementById("piedra")
    piedra.addEventListener("click", function () {
        // Hemos dado valor a la variable estadoImagenUsuario para el botón piedra, al igual en el resto de botones
        estadoImagenUsuario = "Piedra";
        piedra.style.backgroundColor = "#f9f97182"
        papel.style.backgroundColor = "#69727984"
        tijera.style.backgroundColor = "#69727984"
        lagarto.style.backgroundColor = "#69727984"
        spock.style.backgroundColor = "#69727984"
        CreateImageMachine()
        mensajesNavegador()


    })

    const papel = document.getElementById("papel")
    papel.addEventListener("click", function () {
        estadoImagenUsuario = "Papel";
        papel.style.backgroundColor = "#f9f97182"
        piedra.style.backgroundColor = "#69727984"
        tijera.style.backgroundColor = "#69727984"
        lagarto.style.backgroundColor = "#69727984"
        spock.style.backgroundColor = "#69727984"
        CreateImageMachine()
        mensajesNavegador()

    })

    const tijera = document.getElementById("tijera")
    tijera.addEventListener("click", function () {
        estadoImagenUsuario = "Tijeras"
        tijera.style.backgroundColor = "#f9f97182"
        papel.style.backgroundColor = "#69727984"
        piedra.style.backgroundColor = "#69727984"
        lagarto.style.backgroundColor = "#69727984"
        spock.style.backgroundColor = "#69727984"
        CreateImageMachine()
        mensajesNavegador()

    })
    const lagarto = document.getElementById("lagarto")
    lagarto.addEventListener("click", function () {
        estadoImagenUsuario = "Lagarto"
        lagarto.style.backgroundColor = "#f9f97182"
        papel.style.backgroundColor = "#69727984"
        piedra.style.backgroundColor = "#69727984"
        tijera.style.backgroundColor = "#69727984"
        spock.style.backgroundColor = "#69727984"
        CreateImageMachine()
        mensajesNavegador()

    })
    const spock = document.getElementById("spock")
    spock.addEventListener("click", function () {
        estadoImagenUsuario = "Spock";
        spock.style.backgroundColor = "#f9f97182"
        lagarto.style.backgroundColor = "#69727984"
        tijera.style.backgroundColor = "#69727984"
        papel.style.backgroundColor = "#69727984"
        piedra.style.backgroundColor = "#69727984"
        CreateImageMachine()
        mensajesNavegador()
    })
}

selectOption();

