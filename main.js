let maara1 = 0
let kerroin1 = 0
let auto1 = 0
let USkerroin = 1

let arvoEnnen = 0
let lisaSekunnissa = 0

document.getElementById("nappi").addEventListener("click", painallus)
document.getElementById("kerroin1").addEventListener("click", kerroin1Func)
document.getElementById("kerroin2").addEventListener("click", kerroin2Func)
document.getElementById("kerroin3").addEventListener("click", kerroin3Func)

document.getElementById("autoKerroin1").addEventListener("click", auto1Func)
document.getElementById("autoKerroin2").addEventListener("click", auto2Func)
document.getElementById("autoKerroin3").addEventListener("click", auto3Func)

document.getElementById("Uudelleensyntyminen1").addEventListener("click", USFunc)

function painallus(event){
    maara1 = maara1 + 1 + kerroin1
    document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
    document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    event.preventDefault()
}

function kerroin1Func(event){
    if(maara1 >= 10){
        kerroin1 = kerroin1 + 1 * USkerroin
        maara1 = maara1 - 10
        document.getElementById("Kerroin").innerText = "Nykyinen lisä: " + kerroin1.toFixed(1) + "x"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

function kerroin2Func(event){
    if(maara1 >= 500){
        kerroin1 = kerroin1 + 10 * USkerroin
        maara1 = maara1 - 500
        document.getElementById("Kerroin").innerText = "Nykyinen lisä: " + kerroin1.toFixed(1) + "x"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

function kerroin3Func(event){
    if(maara1 >= 10000){
        kerroin1 = kerroin1 + 100 * USkerroin
        maara1 = maara1 - 10000
        document.getElementById("Kerroin").innerText = "Nykyinen lisä: " + kerroin1.toFixed(1) + "x"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

function auto1Func(event){
    if(maara1 >= 10){
        auto1 = auto1 + 1 * USkerroin
        maara1 = maara1 - 10
        document.getElementById("autoKerroin").innerText = "Nykyinen lisä: + " + auto1.toFixed(1) + "/s"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

function auto2Func(event){
    if(maara1 >= 500){
        auto1 = auto1 + 10 * USkerroin
        maara1 = maara1 - 500
        document.getElementById("autoKerroin").innerText = "Nykyinen lisä: + " + auto1.toFixed(1) + "/s"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

function auto3Func(event){
    if(maara1 >= 10000){
        auto1 = auto1 + 100 * USkerroin
        maara1 = maara1 - 10000
        document.getElementById("autoKerroin").innerText = "Nykyinen lisä: + " + auto1.toFixed(1) + "/s"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

function USFunc(event){
    if(maara1 >= 1000000){
        auto1 = 0
        maara1 = 0
        kerroin1 = 0
        USkerroin = USkerroin + 1
        document.getElementById("Kerroin").innerText = "Nykyinen lisä: " + kerroin1.toFixed(1) + "x"
        document.getElementById("USKerroin").innerText = "Nykyinen kerroin: + " + USkerroin.toFixed(1) + "x"
        document.getElementById("autoKerroin").innerText = "Nykyinen lisä: + " + auto1.toFixed(1) + "/s"
        document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1).toFixed(1)
    }
    event.preventDefault()
}

setInterval(() => {
    lisaSekunnissa = maara1 - arvoEnnen
    document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
    arvoEnnen = maara1
  }, 1000)

setInterval(() => {
    maara1 = maara1 + auto1
    document.getElementById("maaraDis").innerText = maara1.toFixed(1) + " +/s " + lisaSekunnissa.toFixed(1)
  }, 1000)