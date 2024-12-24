let boxes = document.querySelectorAll(".box"); // Use querySelectorAll to select all boxes
let resetbtn = document.querySelector(".reset-button");
let newButton=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];

// Iterate over each box and attach the event listener
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if(turnO){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    checkWinner();
  });
});

const disabledboxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const resetgame=()=>{
  turnO=true;
  enabledboxes();
  msgcontainer.classList.add("hide");
}

const enabledboxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>{
  msg.innerText=`Congratulations!,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
}

const checkWinner=()=>{
  for(let pattern of winpatterns){
      let poss1val=boxes[pattern[0]].innerText;
      let poss2val=boxes[pattern[1]].innerText;
      let poss3val=boxes[pattern[2]].innerText;

      if(poss1val!="" && poss2val!="" && poss3val!=""){
        if(poss1val===poss2val && poss2val===poss3val){
            console.log("Winner",poss1val);
            showWinner(poss1val);
        }
      }
  }
};

newButton.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)
