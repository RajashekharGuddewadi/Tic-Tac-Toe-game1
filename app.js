let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;

        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const enableBoxes = ()=>{
    for(let box of boxs){
        box.disabled =false;
        box.innerText="";
    }
}

const disebleBoxes = ()=>{
    for(let box of boxs){
        box.disabled =true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disebleBoxes();
}
const checkWinner = () =>{
    for( let pattern of winPatterns){
        

        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
        
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)