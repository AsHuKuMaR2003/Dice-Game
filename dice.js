// alert("Are u ready??")  
var randomnum1=Math.floor( Math.random()*6+1);
var randomnum2=Math.floor( Math.random()*6+1); 
var randomdice="I" + randomnum1;
var image1= document.querySelectorAll("dice")[0];
var num1= 6 - randomnum1;
var num2= 6 - randomnum2;
console.log(randomnum1);
console.log(randomnum2);
for(var i=0;i<num1;i++){
//     document.getElementsByClassName(".spot")[6-i].style.visibility="hidden";
document.querySelectorAll(".dice1 .spot")[5-i].style.visibility="hidden";
}
// document.querySelectorAll(".spot")[2].style.visibility="hidden";
for(var j=0;j<num2;j++){
    //     document.getElementsByClassName(".spot")[6-i].style.visibility="hidden";
    document.querySelectorAll(".dice2 .spot")[5-j].style.visibility="hidden";
    }
// console.log(`I${randomnum2}`)
if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS 🚩";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}