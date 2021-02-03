// Selectors
let selectedByPlayer= document.querySelector(".player-selected");
let selectedByComputer= document.querySelector(".computer-selected");
let coin= document.querySelector(".head");
let playerScore= document.querySelector(".player-score");
let computerScore= document.querySelector(".computer-score");
let heads= document.querySelector(".heads");
let tails= document.querySelector(".tails");
let coinArray= ["head", "tail"];
let tossTime= [2500, 3000, 3500, 4000, 5000];
let resultPage = document.querySelector(".result");
let imageArray =["head", "tail"];
let tail = "tail";
let restartButton = document.querySelector(".start");


// Event Listeners
heads.addEventListener("click",()=>{
    selectedByPlayer.innerHTML = "head";
    selectedByComputer.innerHTML = coinArray[Math.round(Math.random())];
    
  function tossCoin(){
        coin.classList.toggle("tail");
        coin.classList.toggle("head");
    }
    let clear =setInterval(tossCoin, 250);
    
    let timedOut=setTimeout(()=>{
       clearInterval(clear);
        coin.classList.remove("head");
        coin.className= imageArray[Math.round(Math.random())];
        
            
    if(coin.className === "head"){
        playerScore.innerHTML= Number.parseFloat(playerScore.innerText) +1;
        if(selectedByComputer.innerHTML=== "head"){
            computerScore.innerHTML = Number.parseFloat(computerScore.innerText)+1;
        }
        else if(selectedByComputer.innerHTML ==="tail"){
            computerScore.innerHTML= Number.parseFloat(computerScore.innerText)+0;
        }
    }
    else if(coin.className=== "tail"){
        playerScore.innerHTML = Number.parseFloat(playerScore.innerText)+0;
        if(selectedByComputer.innerHTML=== "head"){
            computerScore.innerHTML= Number.parseFloat(computerScore.innerText)+0;
        }
        else if(selectedByComputer.innerHTML ==="tail"){
            computerScore.innerHTML = Number.parseFloat(computerScore.innerText)+1;
        }
    }
    
    if(playerScore.innerText=== "5"){
        resultPage.innerHTML = "Congrats! You Win!";
        heads.remove();
        tails.remove();
        restartButton.classList.remove("d-none");
        restartButton.addEventListener("click", ()=>{
            window.location.reload();
        });
    }
    else if(computerScore.innerHTML === "5"){
        resultPage.innerHTML = "Sorry, You Lose! Computer Wins!";
        resultPage.style.color ="red";
        heads.remove();
        tails.remove();
        restartButton.classList.remove("d-none");
        restartButton.addEventListener("click", ()=>{
            window.location.reload();
        });
    }
    else if(computerScore.innerHTML === "5" && playerScore.innerText=== "5"){
    resultPage.innerHTML = "Wow, It is a tie!";
    resultPage.style.color="blue";
    heads.remove();
    tails.remove();
    restartButton.classList.remove("d-none");
    restartButton.addEventListener("click", ()=>{
            window.location.reload();
        });
       
    }
       
   }, tossTime[Math.round(Math.random())*4]);

    
});

tails.addEventListener("click", ()=>{
    selectedByPlayer.innerHTML = "tail";
    selectedByComputer.innerHTML = coinArray[Math.round(Math.random())];
    
    function tossCoin(){
        coin.classList.toggle("tail");
        coin.classList.toggle("head");
    }
    let clear =setInterval(tossCoin, 250);
    
    let timedOut=setTimeout(()=>{
       clearInterval(clear);
        coin.classList.remove("head");
        coin.className= imageArray[Math.round(Math.random())];
        
        if(coin.className === "head"){
        playerScore.innerHTML = Number.parseFloat(playerScore.innerText)+0;
        if(selectedByComputer.innerHTML=== "head"){
            computerScore.innerHTML= Number.parseFloat(computerScore.innerText)+1;
        }
        else if(selectedByComputer.innerHTML ==="tail"){
            computerScore.innerHTML= Number.parseFloat(computerScore.innerText)+0;
        }
    }
    else if(coin.className=== "tail"){
        playerScore.innerHTML= Number.parseFloat(playerScore.innerText)+1;
        if(selectedByComputer.innerHTML=== "head"){
            computerScore.innerHTML = Number.parseFloat(computerScore.innerText)+0;
        }
        else if(selectedByComputer.innerHTML ==="tail"){
            computerScore.innerHTML= Number.parseFloat(computerScore.innerText)+1;
        }
    }
        if(playerScore.innerText=== "5"){
        resultPage.innerHTML = "Congrats! You Win!";
        heads.remove();
        tails.remove();
        restartButton.classList.remove("d-none");
        restartButton.addEventListener("click", ()=>{
            window.location.reload();
        });
      
    }
    else if(computerScore.innerHTML === "5"){
        resultPage.innerHTML = "Sorry, You Lose! Computer Wins!";
        resultPage.style.color="red";
        heads.remove();
        tails.remove();
        restartButton.classList.remove("d-none");
        restartButton.addEventListener("click", ()=>{
            window.location.reload();
        });
       
    }
    else if(computerScore.innerHTML === "5" && playerScore.innerText=== "5"){
    resultPage.innerHTML = "Wow, It is a tie!";
    resultPage.style.color="blue";
    heads.remove();
    tails.remove();
    restartButton.classList.remove("d-none");
    restartButton.addEventListener("click", ()=>{
            window.location.reload();
        });
       
    }
        
      
    
   }, tossTime[Math.round(Math.random())*4]);
  
    
});

