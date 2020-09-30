document.addEventListener("DOMContentLoaded", function () {
    var squareContainer = document.createElement("div");
    squareContainer.className = "container";
    document.body.appendChild(squareContainer);

    var div = document.createElement("div");
    div.className = "newDiv";
    squareContainer.appendChild(div);

    function makeFunc() {
        var friendArray = ["Professor Plum", "Colonel Mustard", "Mrs. White", "Mrs. Peacock", "Mr. Green"];
        var locationArray = ["lounge", "ballroom", "study", "kitchen", "hall", "dining room", "conversatory", "library", "billard room", "cellar"];
        var weaponArray = ["candlestick", "knife", "lead pipe", "revolver", "rope", "wrench", "lamp", "letter-opener", "cigarette holder", "pool cue", "wine bottle", "antique microscope", "Ming vase", "an original Renoir painting", "rotary phone", "miniture obelisk", "monocle chain", "afghan woven rug", "sherry decanter", "opera glasses"];

        function displayH3() {
            for (var i = 1; i < 101; i++) {
                var h3 = document.createElement("h3");
                div.appendChild(h3);
                var text = document.createTextNode(`Accusation ${[i]}`);
                h3.appendChild(text);
                var alertText = alertText()
                h3.addEventListener("click", function () {
                    alertText;
                })
            }
        }
        function alertText() {
            return function () {
                alert(`I accuse ${friendArray} with the ${weaponArray} in the ${locationArray}!`)
            }
        }
    }
});