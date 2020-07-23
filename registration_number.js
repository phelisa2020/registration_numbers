const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const filterBtnElem = document.querySelector('.filterBtn')

const regNumbersEntered = [];


addRegNumberBtn.addEventListener("click", function() {
	const townElem = document.querySelector("input[name='town']:checked");

	
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
alert(currentRegNumber)
	// regNumberEntered.value;....it was this before

 

 } else {
	message.innerHTML = 'The registration number already exist.';
}
} else {
	message.innerHTML = 'Invalid registration number';

}

window.addEventListener('load', function(){
	regNumberElem.innerHTML = currentRegNumber
})

	
});
function filter(){
		const townElem = document.querySelector("input[name='town']:checked");
		const currentRegNumber = townElem.value
		alert(regNumberEntered.length)
		var array = [];
		for (var i=0; i<regNumberEntered.length; i++){
			let arrays = regNumberEntered[i];
			if(arrays.startsWith(currentRegNumber)){
				array.push(arrays)
			}
		}
		alert(array)

	}

filterBtnElem.addEventListener("click", filter);
// addRegNumberBtn.addEventListener("click", filter)


