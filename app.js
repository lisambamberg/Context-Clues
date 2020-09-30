document.addEventListener("DOMContentLoaded", function () {
    var squareContainer = document.createElement("div");
    squareContainer.className = "container";
    document.body.appendChild(squareContainer);

    var div = document.createElement("div");
    div.className = "newDiv";
    squareContainer.appendChild(div);

    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement("h3");
        div.appendChild(h3);
        var text = document.createTextNode(`Accusation ${[i]}`);
        h3.appendChild(text);
    }
});