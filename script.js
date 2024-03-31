const buttons = document.querySelectorAll("button");
let player = 1;
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (player === 1 && btn.textContent===" ") {
            btn.textContent = "x";
            player++;
        } else if (player === 2 && btn.textContent===" "){
            btn.textContent = "o";
            player = 1;
        }
        checkWin();
    });
});
function checkWin() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (
            buttons[a].textContent !== " " &&
            buttons[a].textContent === buttons[b].textContent &&
            buttons[a].textContent === buttons[c].textContent
        ) {
            alert(`Player ${buttons[a].textContent} wins!`);
            resetBoard();
            return;
        }
    }
}

function resetBoard() {
    buttons.forEach(btn => {
        btn.textContent = " ";
    });
    player = 1;
}
