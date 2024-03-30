const buttons = document.querySelectorAll("#btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (btn.textContent === "x") {
            console.log("o");
            btn.textContent = "o";
        } else {
            console.log("x");
            btn.textContent = "x";
        }
    });
});