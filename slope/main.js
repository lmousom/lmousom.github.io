var x1, x2, y1, y2, cal, eq, error ;

function calculate() {
	x1 = document.getElementById("x1").value;
	x2 = document.getElementById("x2").value;
	y1 = document.getElementById("y1").value;
	y2 = document.getElementById("y2").value;
	error = "Please enter some values";
	c_in_y = y1-y2; 
	c_in_x = x1-x2;
	cal = c_in_y / c_in_x;
	eq = cal*x1 - y1;
	//cal = cal.toFixed(1);

	result = "Slope(m) = " + cal + " Equation of the line: y = " + cal + "x + " + eq;

	

	// if (cal == 0 ) {
	// 	document.getElementById("results").innerHTML = error;
	// } else if (y1 === 0){
	// 	document.getElementById("results").innerHTML = error;
	// } 
	//  else {

	//  }

		document.getElementById("results").innerHTML = result;
	
	// if (x1 < 0) {
	// 	document.getElementById("results").innerHTML = "Negative Values not Allowed";
	// }
}

// function clear() {
// 	 document.getElementById('data-table').value = '';
	
	

// }
