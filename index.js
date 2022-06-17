function myFunction(){
var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1; //generates random number between 1-6

var randomDiceImg = "dice"+randomNumber1+".png"; //generate random dice no. between dice1-dice6
var randomImgSource="images/"+randomDiceImg; //images/dice1.png-images/dice2.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);

var randomNumber2 = Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImgSource2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
  document.querySelector(".player2").style.color="red";
  document.querySelector(".player1").textContent="🚩Player 1";
  document.querySelector(".player1").style.color="#4CACBC";
  document.querySelector("button").textContent="Click Me To Play Again";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "🚩Player 2 wins";
  document.querySelector(".player1").style.color="red";
  document.querySelector(".player2").textContent="🚩Player 2";
  document.querySelector(".player2").style.color="#4CACBC";
  document.querySelector("button").textContent="Click Me To Play Again";
}
else{
  document.querySelector("h1").innerHTML = "🏳️Draw";
  document.querySelector("button").textContent="Click Me To Play Again";
}
}
