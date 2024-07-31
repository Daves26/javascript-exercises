const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    if (e.target.style.background == "blue") {
        e.target.style.background = "white";
    } else {
        e.target.style.background = "blue";
    }
});
