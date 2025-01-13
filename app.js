let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let newBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0 = true;
let winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let resetGame =()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("btn was clicked");
        if(turn0){
            box.innerText ="O";
            turn0 = false;
        } else {
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled =true;
        checkWinner();
 });
});
let enableBoxes =() => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

let disableBoxes =() => {
    for(let box of boxes) {
        box.disabled=true;
    }
}
const showWinner = (Winner) => {
msg.innerText = `Congratulations, The winner is ${Winner}`;
msgContainer.classList.remove("hide");
 disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
    //     console.log(pattern[0],pattern[1],pattern[2]);
    //     console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
   let posVal1 = boxes[pattern[0]].innerText;
   let posVal2 = boxes[pattern[1]].innerText;
   let posVal3 = boxes[pattern[2]].innerText;
   if(posVal1 != "" && posVal2 != "" && posVal3 != "") {
    if(posVal1 === posVal2 && posVal2 === posVal3) {

        showWinner(posVal1);
    }
   }
}
};

// we use new function for game reset
new_btn.addEventListener("click",resetGame); 
reset_btn.addEventListener("click",resetGame);
