// let xTurn= document.querySelector("#whoseTurn").createElement("h4");
//     xTurn.textContent= "X Turn";
// let oTurn= document.querySelector("#whoseTurn").createElement("h5");
//     oTurn.textContent= "O Turn";

let jsBoxes = [];
let Xs = [];
let Os = [];
let winner = document.getElementById("winner");
let winnerElement = document.createElement("p");

const markXs = (event) => {
    Xs.push(event);
    console.log(Xs);
};

const markOs = (event) => {
    Os.push(event);
    console.log(Os);
}

const markWinner = () => {
    if (clicks % 2 !== 0) {
        winnerElement.innerText = "X Wins!!!";
        winner.appendChild(winnerElement);
        gameBoard.removeEventListener('click', turns);
    } else if (clicks % 2 === 0) {
        winnerElement.innerText = "O Wins!!!";
        winner.appendChild(winnerElement);
        gameBoard.removeEventListener('click', turns);
    }
};

const checkForWin = (arr) => {
    if (arr.includes("cell0") && arr.includes("cell3") && arr.includes("cell6")) {
        markWinner();
    } else if (arr.includes("cell1") && arr.includes("cell4") && arr.includes("cell7")) {
        markWinner();
    } else if (arr.includes("cell2") && arr.includes("cell5") && arr.includes("cell8")) {
        markWinner();
    } else if (arr.includes("cell0") && arr.includes("cell1") && arr.includes("cell2")) {
        markWinner();
    } else if (arr.includes("cell3") && arr.includes("cell4") && arr.includes("cell5")) {
        markWinner();
    } else if (arr.includes("cell6") && arr.includes("cell7") && arr.includes("cell8")) {
        markWinner();
    } else if (arr.includes("cell0") && arr.includes("cell4") && arr.includes("cell8")) {
        markWinner();
    } else if (arr.includes("cell2") && arr.includes("cell4") && arr.includes("cell6")) {
        markWinner();
    } else {
        return false;
    };
}



const whoseTurn = document.querySelector("#whoseTurn");

let clicks = 0;

// const wins = [
//     ["cell0", "cell3", "cell6"],
//     ["cell1", "cell4", "cell7"],
//     ["cell2", "cell5", "cell8"],
//     ["cell0", "cell1", "cell2"],
//     ["cell3", "cell4", "cell5"],
//     ["cell6", "cell7", "cell8"],
//     ["cell0", "cell4", "cell8"],
//     ["cell2", "cell4", "cell6"]
// ];





// let Xs = jsBoxes.includes(".playerX");

// const checkForWin = () => {

// }

whoseTurn.textContent = "X Turn";

const turns = (event) => {
    clicks ++;
    console.log(clicks);
    if (clicks % 2 !== 0) { 
        whoseTurn.textContent = "O Turn";
        event.target.textContent = "X";
        event.target.classList = "playerX";
        markXs(event.target.id);
        event.target.removeEventListener("click", turns);
        checkForWin(Xs);
        checkForWin(Os);
    } else if (clicks === 1 || clicks % 2 === 0) {
        whoseTurn.textContent = "X Turn";
        event.target.textContent = "O";
        event.target.classList = "playerO";
        markOs(event.target.id);
        event.target.removeEventListener("click", turns);
        checkForWin(Xs);
        checkForWin(Os);
    } else if (clicks === 9 && checkForWin(Xs) === false && checkForWin(Os) === false) {
        
    }
}

// let winner = false;

// const reset = () => {
//     if (winner === true || )
// }

const gameBoard = document.querySelector(".gameBoard");


// for loop iterates 9 times
for (let i = 0; i < 9; i++) {
    // create js divs
    let box = document.createElement("div");
    // add an id of the index
    box.id = "cell" + i;
    // listen for the click and link it to turn count
    box.addEventListener("click", turns)
    // add new divs to the gameboard
    gameBoard.appendChild(box);
    jsBoxes.push(box);
}

// const resetButt = document.querySelector("#reset");
// const clear = () => {
//     jsBoxes.children.textContent = " ";
//     let count = 0;
// };
// const resetGame = () => {
//     resetButt.addEventListener("click", clear)
// };

    

// const getXs= document.querySelector(".topRow");
//     for (let i = 0; i < getXs.children.length; i++) {
//         console.log(getXs.children[i].tagName);
// }


// let win1= document.querySelector(".topRow");
// console.log(win1.length);


// let win2= document.querySelector(".midRow");
// let win3= document.querySelector(".botRow");
// let win4= document.querySelector(".leftCol");
// let win5= document.querySelector(".midCol");
// let win6= document.querySelector(".rightCol");
// let win7= document.querySelectorAll("#leftT #midM #rightB");
// let win8= document.querySelectorAll(".leftCol");

// let checkWin= function() {
    //     if () 
    // }
    
    
    


