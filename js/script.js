function operate(num1, num2, opt){
    let result;

    num1 = +num1;
    num2 = +num2;

    switch(opt){
        case '+':
            result = num1 + num2;    
            break;
        case '-':
            result = num1 - num2;    
            break;
        case 'x':
            result = num1 * num2;    
            break;
        case '/':
            result = num1 / num2;    
            break;
    }

    return result;
}

let resultDisplay = document.querySelector("#result");        
let calculationDisplay = document.querySelector("#calculation");        
calculationDisplay.textContent = '';
let num1 = '';
let num2 = '';
let opt = '';
let conta_opt = 0;

const calcBtnsArea = document.querySelector("#calculator-btns");
calcBtnsArea.addEventListener("click", (evt)=>{                
    if(
        evt.target.classList.contains('btn') &&
        evt.target.id != 'clear-btn' &&
        evt.target.id != 'delete-btn' &&
        evt.target.id != 'equal' &&
        evt.target.id != 'dot' 
    ){
        if(
            evt.target.id != 'sub' &&
            evt.target.id != 'multi' &&
            evt.target.id != 'divide' &&
            evt.target.id != 'plus'
        ){
            if(opt){                
                num2 += evt.target.value;
                calculationDisplay.textContent += evt.target.value;
            }
            else{             
                num1 += evt.target.value;                                
                calculationDisplay.textContent += evt.target.value;
            }            
        }
        else{            
            if(
                calculationDisplay.textContent[calculationDisplay.textContent.length - 1] != '+' &&
                calculationDisplay.textContent[calculationDisplay.textContent.length - 1] != '-' &&
                calculationDisplay.textContent[calculationDisplay.textContent.length - 1] != 'x' &&
                calculationDisplay.textContent[calculationDisplay.textContent.length - 1] != '/' &&
                calculationDisplay.textContent.length != 0
            ){
                opt = evt.target.value;                  
                conta_opt++;
                if(conta_opt > 1){
                    let result = operate(num1, num2, opt);                        
                    calculationDisplay.textContent = num1 + opt + num2;        
                    resultDisplay.textContent = result;        
                    num1 = result;
                }      
                calculationDisplay.textContent += opt;
            }
        }        
    }    
    else if(evt.target.id == 'clear-btn'){        
        calculationDisplay.textContent = '';
        resultDisplay.textContent = '';        
        num1 = '';
        num2 = '';
        opt = '';  
        conta_opt = 0;      
    }
    else if(evt.target.id == 'equal'){                
        let result = operate(num1, num2, opt);                        
        calculationDisplay.textContent = num1 + opt + num2;        
        resultDisplay.textContent = result;        
        num1 = result;
    }            
});