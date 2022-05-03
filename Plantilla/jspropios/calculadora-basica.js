function Suma()
{
    let N1 = document.getElementById("numero_1").value;
    let N2 = document.getElementById("numero_2").value;
    let Suma = parseInt(N1) + parseInt(N2);
    alert("El valor de la suma es: "+Suma);
}

function Resta()
{
    let N1 = document.getElementById("numero_1").value;
    let N2 = document.getElementById("numero_2").value;
    let Resta = N1 - N2;
    alert("El valor de la resta es: "+Resta);
}

function Multiplicacion()
{
    let N1 = document.getElementById("numero_1").value;
    let N2 = document.getElementById("numero_2").value;
    let Multiplicacion = N1 * N2;
    alert("El valor de la multiplicación es: "+Multiplicacion);
}

function Division()
{
    let N1 = document.getElementById("numero_1").value;
    let N2 = document.getElementById("numero_2").value;
    let Division = N1 / N2;
    alert("El valor de la division es: "+Division);
}
