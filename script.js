function coin(number){
  
    return number.toFixed(2).replace(".",",")  
}
function clicate(){
    distance=inputDistance.value
    time=inputTime.value
    value=2+(distance*1.40)+(time*0.26)
    buttonCalculate.innerHTML=`Sua corrida deu o total de R$`+coin(value)
    /*toFixed(2).replace(".",",")*/
}
function resetPag(){
    window.location.href="index.html";
}