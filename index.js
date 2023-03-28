function calcular() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var operacion = document.getElementById("operacion").value;
    var resultado = 0;
    if (operacion == "resina") {
        resultado = num1 * 4 + num2 * num3;
    } else if (operacion == "fdm") {
        resultado =  num1 * 2 + num2 * num3;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function cuotas(){
    var resultado = parseInt(document.getElementById("resultado").textContent);
    var textcuotas = document.getElementById("cuotas").value;
    var cuotas = parseInt(document.getElementById("cuotas").value);
    if(textcuotas ==""){
        alert("No ingreso la cantidad de cuotas")
    }
    let final = resultado
    i = 0;
    while (i < cuotas) {
        i = i+1;
        final = final * 1.1
      }
    document.getElementById("final").innerHTML = final.toFixed(2);
}
