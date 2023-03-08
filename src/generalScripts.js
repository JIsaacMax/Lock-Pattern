var p1 = document.getElementById("point-1")
var p2 = document.getElementById("point-2")
var p3 = document.getElementById("point-3")
var p4 = document.getElementById("point-4")
var p5 = document.getElementById("point-5")
var p6 = document.getElementById("point-6")
var p7 = document.getElementById("point-7")
var p8 = document.getElementById("point-8")
var p9 = document.getElementById("point-9")

var contentArea = document.getElementById("contentArea"),
    overFlowGuarantee = document.querySelector("body")

    contentArea.addEventListener("mousedown", function(e){
    p1.addEventListener("mouseenter", glowPattern)
    p2.addEventListener("mouseenter", glowPattern)
    p3.addEventListener("mouseenter", glowPattern)
    p4.addEventListener("mouseenter", glowPattern)
    p5.addEventListener("mouseenter", glowPattern)
    p6.addEventListener("mouseenter", glowPattern)
    p7.addEventListener("mouseenter", glowPattern)
    p8.addEventListener("mouseenter", glowPattern)
    p9.addEventListener("mouseenter", glowPattern)
})


// contentArea.addEventListener("mouseup", function(){
//     clearPattern("grey");
//     p1.removeEventListener("mouseenter");
//     p2.removeEventListener("mouseenter");
//     p3.removeEventListener("mouseenter");
//     p4.removeEventListener("mouseenter");
//     p5.removeEventListener("mouseenter");
//     p6.removeEventListener("mouseenter");
//     p7.removeEventListener("mouseenter");
//     p8.removeEventListener("mouseenter");
//     p9.removeEventListener("mouseenter");
// })

overFlowGuarantee.addEventListener("mouseup", function(){
    clearPattern("grey");
    p1.removeEventListener("mouseenter",turnOffPattern);
    p2.removeEventListener("mouseenter",turnOffPattern);
    p3.removeEventListener("mouseenter",turnOffPattern);
    p4.removeEventListener("mouseenter",turnOffPattern);
    p5.removeEventListener("mouseenter",turnOffPattern);
    p6.removeEventListener("mouseenter",turnOffPattern);
    p7.removeEventListener("mouseenter",turnOffPattern);
    p8.removeEventListener("mouseenter",turnOffPattern);
    p9.removeEventListener("mouseenter",turnOffPattern);
})

var glowPattern = function(){
    this.setAttribute("stroke", "white");
}

var turnOffPattern = function(){
    this.setAttribute("stroke", "grey")
}

//Devolve as cores anteriores por referencia
function clearPattern(dColor){

    p1.setAttribute("stroke", dColor)
    p2.setAttribute("stroke", dColor)
    p3.setAttribute("stroke", dColor)
    p4.setAttribute("stroke", dColor)
    p5.setAttribute("stroke", dColor)
    p6.setAttribute("stroke", dColor)
    p7.setAttribute("stroke", dColor)
    p8.setAttribute("stroke", dColor)
    p9.setAttribute("stroke", dColor)
}