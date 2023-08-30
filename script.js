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

        if (modeSwitch.getAttribute("src") === "dark.svg") {
            errorMsg.setAttribute("style", "");
            errorMsg.setAttribute("id", "error");
        } else {
            errorMsg.style.color = "red";
        }
        

        btn.disabled = true;
    } else {
    // If equal remove red border and error
        pass.classList.remove("invalid");
        pass.classList.add("valid");

        confirmPass.classList.remove("invalid");
        confirmPass.classList.add("valid");
        
        if (modeSwitch.getAttribute("src") === "dark.svg") {
            errorMsg.setAttribute("style", "");
            errorMsg.setAttribute("id", "valid");
        } else {
            errorMsg.style.color = "#181a1b";
        }

        btn.disabled = false;
    }
}

// Get darkmode into variable
let modeSwitch = document.getElementById("modeswitch");
let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let loginLink = document.getElementById("loginlink");

let formInput1 = document.getElementsByClassName("input")[0];
let formInput2 = document.getElementsByClassName("input")[1];
let formInput3 = document.getElementsByClassName("input")[2];
let formInput4 = document.getElementsByClassName("input")[3];
let formInput5 = document.getElementsByClassName("input")[4];
let formInput6 = document.getElementsByClassName("input")[5];

function changeMode() {
    if (modeSwitch.getAttribute("src") === "dark.svg") {
        switchDark();
    } else if (modeSwitch.getAttribute("src") === "light.svg") {
        switchLight();
    }
}

function switchDark() {
    modeSwitch.setAttribute("src", "light.svg");

    document.body.style.color = "#d8d4cf";
    btn.style.backgroundColor = "#574842";
    btn.style.boxShadow  = "2px 2px 3px #313537";
    btn.style.color = "#d8d4cf";
    loginLink.style.color = "#574842";
    header.style.backgroundColor = "#1e2021";
    footer.style.backgroundColor = "#1e2021";
    main.style.backgroundColor = "#181a1b";
    main.style.boxShadow = "0 5px 5px #313537, 0 -1px 2px #313537";
    errorMsg.style.color = "red";
    
    switchInputsDark();
}

function switchInputsDark() {
    formInput1.style.color = "#d8d4cf";
    formInput2.style.color = "#d8d4cf";
    formInput3.style.color = "#d8d4cf";
    formInput4.style.color = "#d8d4cf";
    formInput5.style.color = "#d8d4cf";
    formInput6.style.color = "#d8d4cf";

    formInput1.style.backgroundColor = "#1e2021";
    formInput2.style.backgroundColor = "#1e2021";
    formInput3.style.backgroundColor = "#1e2021";
    formInput4.style.backgroundColor = "#1e2021";
    formInput5.style.backgroundColor = "#1e2021";
    formInput6.style.backgroundColor = "#1e2021";

    formInput1.style.boxShadow = "2px 2px 2px #1e2021";
    formInput2.style.boxShadow = "2px 2px 2px #1e2021";
    formInput3.style.boxShadow = "2px 2px 2px #1e2021";
    formInput4.style.boxShadow = "2px 2px 2px #1e2021";
    formInput5.style.boxShadow = "2px 2px 2px #1e2021";
    formInput6.style.boxShadow = "2px 2px 2px #1e2021";
}

function switchLight() {
    modeSwitch.setAttribute("src", "dark.svg");
    document.body.setAttribute("style", "");
    btn.setAttribute("style", "");
    loginLink.setAttribute("style", "");
    header.setAttribute("style", "");
    footer.setAttribute("style", "");
    main.setAttribute("style", "");
    errorMsg.setAttribute("style", "");

    formInput1.setAttribute("style", "");
    formInput2.setAttribute("style", "");
    formInput3.setAttribute("style", "");
    formInput4.setAttribute("style", "");
    formInput5.setAttribute("style", "");
    formInput6.setAttribute("style", "");
}
