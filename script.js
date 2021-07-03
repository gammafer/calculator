const screen=document.getElementById('screen');
const buttons=document.getElementsByClassName('button');

const add=(a,b)=>a+b;
const substract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;

let num=0;

function getPushedButton(pushedButton){
    console.log(pushedButton);
    //writeToScreen();
    if(pushedButton.target.classList[1]=='num'){
        console.log("wow, it works!")
    }

}

Array.from(buttons).forEach(button => {
    button.addEventListener('click',e=>getPushedButton(e));
});
