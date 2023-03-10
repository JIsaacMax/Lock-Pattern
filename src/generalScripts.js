//Funções declaradas pela facilidade de uso durante o código.
function l(v){
    return console.log(v)
}

function one(c){
    return document.querySelector("." + c)
}

function many(c){
    return document.querySelectorAll("." + c)
}

function id(id){
    return document.getElementById(id)
}

//Mapeamento de pontos
var p1 = document.getElementById("point-1")
var p2 = document.getElementById("point-2")
var p3 = document.getElementById("point-3")
var p4 = document.getElementById("point-4")
var p5 = document.getElementById("point-5")
var p6 = document.getElementById("point-6")
var p7 = document.getElementById("point-7")
var p8 = document.getElementById("point-8")
var p9 = document.getElementById("point-9")


var lastSelected = null;

//Definições de área, guarnição, cores e senha
var contentArea = document.getElementById("contentArea"),
    overFlowGuarantee = document.querySelector("body"),
    defaultC = "grey",
    glowC = "white",
    currentPW;
    passwordCode = [];



    
//** Optional event **/
//contentArea.addEventListener("mouseup", disablePattern)
  
//Gatilhos
contentArea.addEventListener("mousedown", enablePattern)
overFlowGuarantee.addEventListener("mouseup", disablePattern)

var glowPattern = function(){
    if(this.getAttribute("stroke") != glowC){
        if (lastSelected !== null) {
            if (isAdjacent(this, lastSelected)) {
                drawLine(this, lastSelected);
            }
        }
        passwordCode.push(parseInt(this.getAttribute("value")));
        l(passwordCode);
    }
    this.setAttribute("stroke", glowC);
    lastSelected = this;
}

//Habilita o padrão
function enablePattern(){
    p1.addEventListener("mouseenter", glowPattern)
    p2.addEventListener("mouseenter", glowPattern)
    p3.addEventListener("mouseenter", glowPattern)
    p4.addEventListener("mouseenter", glowPattern)
    p5.addEventListener("mouseenter", glowPattern)
    p6.addEventListener("mouseenter", glowPattern)
    p7.addEventListener("mouseenter", glowPattern)
    p8.addEventListener("mouseenter", glowPattern)
    p9.addEventListener("mouseenter", glowPattern)
}

//Desabilita o padrão
function disablePattern(){
    l(passwordCode)
    if(currentPW == null && passwordCode.length > 1){
            if(confirm("Deseja salvar esse padrão?")){
                currentPW = passwordCode.join('-');
            }
        }else{
            if(passwordCode.length > 1){
                if(currentPW == passwordCode.join("-") && passwordCode != []){
                    alert("Senha correta!")
                }else{
                    alert("SENHA INCORRRETA!!!")
                }
            }
    }
    p1.removeEventListener("mouseenter", glowPattern);
    p2.removeEventListener("mouseenter", glowPattern);
    p3.removeEventListener("mouseenter", glowPattern);
    p4.removeEventListener("mouseenter", glowPattern);
    p5.removeEventListener("mouseenter", glowPattern);
    p6.removeEventListener("mouseenter", glowPattern);
    p7.removeEventListener("mouseenter", glowPattern);
    p8.removeEventListener("mouseenter", glowPattern);
    p9.removeEventListener("mouseenter", glowPattern);
    l(currentPW);
    passwordCode = [];
    clearPattern(defaultC);
    clearLines();
}

//Devolve as cores anteriores por referencia
function clearPattern(dColor){

    p1.setAttribute("stroke", dColor);
    p2.setAttribute("stroke", dColor);
    p3.setAttribute("stroke", dColor);
    p4.setAttribute("stroke", dColor);
    p5.setAttribute("stroke", dColor);
    p6.setAttribute("stroke", dColor);
    p7.setAttribute("stroke", dColor);
    p8.setAttribute("stroke", dColor);
    p9.setAttribute("stroke", dColor);
}