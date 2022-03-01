const button = document.querySelector("#button")
const button2 = document.querySelector("#button2")
const container = document.querySelector(".container")
console.log(button)
console.log(container)


const colors = [["#0099F7", "#F11712"], ["#0caaF7", "#F1aaa2"],["#5A3F37", "#2C7744"], ["#4DA0B0", "#D39D38" ]]


let count = 0

button.addEventListener("click", function(){

    
    container.style.background = `linear-gradient(45deg, ${colors[0 + count][0]}, ${colors[0 + count][1]})`;
    count ++
    console.log(count)
    
    if (count > colors.length - 1){
        count = 0
        console.log(count)
    }
})

button2.addEventListener("click", function(){
    container.style.background = "#f0f"
    count = 0
})

