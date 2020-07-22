const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");

const regNumbersEntered = [];

addRegNumberBtn.addEventListener("click", function() {
//if nothing entered shows blank
		const currentRegNumber = regNumberEntered.value.toUpperCase();
if(currentRegNumber.startsWith('CY') ||
	currentRegNumber.startsWith('CA') ||
	currentRegNumber.startsWith('CJ')) {

message.innerHTML = '';

if(!regNumbersEntered.includes(currentRegNumber)){
	// regNumberEntered.value;....it was this before

	const regNumberElem = document.createElement('li');
	regNumberElem.classList.add('regNumber');
	regNumberElem.innerHTML = currentRegNumber
	// regNumberEntered.value;....it was this before
	regNumbers.appendChild(regNumberElem);

	regNumbersEntered.push(currentRegNumber)

	// regNumberEntered.value;....it was this before
} 
} else {
	message.innerHTML = '';

}
	//regNumber.innerHTLM = regNumberEntered.value

});


