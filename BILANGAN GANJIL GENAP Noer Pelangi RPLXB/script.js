const limitInput = document.getElementById("limit-input")
const startButton = document.getElementById("start-btn")
const startButton = document.getElementById("even-numbers")
const startButton = document.getElementById("odd-numbers")

startButton.addEventListener("click", ()=>{
    const limt = parseInt(limitInput.value)

    //memastikan input adalah bilangan positif
    if (isNaN(limit) || limit <=0){
        alert("please enter a valid positive number.")
        return;
    }

    //kosongkan tampilan sebelumnya
    oddNumberDiv.textContent = "Odd Numbers: "
    evenNumberDiv.textContent = "Even Numbers: "

    // looping dari 1 sampai limit
    for(let i = 1; i<= limit; i++){
        if(i % 2 == 0)
         evenNumberDiv.textContent += 1 + "";
    } else {
        oddNumberDiv.textContent += 1 + "";
    }
})