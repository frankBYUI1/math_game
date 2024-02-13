const gameBox = document.getElementById("game-box");
const mathBox = document.getElementById("math-box");

function createGameBox() {
    const testElement = document.createElement("div");
    testElement.classList.add("test");
    testElement.innerHTML =
        `<div> 
            <p>This is test.</p> 
        </div>`
    ;
    gameBox.appendChild(testElement);
}

function createEquationBox() {
    const equationBox = document.createElement("div");
    equationBox.classList.add("equationBox");
    equationBox.innerHTML = 
        `<div>
            <p>Math goes here</p>
        </div>`
    ;
    mathBox.appendChild(equationBox);
}

createGameBox();
createEquationBox();
