function validate(e) {
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let address = document.querySelector("#address").value
    let country = document.querySelector("#country").value
    let dob = document.querySelector("#dob").value
    let password = document.querySelector("#password").value
    let cPass = document.querySelector("#cpassword").value
    let mobile = document.querySelector("#mobile").value;
    let email = document.querySelector("#email").value;
    let gender = document.querySelectorAll("input[name='gender']")
    let g = ""
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            g= gender[i].value;
        }
    }
    let error = false

    if (name === "") {
        document.querySelector("#nameError").innerHTML = "Name is required"
        error = true
    } else {
        document.querySelector("#nameError").innerHTML = ""
    }
    if (age === "") {
        document.querySelector("#ageError").innerHTML = "Age is required"
        error = true
    } else if (age < 15 || age > 65) {
        document.querySelector("#ageError").innerHTML = "Age should be between 15 and 65"
        error = true
    } else {
        document.querySelector("#ageError").innerHTML = ""
    }
    if (address === "") {

        document.querySelector("#addressError").innerHTML = "Address is required"
        error = true
    } else {
        document.querySelector("#addressError").innerHTML = ""
    }
    if(g == ""){
        document.querySelector("#genderError").innerHTML= "Gender is required"
        error = true
    }else{
        document.querySelector("#genderError").innerHTML=""
    }
    if (country === "") {
        document.querySelector("#countryError").innerHTML = "Country is required"
        error = true
    } else {
        document.querySelector("#countryError").innerHTML = ""
    }
    
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (!passwordRegex.test(password)) {
        document.querySelector("#passError").innerHTML = "Password must be 8-16 characters long, include a letter, a number, and a special character";
        error = true;
    } else if (password != cPass) {
        document.querySelector("#passError").innerHTML = "Passwords do not match";
        error = true;
    } else {
        document.querySelector("#passError").innerHTML = "";
    }
    let mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.querySelector("#mobileError").innerHTML = "Mobile number must be exactly 10 digits";
        error = true;
    } else {
        document.querySelector("#mobileError").innerHTML = "";
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.querySelector("#emailError").innerHTML = "Invalid email format";
        error = true;
    } else {
        document.querySelector("#emailError").innerHTML = "";
    }

    if (error) {
        e.preventDefault()
    }
}