const gameBox = document.getElementById("gameBox");
const mathBox = document.getElementById("mathBox");
var rand1 = Math.floor(Math.Random() * 6);
var rand2 = Math.floor(Math.Random() * 6);
let op = ["+", "-", "*", "/"];
var randindex = Math.floor(Math.Random() * 3);

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
        <p></p>
    </div>`
    ;
    mathBox.appendChild(equationBox);


    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    // <p> 10 + 5 </p>
    numberBox.innerHTML = 
    `<div>
        <p></p>
    </div>`
    ;
    equationBox.appendChild(numberBox);
}

// function getEquation() {
//     var num1 = rand1;
//     var num2 = rand2;
//     var answer;

//     switch (op[randindex]) {
//         case(0):
//             answer = num1 + num2;
//         case(1):
//             answer = num1 - num2;
//         case(2):
//             answer = num1 * num2;
//         case(3):
//             answer = num1 / num2;
//     }

//     return answer
// } 

createGameBox();
createEquationBox();
