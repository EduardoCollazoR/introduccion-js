//switch
const metodoPago = "tarjeta";
switch (metodoPago) {
  case "tarjeta":
    console.log("pagaste con tarjeta");
    break;
  case "cheque":
    console.log("pagaste cn cheque");
    break;
  default:
    console.log("aun no pagas");
    break;
}
