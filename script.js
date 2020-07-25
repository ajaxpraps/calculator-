class calculator{

     constructor(previousOperand , currentOperand){
         
          this.previousOperand=previousOperand;
          this.currentOperand=currentOperand;
          this.clear();
     }

     
     clear(){
          this.previousOperand= "";
          this.previousOperand= "";
          this.operationButtons=undefined;

     }

     delete(){

     }

     apendNumber(){

     }

     chooseOperation(){

     }

     compute(){

     }
     updateDisplay(){
         
     }



}



const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operand]');
const equalButtons=document.querySelectorAll('[equal]');
const deleteButton=document.querySelectorAll('[delete]');
const allClearButton=document.querySelectorAll('[data-all-clear]');
const previousOperand=document.querySelectorAll('[data-previous]');
const currentOperand=document.querySelectorAll('[data-current]');

const calculator= new calculator(previousOperand,currentOperand);

numberButtons.forEach(button =>{
     addEventListener('click',() => {
         
          calculator.apendNumber(button.innerText);
          calculator.updateDisplay();
     })
})