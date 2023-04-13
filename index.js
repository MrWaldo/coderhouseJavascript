function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = 0;
    if (operacion == "resina") {
        resultado = num1 * 4 + num2 * num3;
    } else if (operacion == "fdm") {
        resultado =  num1 * 2 + num2 * num3;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function cuotas(){
    let resultado = parseInt(document.getElementById("resultado").textContent);
    let textcuotas = document.getElementById("cuotas").value;
    let cuotas = parseInt(document.getElementById("cuotas").value);
    if(textcuotas ==""){
        alert("No ingreso la cantidad de cuotas")
    }
    let final = resultado
    let parcial = final
    i = 0;
    while (i < cuotas) {
        i = i+1;
        final = final * 1.1
      }
    if (cuotas > 0){
        parcial = final / cuotas
    }
    document.getElementById("final").innerHTML = final.toFixed(2);
    document.getElementById("parcial").innerHTML = parcial.toFixed(2);
}
