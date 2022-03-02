
let deg = document.querySelector("#deg")
let colorPrime = document.querySelector("#col1")
let colorSec = document.querySelector("#col2")



// const col = document.querySelector("#col")

const clear = document.querySelector("#clear")
const container = document.querySelector(".container")

// conslole log

console.log(deg)
console.log(colorPrime)
console.log(colorSec)


console.log(container)


deg.addEventListener('input', function(e) {
    console.log(deg.value)
    container.style.background = `linear-gradient(${deg.value}deg, ${colorPrime}, ${colorSec} )`;
    
}); 


colorPrime.addEventListener('input', function(e) {
    
   colorPrime = e.target.value
    container.style.background = `linear-gradient(${deg.value}deg, ${colorPrime.value}, ${colorSec} )`;
}); 




colorSec.addEventListener('input', function(e) {
   colorSec = e.target.value
   container.style.background = `linear-gradient(${deg.value}deg, ${colorPrime}, ${colorSec} )`;
}); 


clear.addEventListener("click", function(){
    container.style.background = "#ffffff"
   
    deg.value = ""
    colorPrime.value = ""
    colorSec.value = ""
})



