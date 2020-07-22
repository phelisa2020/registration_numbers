const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");

const regNumbersEntered = [];

addRegNumberBtn.addEventListener("click", function() {
//if nothing entered shows blank
		const theReg = document.createElement("li");

if (regNumberEntered.value) {
	message.innerHTML = regNumberEntered.value; 
} else  {
	message.innerHTML = "";
}


regNumber.appendChild(theReg);


	});