const coinArray=["heads","tails"];
let score=[0,0];
const message = document.querySelector(".message");
const Buttons = document.querySelectorAll("button");
for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click", coin);
}
function coin(e) {
    let outpot;
    let playerselect=e.target.innerText;
    let tass=Math.floor(Math.random()*2);
    let computerselect=coinArray[tass];
    message.innerHTML="Computer Selected: "+computerselect;
    if(playerselect===computerselect){
        outpot="player win!";
        score[0]++;
    }
    else{
        outpot="Computre win!";
        score[1]++;
    }
    message.innerHTML+="<br/>Computer Score: "+score[1]+"    Player Score: "+score[0]+"  "
    +outpot;
}