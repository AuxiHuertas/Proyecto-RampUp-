//const arrayImagenes = [document.getElementById("imagenpiedra"), document.getElementById("imagenpapel"), document.getElementById("imagentijera"), document.getElementById("imagenlagarto"), document.getElementById("imagenspock")]
const pathsList = ['Lagarto', 'Papel', 'Piedra', 'Spock', 'Tijeras']

let result = aleatoria()
function aleatoria() {
    return Math.floor(Math.random() * pathsList.length)
}

// Estas dos variables sin valor se crean para valorarlas en funciones, y poder utilizarlas a lo largo del codigo igualmente.
let estadoImagenMaquina
let estadoImagenUsuario

function CreateImageMachine() {
    // dentro de esta funcion hemos dado valor a la variable estadoImagenMaquina, y será el mismo valor cada vez que la utilices en el codigo.
    estadoImagenMaquina = (pathsList[aleatoria()])
    const machineTurn = document.createElement('img')
    machineTurn.setAttribute('src', `imagenes/${estadoImagenMaquina}.png`)
    machineTurn.setAttribute('id', "machineTurn")
    const machineContainer = document.querySelector('#imagenOpcionPC')


    //Variable que recoje la imagen de la maquina tras el primer click
    let viejo = document.getElementById("machineTurn")

    // Condicion para mostrar o no la opcion del PC
    if (viejo) {
        //Esto es para sustituir la imagen vieja por la nueva
        machineContainer.replaceChild(machineTurn, viejo)
    }
    else {
        // Y esto es para crear la imagen para el primer click
        machineContainer.appendChild(machineTurn)
    }
}

function mensajes() {

    if (estadoImagenMaquina === estadoImagenUsuario) {
        console.log("Empate");
        return "Empate"
    }
    else if (estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Tijeras' || estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Lagarto') {
        console.log("Tijeras decapitan a lagarto")
        return "Tijeras decapitan a lagarto"
    }
    else if (estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Tijeras' || estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Papel') {
        console.log("Tijeras cortan papel")
        return "Tijeras cortan papel"
    }
    else if (estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Papel' || estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Spock') {
        console.log("Papel desacredita a Spock")
        return "Papel desautoriza a Spock"
    }
    else if (estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Papel' || estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Piedra') {
        console.log("Papel envuelve a piedra")
        return "Papel envuelve a piedra"
    }
    else if (estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Piedra' || estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Tijeras') {
        console.log("Piedra aplasta tijeras")
        return "Piedra aplasta a tijeras"
    }
    else if (estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Piedra' || estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Lagarto') {
        console.log("Piedra aplasta a lagarto")
        return "Piedra aplasta a lagarto"
    }
    else if (estadoImagenUsuario === 'Papel' && estadoImagenMaquina === 'Lagarto' || estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Papel') {
        console.log("Lagarto devora papel")
        return "Lagarto devora a papel"
    }
    else if (estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Lagarto' || estadoImagenUsuario === 'Lagarto' && estadoImagenMaquina === 'Spock') {
        console.log("Lagarto envenena a Spock")
        return "Lagarto envenena a Spock"
    }
    else if (estadoImagenUsuario === 'Tijeras' && estadoImagenMaquina === 'Spock' || estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Tijeras') {
        console.log("Spock rompe tijeras")
        return "Spock desintegra tijeras"
    }
    else if (estadoImagenUsuario === 'Piedra' && estadoImagenMaquina === 'Spock' || estadoImagenUsuario === 'Spock' && estadoImagenMaquina === 'Piedra') {
        console.log("Spock vaporiza a piedra")
        return "Spock vaporiza a Piedra"
    }
    else {
        console.log("No has pulsado correctamente")
        return "No has pulsado correctamente"
    }
}

function mensajesNavegador (){
    const tagMensajes = document.createElement('p');
    tagMensajes.textContent =`${mensajes()}`;
    const mensajesContainer = document.getElementById("contenedorMensajes");
    mensajesContainer.appendChild(tagMensajes)
}



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
        mensajes()
        mensajesNavegador ()


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
        mensajes()
        mensajesNavegador ()

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
        mensajes()
        mensajesNavegador ()

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
        mensajes()
        mensajesNavegador ()

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
        mensajes()
        mensajesNavegador ()
    })
}

selectOption();

