

let valueDisplay = document.getElementById('display');
let toCal = document.getElementById('toCalculate');

let firstValue = '';

let secondValue = '';

let operatorSign = '';

let result = '';



function valueToDisplay (value) {

    if (operatorSign === ''){

    firstValue += value;

    valueDisplay.textContent = firstValue;

    toCal.textContent = '';   

    } 

    else {

        secondValue += value;

        console.log(` this is my first value ${firstValue} and second value ${secondValue}`);

        console.log("my operator is " + operatorSign);

        valueDisplay.textContent = secondValue;

        let show = firstValue + operatorSign  + secondValue;

        toCal.textContent = show;  

     }    

}



function decimalClick (value) {

    if (operatorSign === '' && !firstValue.includes('.')) {

        firstValue += value; 

        valueDisplay.textContent = firstValue;

        



    } else if (operatorSign !== '' && !secondValue.includes('.')){

        secondValue += value;

        valueDisplay.textContent = secondValue;

        let show = firstValue + operatorSign  + secondValue;

        toCal.textContent = show;  

    } 



}



function deleteValue(){

    if (operatorSign === ''){

        firstValue = firstValue.slice(0,-1);

        valueDisplay.textContent = firstValue;

    }

    else if (secondValue !== ''){

        secondValue = secondValue.slice(0,-1);

        valueDisplay.textContent = secondValue;

        

        let show = firstValue + operatorSign  + secondValue;

        toCal.textContent = show; 

    } else if (operatorSign !== ''){

        operatorSign = '';

        toCal.textContent = firstValue;

    }

}



function cancelCal() {

    firstValue = '';

    secondValue = '';

    toCal.textContent = '';

    valueDisplay.textContent = '0';

}



function clearDisplay() {

    secondValue = '0';

    toCal.textContent = firstValue + operatorSign;

    valueDisplay.textContent = '0';

}



function operator(value) {



    if (firstValue !== '' && secondValue !== '') {

        calResult(); 

    }



    if (firstValue === '') {

        firstValue = '0';

        operatorSign = value;

        valueDisplay.textContent = firstValue + operatorSign;

        toCal.textContent = "0";

    }

    

    operatorSign = value;

    toCal.textContent = firstValue + operatorSign;

    console.log(` this is my first value ${firstValue}`);  

    console.log("my operator is " + operatorSign)

    

    

}



function calResult () {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    
    if ((firstValue !== '' && operatorSign !== '') && secondValue === '' ){
        num2 = num1;
        let show = num1 + operatorSign  + num2;
        toCal.textContent = show; 
        switch (operatorSign){
            case '+':
                firstValue = (num1 + num2).toString();
                break;
                case '-':
                    firstValue = (num1 - num2).toString();
                break;
                case '*':
                    firstValue = (num1  * num2).toString();
                break;
                case '÷':
                    firstValue = (num1 / num2).toString();
                break;     
                default:
                    console.log('Not a Number');
           }
    } else{
        switch (operatorSign){
            case '+':
                firstValue = (num1 + num2).toString();
                break;
                case '-':
                    firstValue = (num1 - num2).toString();
                break;
                case '*':
                    firstValue = (num1  * num2).toString();
                break;
                case '÷':
                    firstValue = (num1 / num2).toString();
                break;     
                default:
                    console.log('Not a Number');
           }
    }

    
   console.log(` this is my result value ${firstValue}`); 
   valueDisplay.textContent = firstValue;
   operatorSign = '';
   secondValue = '';
   
}




function raisePower(value){

    valueDisplay.textContent = (firstValue ** 2);

    toCal.textContent = firstValue + value;

    firstValue = valueDisplay.textContent;

    

}



function sqrtNum(value){

    valueDisplay.textContent = (Math.sqrt(firstValue));

    toCal.textContent =value + firstValue;

    firstValue = valueDisplay.textContent;

}



function percentageNum (value) {

    valueDisplay.textContent = (firstValue/100);

    toCal.textContent = firstValue + value;

    firstValue = valueDisplay.textContent;

}



function oneOverNum(value) {

    valueDisplay.textContent = (1/firstValue);

    toCal.textContent =value + firstValue;

    firstValue = valueDisplay.textContent;

}



function negation (value) {

   if (operatorSign === '' && firstValue !== '') {

    firstValue = (parseFloat(firstValue) * -1).toString();

    valueDisplay.textContent = firstValue;

   } else if (secondValue !== ''){

    secondValue = (parseFloat(secondValue) * -1).toString();

    valueDisplay.textContent = secondValue;

    let show = firstValue + operatorSign  + secondValue;

    toCal.textContent = show;  

   }



}
