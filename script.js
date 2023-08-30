// Get password and confirmpassword into variables
let pass = document.getElementById("password");
let confirmPass = document.getElementById("confirm_password");
let errorMsg = document.getElementById("passmatch");
let btn = document.getElementById("submitbtn");

// Write function for checking if passwords are equal
function checkPassword() {
    // If not equal turn border color to red and display error
    if (pass.value !== confirmPass.value || pass.value === "" || confirmPass === "") {
        pass.classList.remove("valid");
        pass.classList.add("invalid");

        confirmPass.classList.remove("valid");
        confirmPass.classList.add("invalid");

        errorMsg.setAttribute("id", "error");

        btn.disabled = true;
    } else {
    // If equal remove red border and error
        pass.classList.remove("invalid");
        pass.classList.add("valid");

        confirmPass.classList.remove("invalid");
        confirmPass.classList.add("valid");
        
        errorMsg.setAttribute("id", "valid");

        btn.disabled = false;
    }
}



