const gameBox    =  document.getElementById("gameBox");
const mathBox    =  document.getElementById("mathBox");
const userAnswer =  document.getElementById("answer");
const question   =  document.getElementById("question");


// EQUATION GENERATION FUNCTIONS

function genAddition(difficulty)
{
    // Generates a randomized addition equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
}
function genSubtraction(difficulty)
{
    // Generates a randomized subtraction equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
}
function genMultiplication(difficulty)
{
    // Generates a randomized multiplication equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
}
function genDivision(difficulty)
{
    // Generates a randomized division equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
}


// UPDATE HTML FUNCTIONS

function createGameBox() 
{
    const testElement = document.createElement("div");
    testElement.classList.add("gameBox");
    testElement.innerHTML =
        `<div> 
            <p>Game goes here!!</p> 
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
function createEquationBox() 
{
    const equationBox = document.createElement("div");
    equationBox.classList.add("mathBox");
    equationBox.innerHTML = 
        `<div>
            <p>Math goes here</p>
        </div>`
    ;
    mathBox.appendChild(equationBox);
    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    numberBox.innerHTML = 
    `<div> 
    <h1>Math Game</h1>
    <h4>For Smart People</h2>
    </div>`    
    
    // `<div>
    //         <p>10 + 15 = ?</p>
    //     </div>`
    ;
    equationBox.appendChild(numberBox);
}
function checkAnswer(num1, num2, userAnswer) 
{
    // Checks the user's input and compares it to the question to 
    // see if the user's answer matches the equations correct answer.

    if (num1 + num2 === userAnswer) {

        // Output to html page Correct

        // console.log("Correct!");
    } else {

        // Output to html page Incorrect

        // console.log("Incorrect");
    }
}
function updateWebEquation(num1, num2, answer)
{
    // Updates the HTML to show a new equation provided
    // from the passed parameters.

    // Code goes here...
}





createGameBox();
createEquationBox();