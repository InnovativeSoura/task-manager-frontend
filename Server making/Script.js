 // Dark Mode Toggle
function toggleDarkMode(){

    // Toggle dark mode class
    document.body.classList.toggle("dark-mode");

    // Select button
    let button = document.getElementById("toggleBtn");

    // Change button text
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

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        event.preventDefault();
        error.innerHTML = "Phone number must contain exactly 10 digits.";
    }
    else{
        error.innerHTML = "";
        alert("Form Submitted Successfully!");
    }

});        