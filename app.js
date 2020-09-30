var friendArray = ["Professor Plum", "Colonel Mustard", "Mrs. White", "Mrs. Peacock", "Mr. Green"];
var locationArray = ["lounge", "ballroom", "study", "kitchen", "hall", "dining room", "conversatory", "library", "billard room", "cellar"];
var weaponArray = ["candlestick", "knife", "lead pipe", "revolver", "rope", "wrench", "lamp", "letter-opener", "cigarette holder", "pool cue", "wine bottle", "antique microscope", "Ming vase", "an original Renoir painting", "rotary phone", "miniture obelisk", "monocle chain", "afghan woven rug", "sherry decanter", "opera glasses"];

for (var i = 1; i < 101; i++) {
    var h3 = document.createElement("h3");
    h3.innerText = `Accusation ${i}`;
    h3.addEventListener("click", alertText(i));
    document.body.appendChild(h3);
}

function alertText(i) {
    return function () {
        alert(` Accusation ${i}: I accuse ${friendArray[i % friendArray.length]} with the ${weaponArray[i % weaponArray.length]} in the ${locationArray[i % locationArray.length]}!`)
    }
}

