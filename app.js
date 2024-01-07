let myScore=0;
let compScore=0;
const boxes=document.querySelectorAll(".box");
const changeOutput=document.querySelector(".output");
let updateMyScore=document.querySelector(".yourscore");
let updateCompScore=document.querySelector(".compscore");
const Arr=["Rock","Paper","Scissor"];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        let id=box.getAttribute("id");
        console.log("choice was clicked",id);
        let compChoice=computerChoice();
        if(Arr[compChoice]==id)
        {
            changeOutput.innerText="Its a draw!";
            changeOutput.style.backgroundColor="#081b31";
            changeOutput.style.width="200px";
            changeOutput.style.marginLeft="560px";
        }
        else if(id=="Rock"&&Arr[compChoice]=="Scissor"||id=="Paper"&&Arr[compChoice]=="Rock"||id=="Scissor"&&Arr[compChoice]=="Paper")
        {
           
            myScore++;
            updateMyScore.innerText=myScore;
            changeOutput.innerText=`You won. ${id} beats ${Arr[compChoice]}`;
            changeOutput.style.backgroundColor="green";
            changeOutput.style.width="400px";
            changeOutput.style.marginLeft="470px";
            
        }
        else{
            
            compScore++;
            updateCompScore.innerText=compScore;
            changeOutput.innerText=`You lost. ${Arr[compChoice]} beats ${id}`;
            changeOutput.style.backgroundColor="red";
            changeOutput.style.width="400px";
            changeOutput.style.marginLeft="470px";
            
        }
    })   
});


let computerChoice=()=> {
    return Math.floor(Math.random()*3);
}