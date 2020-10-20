const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const filterBtnElem = document.querySelector('.filterBtn')

const regNumbersEntered = [];

addRegNumberBtn.addEventListener("click", function() {
	const townElem = document.querySelector("input[name='town']:checked");

	const currentRegNumber = regNumberEntered.value.toUpperCase();
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
});

function name(number){
	const regNumberElem = document.createElement('li');
	regNumberElem.classList.add('regNumber');
	regNumberElem.innerHTML = number
	regNumbers.appendChild(regNumberElem);
}

function filter(currentRegNumber){
	regNumbers.innerHTML = ''
	const townElem = document.querySelector("input[name='town']:checked");
	const town = townElem.value
	alert(town)
	var array = [];
	for (var i=0; i<regNumbersEntered.length; i++){
		let currentValue = regNumbersEntered[i];
			if(currentValue.startsWith(town)){
				array.push(currentValue)
			}
		}
		for (var i=0; i<array.length; i++){
			name(array[i])
		}
		
	}

	filterBtnElem.addEventListener("click", filter);

