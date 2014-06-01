// My JavaScript Library


// all variables and function have global scope
// that's why you put it in another function with no name and ()
(function() {

	// format a number
	function Format(num) {
		return Math.floor(num);
	}

	// output message
	// when it runs it finds a local function which is above sto je Format
	ShowMessage("You are viewing a lesson in section " + Format(9.1));

}());