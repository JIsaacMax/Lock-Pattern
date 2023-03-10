var startPoint = null,
    endPoint = null;

document.addEventListener("mousemove", (e)=>{
    document.getElementById("coord").innerHTML = `<p> DEBUG </p> x: ${e.target.offsetLeft} | y: ${e.target.offsetTop} <BR> cx: ${e.target.offsetLeft + (e.target.offsetWidth/2)} | cy: ${e.target.offsetTop + (e.target.offsetHeight/2)} <BR>Ponto Inicial: ${startPoint ? startPoint.id : ""} <BR>Ponto Final: ${endPoint ? endPoint.id : ""} <br>`;
})