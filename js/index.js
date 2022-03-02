
let deg = document.querySelector("#deg")
let colorPrime = document.querySelector("#col1")
let colorSec = document.querySelector("#col2")


let degLabel = document.querySelector("#deg_info")

// const col = document.querySelector("#col")

const clear = document.querySelector("#clear")
const container = document.querySelector(".container")


let output = document.querySelector(".output")

// conslole log

console.log(deg)
console.log(colorPrime.value)
console.log(colorSec)


console.log(container)




// colorPrime.value = "#adffff"


deg.addEventListener('input', function(e) {
    console.log(deg.value)
    degLabel.textContent = deg.value

    
    let bulletPosition = (deg.value / deg.max);
    degLabel.style.left = (bulletPosition * 180) + "px";

    container.style.background = `linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec.value} )`;
    output.textContent = `background: linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec.value} )`;
}); 


colorPrime.addEventListener('input', function(e) {
    
   colorPrime.value = e.target.value
    container.style.background = `linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec.value} )`;
    output.textContent = `background: linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec.value} )`;

}); 




colorSec.addEventListener('input', function(e) {
   colorSec.value = e.target.value
   container.style.background = `linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec.value} )`;
   output.textContent = `background: linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec.value} )`;

}); 


clear.addEventListener("click", function(e){
    e.preventDefault()
    container.style.background = "#ffffff"
   
    deg.value = "0"
    
    colorPrime.value = "#f8a5f8"
    
    colorSec.value = "#adffff"
    output.textContent = "Background..."
    degLabel.style.left = 0
    degLabel.textContent = "0"

})



