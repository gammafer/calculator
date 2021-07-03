const screen=document.getElementById('screen');
const buttons=document.getElementsByClassName('button');
const clearBtn=document.getElementById('clear_button');

const add=(a,b)=>a+b;
const substract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;

let num=0;
let acc=null;
let operation;

function writeOnScreen(){
    if((Math.round( num * 100) / 100).toString().length<10){
         screen.innerHTML=Math.round( num * 100) / 100;
    }
    else{
        screen.innerHTML="Error";
    }

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
    if(value=="=" || acc!=null){
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
    }
    operation=value;
        acc=num;
        num=0;
};



function whatToDo(pushedButton){
    console.log('hm');
    let value=pushedButton.target.innerHTML;


    if(pushedButton.target.classList[1]=='num'){
           pushedNumber(value);
    }

    else if(pushedButton.target.classList[1]=='op'){
           pushedOperation(value);   
    }


    console.log(acc,num);

};

function clearVals(){
    num=0;
    acc=null;
    operation=null;
    writeOnScreen(); 
};

function keyboardSupport(e){
    console.log(e);
    if(e.which>47&&e.which<58||e.which>96&&e.which<106){
        pushedNumber(e.key);
    }
    else if(e.key=="+"||e.key=="-"||e.key=="*"||e.key=="/"||e.key=="="){
        pushedOperation(e.key);
    }
}


writeOnScreen(); //A 0-t is írjuk ki egyből.


clearBtn.addEventListener("click",clearVals);

Array.from(buttons).forEach(button => {
    button.addEventListener('click',e=>whatToDo(e));
});

document.addEventListener("keydown",e=>keyboardSupport(e));

