var pago = 2500000;
var cuenta = 0;
var almojabanaConGaseosa = 15000;
var subwayConGaseosa = 23000;

if (almojabanaConGaseosa == true){
    cuenta = pago - almojabanaConGaseosa;
    console.log("la cuenta que tienes es: "+cuenta);
}else if (subwayConGaseosa == true){
    cuenta = pago - subwayConGaseosa;
    console.log("la cuenta que tienes es: "+cuenta);
}else {
    cuenta = pago;
    console.log("la cuenta que tienes es: "+cuenta);
}
