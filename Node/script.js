 // Dark Mode Toggle
function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("toggleBtn");

    if(document.body.classList.contains("dark-mode")){
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
}


// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event){

    let phone = document.getElementById("phone").value;
    let error = document.getElementById("error");

    let phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){

        event.preventDefault();

        error.innerHTML = "Phone number must contain exactly 10 digits.";

    } else {

        error.innerHTML = "";

        alert("Form Submitted Successfully!");

    }

});