  //variables
let ButtonClick = 0;
let Cash=1000;
let Population = 300;
let Environment = 100;
let Happy = 100;
let Poverty = 10;

//the function startup of the game, sets everything up
function startgame() {
  ButtonClick = ButtonClick + 1;
  document.getElementById("text").innerHTML = "You are the newly elected mayor of Oaktown, a town who is in the middle of a climate disaster. Now you will be making decision for the next four years. Good Luck!";
  document.getElementById("cashtxt").innerHTML = Cash;
  document.getElementById("poptxt").innerHTML = Population;
  document.getElementById("envtxt").innerHTML = Environment;
  document.getElementById("hpptxt").innerHTML = Happy;
  document.getElementById("povtxt").innerHTML = Poverty;
  document.getElementById("clicks").innerHTML = ButtonClick;
  document.getElementById("button1").innerHTML = "Okay";
  event1();
 
}



//events that runs
function event1(){
  if (ButtonClick > 1){
    document.getElementById("text").innerHTML = "Your first task is should the government enact a law limiting gas car purchases?";
    document.getElementById("button1").style.display = 'none';
    document.getElementById('button2').style.visibility = "visible"
    document.getElementById('button3').style.visibility = "visible"  
  }
}

function event2(){
  Cash= Cash-100;
  Happy=Happy-5;
  Poverty=Poverty+5;
  Population=Population-10;
  Environment=Environment-10;
}

function event3(){
  Cash=Cash+100;
  Happy=Happy+5;
  Poverty=Poverty-2;
  Population=Population+10;
  Environment=Environment+5;
}
