let maara1 = 0
let kerroin1 = 0

document.getElementById("nappi").addEventListener("click", painallus)
document.getElementById("kerroin1").addEventListener("click", kerroin1Func)

function painallus(event){
    maara1 = maara1 + 1 + kerroin1
    document.getElementById("maaraDis").innerText = maara1
    document.getElementById("nappi").innerText = "+" + (1 + kerroin1)
    event.preventDefault()
}

function kerroin1Func(event){
    if(maara1 >= 10){
        kerroin1 = kerroin1 + 1
        maara1 = maara1 - 10
        document.getElementById("maaraDis").innerText = maara1
        document.getElementById("nappi").innerText = "+" + (1 + kerroin1)
    }
    event.preventDefault()
}