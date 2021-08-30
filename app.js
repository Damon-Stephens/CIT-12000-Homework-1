var input_bill=Number(prompt("What is your bill?"));
var taxed_bill=input_bill*1.07;
var tip_amount=taxed_bill*.05;
var total=tip_amount+taxed_bill;
var element=document.body.querySelector(".box");

element.innerHTML=total;