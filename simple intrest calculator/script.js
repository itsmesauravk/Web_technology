const btn = document.querySelector("#btn")
btn.addEventListener("click", () =>{
    const principle = document.querySelector("#amount").value
    const rate = document.querySelector("#rate").value
    const time = document.querySelector("#time").value
    const result = document.querySelector("#result")
    const perc = document.querySelector("#percentage")
    perc.textContent = rate + " %"
    console.log(rate)
    output = (principle * rate * time)/100
    result.textContent = output
})