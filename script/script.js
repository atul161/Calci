"use strict";
let ans = document.getElementById("ans");
let expression="" ;
let no = document.getElementsByClassName('no');
let expressionElement = document.getElementById("expression");

for ( let i = 0; i< no.length;i++){
 no[i].addEventListener('click' , function () {
     expression =  expression + no[i].innerText.toString();
      expressionElement.innerText = expression;
  });
}

let mathsSign = document.getElementsByClassName('mathSign');
for(let  i=0 ; i< mathsSign.length ; i++){
  mathsSign[i].addEventListener('click' , function () {
    expression = expression + mathsSign[i].innerText.toString() ;
    expressionElement.innerText = expression;
  });
}

document.getElementById('equal').addEventListener('click' , function () {
 ans.innerText =  parseFloat(eval(expression)).toFixed(5);
 expression = "";
});

document.getElementById('clear').addEventListener('click' , function () {
 expression = "";
 expressionElement.innerText = "Expression";
 ans.innerText = "0";
});

document.getElementById("oposite").addEventListener('click',function(){
 if(parseFloat(ans.innerText.toString()) > 0){
  ans.innerText = "-"+ans.innerText.toString();
 }else if(parseFloat(ans.innerText.toString()) < 0 ){
  ans.innerText = ans.innerText.toString().replace("-","");
 }
});