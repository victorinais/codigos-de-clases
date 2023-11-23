/* ejercicio 1 */
var num = 5;
var newNum = Number(7);
console.log(newNum);

/* ejercicio 2 */
/*var num = 5849916;
if (num <= Number.MAX_VALUE){
    console.log("el numero no es infinito")
}else {
    console.log("el numero es infinito")
} */
console.log(Number.MAX_VALUE)

/* ejercicio 3 */
/* var num1 = 5849916;
var num2 = 2;
if (num1 / num2 >= Number.MIN_VALUE){
    console.log("el numero es mayor")
}else {
    console.log("el numero es negativo")
} */
console.log(Number.MIN_VALUE)

/* ejercicio 4 */
console.log(Number.MAX_SAFE_INTEGER);

/* ejercicio 5 */
console.log(Number.MIN_SAFE_INTEGER);

/* ejercicio 6 */
var num = 7;
console.log(Number.isFinite(num));

/* ejercicio 7 */
var num = 17;
console.log(Number.isInteger(num));

/* ejercicio 8 */
var num = 17;
console.log(Number.isSafeInteger(num));

/* ejercicio 9 */
var num = 10;
console.log(num.toExponential(num));

/* ejercicio 10 */
var num = 17;
console.log(num.toFixed(2));

/* ejercicio 11 */
var num = 91;
console.log(num.toPrecision(3));

/* ejercicio 12 */
var text = "70";
console.log(Number.parseInt(text));

/* ejercicio 13 */
var text = "70";
console.log(Number.parseInt(text,10));

/* ejercicio 14 */
var text = "20.5"
console.log(Number.parseFloat(text));

/* ejercicio 15 */
var text = "20.5"
console.log(Number.parseFloat(text,10));

/* ejercicio 16 */
var text = 15;
console.log(text.toString());

/* ejercicio 17 */
var num = -3;
console.log(Math.abs(num));

/* ejercicio 18 */
var num = 7;
console.log(Math.sign(num));

/* ejercicio 19 */
var num = 7;
console.log(Math.exp(num));

/* ejercicio 20 */
var num = 7;
console.log(Math.expm1(num));

/* ejercicio 21 */
console.log(Math.max(2,5,7));

/* ejercicio 22 */
console.log(Math.min(1,5,7));

/* ejercicio 23 */
console.log(Math.pow(2,3));

/* ejercicio 24 */
console.log(Math.sqrt(2));

/* ejercicio 25 */
console.log(Math.cbrt(2));

/* ejercicio 26 */
console.log(Math.imul(2,3));

/* ejercicio 27*/
console.log(Math.clz32(5));

/* ejercicio 28 */
console.log(Math.random());

/* ejercicio 29 */
console.log(Math.round(43.684529));

/* ejercicio 30 */
console.log(Math.ceil(45.389));

/* ejercicio 31 */
console.log(Math.floor(77.81253));

/* ejercicio 32 */
console.log(Math.fround(7.5623198));

/* ejercicio 33 */
console.log(Math.trunc(45.879225));

/* ejercicio 34 */
console.log(Math.sin(5));

/* ejercicio 35 */
console.log(Math.cos(70));

/* ejercicio 36 */
console.log(Math.tan(52));

/* ejercicio 37 */
console.log(Math.hypot(2,2,3));

/* ejercicio 38 */
var num1 = 3.5;
var num2 = 33;
var mult = num1 * num2;
console.log(mult.toFixed(2), Number.parseInt(mult));

/* ejercicio 39 */
var num1 = "50";
var num2 = "4";
var div = num1 / num2;

console.log(Number.parseFloat(div), div.toPrecision(2));

/* ejercicio 40 */
var numa = Math.random();
var numb = -45;
var resta = numa - numb;

console.log(numa, Math.abs(resta));

/* ejercicio 41 */
var numa = Math.random();
var numb = 9;
var suma = numa + numb;

console.log(suma.toString(suma));

/* ejercicio 42 */
var num = Math.random();
var resultado = Math.exp(num);
console.log(resultado);

/* ejercicio 43 */
var num = 10;
var raizCuadrada = Math.sqrt(num);
var clz32 = Math.clz32(num);
console.log(raizCuadrada, clz32);

/* ejercicio 44 */
var x = 10;
var y = x;
console.log(y);

/* ejercicio 45 */
var a = 5;
var b = 10;
a += b;
console.log(a);

/* ejercicio 46 */
var a = 3;
var b = 7;
a += b;
console.log(a);

/* ejercicio 47 */
var a = 7;
var b = 2;
a -= b;
console.log(a);

/* ejercicio 48 */
var a = 7;
var b = 5;
a *= b;
console.log(a);

/* ejercicio 49 */
var a = 10;
var b = 5;
a /= b;
console.log(a);

/* ejercicio 50 */
var a = 10;
var b = 3;
a %= b;
console.log(a);

/* ejercicio 51 */
var a = 10;
var b = 3;
a **= b;
console.log(a);

/* ejercicio 52 */
var num = 6;
num++;
console.log(num);

/* ejercicio 53 */
var num = 6;
num--;
console.log(num);

/* ejercicio 54 */
var num = 6;
var resultado = ++num;
console.log(resultado);

/* ejercicio 55 */
var num = 6;
var resultado = --num;
console.log(resultado);

/* ejercicio 56 */
var num = 5;
var result = -num;
console.log(result);

console.log(suma.toString(suma));
