let buttons = document.querySelectorAll(".boxes");
let defaultNum = document.querySelector(".screen");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");

let currentInput = "";

buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const value = button.textContent;

        if(value === "="){
            try{
                const expression = currentInput.replace(/X/g,"*");
                let result = eval(expression);
                currentInput = result.toString();
                defaultNum.textContent = currentInput;
            } catch{
                defaultNum.textContent = "Error";
                currentInput = "";
            }
            return;
        }

        if(button.classList.contains("operator") || button.classList.contains("operand")){
            if(defaultNum.textContent === "0" && value !== "."){
                 currentInput = value;
            } else {
                currentInput+= value;
            }
            
            defaultNum.textContent = currentInput;
        
        }
    })
})

clearBtn.addEventListener('click', ()=>{
    currentInput = "";
    defaultNum.textContent = "0";
})

deleteBtn.addEventListener('click', ()=>{
   currentInput = currentInput.slice(0,-1);
    defaultNum.textContent = currentInput || "0";
})


