const gameBox = document.getElementById("gameBox");
const mathBox = document.getElementById("mathBox");
var rand1 = Math.floor(Math.Random() * 6);
var rand2 = Math.floor(Math.Random() * 6);
let op = ["+", "-", "*", "/"];
var randindex = Math.floor(Math.Random() * 4);

function createGameBox() {
    const testElement = document.createElement("div");
    testElement.classList.add("gameBox");
    testElement.innerHTML =
        `<div> 
            <p>Game goes here.</p> 
        </div>`
    ;
    gameBox.appendChild(testElement);
    const playArea = document.createElement("div");
    playArea.classList.add("eventBox");
    playArea.innerHTML = 
        `<div>
            <p>Game is played in this box</p>
        </div>`
        ;
    testElement.appendChild(playArea);
}

function createEquationBox() {
    const equationBox = document.createElement("div");
    equationBox.classList.add("mathBox");
    equationBox.innerHTML = 
    `<div>
        <p> </p>
    </div>`
    ;
    mathBox.appendChild(equationBox);


    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    // <p> 10 + 5 </p>
    numberBox.innerHTML = 
    `<div>
    <p>${rand1} ${op[0]} ${rand2}</p>
    </div>`
    ;
    equationBox.appendChild(numberBox);
}

createGameBox();
createEquationBox();
