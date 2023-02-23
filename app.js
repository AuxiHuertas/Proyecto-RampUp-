function selectOption() {
    const piedra = document.getElementById("piedra")
    piedra.addEventListener("click", function () {
        console.log("ha pulsado piedra");
        piedra.style.backgroundColor = "#FFC75F"
        papel.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        console.log(arrayImagenes[aleatoria()])
    


        /*console.log(arrayImagenes[aleatoria()])*/

        /* console.log(piedra)*/
    })
    const papel = document.getElementById("papel")
    papel.addEventListener("click", function () {
        console.log("Ha pulsado papel")
        papel.style.backgroundColor = "#F9F871"
        piedra.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        console.log(arrayImagenes[aleatoria()])
    })
    const tijera = document.getElementById("tijera")
    tijera.addEventListener("click", function () {
        console.log("Ha pulsado tijera")
        tijera.style.backgroundColor = "#F9F871"
        papel.style.backgroundColor = "lightblue"
        piedra.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
        console.log(arrayImagenes[aleatoria()])
    })
    const lagarto = document.getElementById("lagarto")
    lagarto.addEventListener("click", function () {

        console.log("Ha pulsado lagarto")

        lagarto.style.backgroundColor = "#4E8397"
        tijera.style.backgroundColor = "lightblue"
        papel.style.backgroundColor = "lightblue"
        piedra.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"

        console.log(arrayImagenes[aleatoria()])
    })
    const spock = document.getElementById("spock")
    spock.addEventListener("click", function () {
        console.log("Ha pulsado spock")
        spock.style.backgroundColor = "#4E8397"
        lagarto.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        papel.style.backgroundColor = "lightblue"
        piedra.style.backgroundColor = "lightblue"

        console.log(arrayImagenes[aleatoria()])
    })
}
selectOption();

let opcionPC = document.querySelector("#opcionpc")


const arrayImagenes = [document.getElementById("imagenpiedra"), document.getElementById("imagenpapel"), document.getElementById("imagentijera"), document.getElementById("imagenlagarto"), document.getElementById("imagenspock")]
console.log(arrayImagenes)

function aleatoria() {
    return Math.floor(Math.random() * arrayImagenes.length + 1)
}
console.log(arrayImagenes[aleatoria()]);