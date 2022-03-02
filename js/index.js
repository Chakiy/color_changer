
const deg = document.querySelector("#deg")
const colorPrime = document.querySelector("#col1")
const colorSec = document.querySelector("#col2")

const bg = document.querySelector("#bg")
const clear = document.querySelector("#clear")
const container = document.querySelector(".container")

// conslole log

console.log(deg)
console.log(colorPrime)
console.log(colorSec)

console.log(bg)
console.log(container)


let degChange = 0
deg.addEventListener('input', function(e) {
    // console.log(e.target.value)
    degChange = e.target.value.trim().substring(0,3)
    container.style.background = `linear-gradient(${degChange}deg, #${colPrChange}, #${colSecChange} )`;
    // console.log(degChange)
}); 

let colPrChange = "0099F7"

colorPrime.addEventListener('input', function(e) {
    console.log(e.target.value)
    colPrChange = e.target.value.trim().substring(0,6)
    container.style.background = `linear-gradient(${degChange}deg, #${colPrChange}, #${colSecChange} )`;
    console.log(colPrChange)
}); 


let colSecChange = "F11712"

colorSec.addEventListener('input', function(e) {
    console.log(e.target.value)
    colSecChange = e.target.value.trim().substring(0,6)
    container.style.background = `linear-gradient(${degChange}deg, #${colPrChange}, #${colSecChange} )`;
    console.log(colSecChange)
}); 

const colors = [["#0099F7", "#F11712"], ["#0caaF7", "#F1aaa2"],["#5A3F37", "#2C7744"], ["#4DA0B0", "#D39D38" ]]

bg.addEventListener("click", function(){

    container.style.background = `linear-gradient(${degChange}deg, #${colPrChange}, #${colSecChange} )`;
})

clear.addEventListener("click", function(){
    container.style.background = "#ffffff"
    console.log(deg)
    deg.value = ""
    colorPrime.value = ""
    colorSec.value = ""
})
