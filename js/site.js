//Get from values from the user
//Starts or controller function
function getValues() {
	//Get values from the page
	let startValue = document.getElementById("startValue").value;
	let endValue = document.getElementById("endValue").value;

	//We need to validate our input
	//Parse into integer
	startValue = parseInt(startValue);
	endValue = parseInt(endValue);

	if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
		//Call generateNumbers
		let numbers = generateNumbers(startValue, endValue);
		//We call displayNumbers
		displayNumbers(numbers);
	} else {
		alert("You must enter an integer");
	}
}

//Generate numbers from startValue to the endValue
//Logic function(s)
function generateNumbers(sValue, eValue) {
	let numbers = [];

	//We want to get all numbers from start to end
	for (let index = sValue; index <= eValue; index++) {
		//This will execute in a loop until index = eValue
		numbers.push(index);
	}
	return numbers;
}

//Display the numbers and mark even numbers bold.
//Displays or view functions
function displayNumbers(numbers) {
	let templateRows = "";

	for (let index = 0; index < numbers.length; index++) {
		let number = numbers[index];
		//My solution which works perfectly

		//if (number % 2 == 0) {
		//	templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
		//} else {
		//	templateRows += `<tr><td>${number}</td></tr>`;
      //}
      
      //Bobby Davis' solution which adds additional complexity but is good to know
      let className = "even";
      
      if (number % 2 == 0) {
         className = "even";
      } else {
         className = "odd";
      }
      templateRows += `<tr><td class="${className}">${number}</td></tr>`;
	}

	document.getElementById("results").innerHTML = templateRows;
}
