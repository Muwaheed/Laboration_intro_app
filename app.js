let clickCount = 0;

function buttonClick() {
    clickCount++;

    if (clickCount === 1) {
        alert("Snälla tryck knappen en gång till!");
    } else if (clickCount === 2) {
        alert("OOOPS!!! Har funktionen crashat? Prova en gång till!");
    } else if (clickCount === 3) {
        alert("Nej Jag skojar bara! Detta är js lopp");
        
    }

}