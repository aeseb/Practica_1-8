
/*
    Se nombra e inicializa una variable.
    Se pide el ingreso de un numero via prompt.
    Se usa la estructura comparativa if-else.
*/

var numeroIngresado = prompt("Ingrese un numero: ");

if(numeroIngresado == 5){
    document.write(`
        <h1 style="color: white">El numero que ingreso es igual a 5.</h1>
    `);

}else{
    document.write(`
        <h1 style="color: red">El numero que ingresate NO es igual a 5.</h1>
    `);
}

