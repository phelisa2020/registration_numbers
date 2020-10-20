function registration(){
	function regNumbers(currentRegNumber){
if(currentRegNumber.startsWith('CY') ||
	currentRegNumber.startsWith('CA') ||
	currentRegNumber.startsWith('CJ')) {

	if(!regNumbersEntered.includes(currentRegNumber)){
	name(currentRegNumber)
	regNumbersEntered.push(currentRegNumber)
	
} else {
	message.innerHTML = 'The registration number already exist.';
}
} else {
	message.innerHTML = 'Invalid registration number';
}
}
	return {
		regNumbers
	}
}

