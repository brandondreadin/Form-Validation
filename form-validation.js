function validateForm(){
	var valid = true;

	//all inputs that need values must have class "validate"
	var formArr = document.getElementsByClassName("validate");

	for (var i = 0; i < formArr.length; i++){
		if (formArr[i].value == ""){
			formInvalid(formArr[i]);
			valid = false;
		}
		else {
			formValidated(formArr[i]);
		}
	}

	if (!valid){
		alert("Please fill in all required fields!");
	}

	return valid;
}

function formValidated(form){
	form.style.border = "1px solid green";
}

function formInvalid(form){
	form.style.border = "1px solid red";

}