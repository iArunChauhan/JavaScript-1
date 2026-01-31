document.getElementById("myform").addEventListener("submit", function (event) {

    
    event.preventDefault();

    let age = parseInt(document.getElementById("age").value, 10);
    let phone = document.getElementById("phone").value;

    let ageError = document.getElementById("ageError");
    let phoneError = document.getElementById("phoneError");

    ageError.textContent = "";
    phoneError.textContent = "";

    let isValid = true;

    if (isNaN(age) || age < 18) {
        ageError.textContent = "Must be 18 or greater";
        isValid = false;
    }

    let pattern = /^[6-9]\d{9}$/;

    if (!pattern.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit Indian number";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
