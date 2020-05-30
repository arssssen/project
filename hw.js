var number = "";
var random = Math.floor(Math.random()*25)+1;
var guessBtn =document.getElementById("guessbtn");
var restart =document.getElementById("restart");
restart.style.visibility='hidden';
var counter = 0;


guessBtn.addEventListener('click',function() {
    
    number=document.getElementById("number").value;
    document.getElementById("number").value="";
    document.getElementById("attempt").innerHTML+= number+" ";

    if(number==random){

        document.getElementById("result").innerHTML="Congratulations! Your guessed the right number"
        restart.style.visibility="visible";


    }
    else if(number>random){

        document.getElementById("result").innerHTML="Your number is bigger"

    }
    else if(number<random){

        document.getElementById("result").innerHTML="Your number is smaller"

    }
    if(counter==5){
        document.getElementById("result").innerHTML="You lose.Press Restart to try again"
        document.getElementById("number").disabled=true;
        guessBtn.disabled=true;
        restart.style.visibility="visible";


    }
    counter++;
    
    
})
restart.addEventListener('click',function(){

    document.getElementById("number").disabled=false;
    guessBtn.disabled=false;
    document.getElementById("attempt").innerHTML="";
    document.getElementById("result").innerHTML=""
    restart.style.visibility='hidden';
    counter=0



})
