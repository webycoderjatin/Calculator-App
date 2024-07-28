
let input = document.querySelector("#input")
let buttons = document.querySelectorAll(".btn")
let equal = document.querySelector(".btn-equal")
let reset = document.querySelector(".reset")

buttons.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        input.value +=e.target.innerHTML
    })
});

equal.addEventListener("click",()=>{
    input.value = eval(input.value.replace("×","*").replace("÷","/"))
})

reset.addEventListener("click",()=>{
    input.value = 0
})