function operacion(){
    let num1 ,num2, sum, rest, mult, div    
    num1 = parseInt (document.getElementById('num1').value)
        
    num2 = parseInt(document.getElementById('num2').value)

    sum = num1 + num2
    rest = num1 - num2
    mult = num1 * num2
    div = num1 / num2

if (num2 !==0){
    alert("La suma es: " + sum +
    "\n La resta es: " + res +
    "\n La multiplicacion es: " + mult +
    "\n La divisiòn es: " + div
    )
} else {
    alert("No es posible dividir un numero entre cero")
}
}