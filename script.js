const buttons = document.querySelectorAll("#btn");
let player = 1;
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (player === 1 && btn.textContent===" ") {
            btn.textContent = "x";
            player++;
        } else if (player === 2 && btn.textContent===" "){
            btn.textContent = "o";
            player = 1;
        }
    });
});
