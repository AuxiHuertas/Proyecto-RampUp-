function selectOption() {
    const piedra = document.getElementById("piedra")
    piedra.addEventListener("click", function () {
        console.log("ha pulsado piedra");
        piedra.style.backgroundColor = "red"
        papel.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"

        console.log(piedra)
    })
    const papel = document.getElementById("papel")
    papel.addEventListener("click", function () {
        console.log("Ha pulsado papel")
        papel.style.backgroundColor = "yellow"
        piedra.style.backgroundColor = "lightblue"
        tijera.style.backgroundColor = "lightblue"
        lagarto.style.backgroundColor = "lightblue"
        spock.style.backgroundColor = "lightblue"
    })
    const tijera = document.getElementById("tijera")
    tijera.addEventListener("click", function () {
        console.log("Ha pulsado tijera")
    })
    const lagarto = document.getElementById("lagarto")
    lagarto.addEventListener("click", function () {
        console.log("Ha pulsado lagarto")
    })
    const spock = document.getElementById("spock")
    spock.addEventListener("click", function () {
        console.log("Ha pulsado spock")
    })
}
selectOption();

let valores =[1, 2, 3, 4, 5,]
