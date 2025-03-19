let userScore =0;
let compScore=0;

function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber];
}
function gameWinner(userChoice,compChoice){
    if(userChoice===compChoice){
        return 0;
    }
    else if(userChoice==="Rock"){
        if(compChoice==="Paper"){
            return -1;
        }
        else{
            return 1;
        }
    }
    else if(userChoice==="Paper"){
        if(compChoice==="Scissors"){
            return -1;
        }
        else{
            return 1;
        }
    }
    else{
        if(compChoice==="Rock"){
            return -1;
        }
        else{
            return 1;
        }
    }
}
function playGame(userChoice){
    
   let compChoice=getComputerChoice();
    
    let winner=gameWinner(userChoice,compChoice);
    let userScore=document.querySelector("#userScore");
    let compScore=document.querySelector("#compScore");
    let result=document.querySelector("#msg");
   
    if(winner===0){
        result.style=" background-image: linear-gradient(135deg, #0073a4, #015c84)";
        result.innerText=`Computer picked ${compChoice} and it's a draw`;
    }
    else if(winner === 1){
        let health=userScore.innerText;
        health++;
        userScore.innerText=health;
        result.style="background-image: linear-gradient(135deg, #02aa90, #01c458)";
        result.innerText=`Computer picked ${compChoice} and You Win`;
    }
    else{
        let health=compScore.innerText;
        health++;
        compScore.innerText=health;
        result.style="background-image: linear-gradient(135deg,rgb(190, 44, 31),rgb(156, 58, 36))";
        result.innerText=`Computer picked ${compChoice} and You lose`;
    }
    
}
const choices = document.querySelectorAll('.choice');
choices.forEach((choice)=>{
    
    choice.addEventListener('click',()=>{
        
        let check=choice.getElementsByTagName("img");
        playGame(check[0].getAttribute("id"));
    })
}
)
const reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let userScore=document.querySelector("#userScore");
    let compScore=document.querySelector("#compScore");
    userScore.innerText=0;
    compScore.innerText=0;
    let result=document.querySelector("#msg");
    result.innerText='Make your choice';
    result.style=" background-image: linear-gradient(135deg, #0073a4, #015c84)";

})
