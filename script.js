function decimalToBinary(decimal) {

    let binary = "";
    while (decimal > 0) {
        // if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
        if (decimal % 2 == 1) {
           binary = "1" + binary;
        } else {
           binary = "0" + binary;
        }
        // divide number by 2.
        decimal = Math.floor(decimal / 2);
     }
     return binary;
  
}

window.decimalToBinary = decimalToBinary;
