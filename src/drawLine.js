function isAdjacent(el1, el2) {
    var x1 = el1.getAttribute('cx');
    var y1 = el1.getAttribute('cy');
    var x2 = el2.getAttribute('cx');
    var y2 = el2.getAttribute('cy');
    var dist = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
    return dist < 75;
}

function drawLine(el1, el2) {
    var svg = one("points");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", el1.getAttribute('cx'));
    line.setAttribute("y1", el1.getAttribute('cy'));
    line.setAttribute("x2", el2.getAttribute('cx'));
    line.setAttribute("y2", el2.getAttribute('cy'));
    line.setAttribute("stroke", "white");
    svg.appendChild(line);
}


var svg = one("points");
let circles = many('circle')

function clearLines() {
    while (svg.childElementCount > 0) {
        for (circle of circles){
            circle.parentNode.removeChild(circle);
        }
    }
}