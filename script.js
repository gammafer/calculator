const screen=document.getElementById('screen');
const buttons=document.getElementsByClassName('button');

const add=(a,b)=>a+b;
const substract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;

let num=0;
let acc=null;
let operation;

function writeOnScreen(){
    screen.innerHTML=num;
}

function pushedNumber(value){
    if(num==0){
        num=parseInt(value);
        writeOnScreen();
        return;
    }
    let newNumber=num.toString()+value.toString();
    num=parseInt(newNumber);
    writeOnScreen();  
}


function pushedOperation(value){
    if(value=="=" && acc!=null){
        switch(operation){
            case "+":
                num=add(acc,num);
                break;
            case "-":
                num=substract(acc,num);
                break;
            case "x":
                num=multiply(acc,num);
                break;
            case "÷":
                num=divide(acc,num);
                break;
        }
    writeOnScreen(); 
    return; 
    }
    operation=value;
        acc=num;
        num=0;
}



function calculate(pushedButton){

    let value=pushedButton.target.innerHTML;


    if(pushedButton.target.classList[1]=='num'){
           pushedNumber(value);
    }

    else if(pushedButton.target.classList[1]=='op'){
           pushedOperation(value);   
    }

    console.log(acc,num);
}



writeOnScreen(); //A 0-t is írjuk ki egyből.

Array.from(buttons).forEach(button => {
    button.addEventListener('click',e=>calculate(e));
});
