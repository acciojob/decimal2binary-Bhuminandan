function decimalToBinary(num) {

	let binarySum = 0;
	
	while (num != 0) {
		let dig = num % 2
		binarySum = binarySum + dig;
		num = num / 2;
	}

	return binarySum;
  
}

window.decimalToBinary = decimalToBinary;
