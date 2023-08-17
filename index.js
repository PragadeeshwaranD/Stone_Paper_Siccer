 // Subscribe function

 function button1(){
    let button=document.querySelector(".button");
    if(button.innerHTML==='Subscribe'){
        button.innerHTML='Unsubscribe';
    }else{
        button.innerHTML='Subscribe';
    }
}

//Data store

let pro=JSON.parse(localStorage.getItem('pro1'));

if(pro===null){
    pro={
        win:0,
        lose:0,
        draw:0
    }
}

console.log();





// stone_paper_siccer function

let c='';
function S_P_S(){
let a=document.querySelector('.button3').innerHTML;
let b=Math.round(Math.random()*2+1);
if(b==1){
    c='Stone';
}else if(b==2){
    c='paper';
}else if(b==3){
    c='Siccer';
}
return c;
}


//Stone function

let d='';
function stone(){
if(c=='Stone'){
    d='Draw';
}else if(c=='paper'){
    d='Lose';
}else if(c=='Siccer'){
    d='Win';
}
// return d;
if(d=='Draw'){
let z=pro.draw+=1;
document.querySelector('.label1').innerHTML=`Draw:${z}`;
}else if(d=='Win'){
let z=pro.win+=1;
document.querySelector('.label2').innerHTML=`win:${z}`;
}else if(d=='Lose'){
let z=pro.lose+=1;
document.querySelector('.label3').innerHTML=`Lose:${z}`;
}
localStorage.setItem('pro1',JSON.stringify(pro));
}



function result(){
document.querySelector('.par').innerHTML=`Result:${d}`;
document.querySelector('.par2').innerHTML=`You choose stone. Computer choose ${c}`;
}

//paper function

let e='';
function paper(){
if(c=='Stone'){
    e='Win';
}else if(c=='paper'){
    e='Draw';
}else if(c=='Siccer'){
    e='Lose';
}
if(e=='Draw'){
let z=pro.draw+=1;
document.querySelector('.label1').innerHTML=`Draw:${z}`;
}else if(e=='Win'){
let z=pro.win+=1;
document.querySelector('.label2').innerHTML=`win:${z}`;
}else if(e=='Lose'){
let z=pro.lose+=1;
document.querySelector('.label3').innerHTML=`Lose:${z}`;
}
localStorage.setItem('pro1',JSON.stringify(pro));
}

//Siccer function
function result1(){
document.querySelector('.par').innerHTML=`Result:${e}`;
document.querySelector('.par2').innerHTML=`You choose Paper. Computer choose ${c}`;
}
let f='';
function siccer(){
if(c=='Stone'){
    f='Lose';
}else if(c=='paper'){
    f='Win';
}else if(c=='Siccer'){
    f='Draw';
}
if(f=='Draw'){
let z=pro.draw+=1;
document.querySelector('.label1').innerHTML=`Draw:${z}`;
}else if(f=='Win'){
let z=pro.win+=1;
document.querySelector('.label2').innerHTML=`win:${z}`;
}else if(f=='Lose'){
let z=pro.lose+=1;
document.querySelector('.label3').innerHTML=`Lose:${z}`;
}
localStorage.setItem('pro1',JSON.stringify(pro));
}

function result2(){
document.querySelector('.par').innerHTML=`Result:${f}`;
document.querySelector('.par2').innerHTML=`You choose siccer. Computer choose ${c}`;
}

// Amazon Shipping


function inp1(){
    let y=Number(document.querySelector('.inp').value);
    if(y<=40){
        let x=Number(y+10);
        document.querySelector('.lab').innerHTML=x;
    }else if(y>40){
        document.querySelector('.lab').innerHTML=y;
    }
}
