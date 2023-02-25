//const arrayImagenes = [document.getElementById("imagenpiedra"), document.getElementById("imagenpapel"), document.getElementById("imagentijera"), document.getElementById("imagenlagarto"), document.getElementById("imagenspock")]
const pathsList = ['Lagarto', 'Papel', 'Piedra', 'Spock', 'Tijeras']
console.log(pathsList)

let result = aleatoria()
function aleatoria() {
    return Math.floor(Math.random() * pathsList.length)
}
console.log(pathsList[aleatoria()]);

function CreateImageMachine() {

    const machineTurn = document.createElement('img')
    machineTurn.setAttribute('src', `imagenes/${pathsList[aleatoria()]}.png`)
    machineTurn.setAttribute('id', "machineTurn")
    const machineContainer = document.querySelector('#imagenOpcionPC')

    //Variable que recoje la imagen de la maquina tras el primer click
    let viejo = document.getElementById("machineTurn")

    // Condicion para mostrar o no la opcion del PC
    if (viejo) {
        console.log("existe")
    //Esto es para sustituir la imagen vieja por la nueva
        machineContainer.replaceChild(machineTurn, viejo)
    }
    else {
    // Y esto es para crear la imagen para el primer click
        machineContainer.appendChild(machineTurn)
        console.log("no existe")
    }
}

function selectOption() {
    //const pc = document.getElementById("imagenOpcionPC")
    const piedra = document.getElementById("piedra")
    piedra.addEventListener("click", function () {
        console.log("ha pulsado piedra");
        piedra.style.backgroundColor = "#F9F871"
        papel.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        CreateImageMachine()
        console.log(pathsList[aleatoria()])


    })

    const papel = document.getElementById("papel")
    papel.addEventListener("click", function () {
        console.log("Ha pulsado papel")
        papel.style.backgroundColor = "#F9F871"
        piedra.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        CreateImageMachine()

    })

    const tijera = document.getElementById("tijera")
    tijera.addEventListener("click", function () {
        console.log("Ha pulsado tijera")
        tijera.style.backgroundColor = "#F9F871"
        papel.style.backgroundColor = "lightblue"
        piedra.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        CreateImageMachine()

    })
    const lagarto = document.getElementById("lagarto")
    lagarto.addEventListener("click", function () {
        console.log("Ha pulsado lagarto")
        lagarto.style.backgroundColor = "#F9F871"
        papel.style.backgroundColor = "lightblue"
        piedra.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        CreateImageMachine()

    })
    const spock = document.getElementById("spock")
    spock.addEventListener("click", function () {
        console.log("Ha pulsado spock")
        spock.style.backgroundColor = "#F9F871"
        lagarto.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        papel.style.backgroundColor = "lightblue"
        piedra.style.backgroundColor = "lightblue"
        CreateImageMachine()
    })
}

selectOption();

