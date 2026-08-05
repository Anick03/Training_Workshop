let button = document.getElementById("btn");

button.addEventListener("click", function () {
    // Clear Messages
    userMsg.innerHTML = "";
    emailMsg.innerHTML = "";
    passwordMsg.innerHTML = "";
    phoneMsg.innerHTML = "";

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let valid = true;

    // Username
    if (username == "") {
        userMsg.innerHTML = "Username is required";
        valid = false;
    } else if (username.length < 3) {
        userMsg.innerHTML = "Minimum 3 characters";
        valid = false;
    }

    // Email
    if (email == "") {
        emailMsg.innerHTML = "Email is required";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailMsg.innerHTML = "Invalid Email";
        valid = false;
    }

    // Password
    if (password == "") {
        passwordMsg.innerHTML = "Password is required";
        valid = false;
    } else if (password.length < 8) {
        passwordMsg.innerHTML = "Minimum 8 characters";
        valid = false;
    }

    // Phone
    if (phone == "") {
        phoneMsg.innerHTML = "Phone Number is required";
        valid = false;
    } else if (phone.length != 10) {
        phoneMsg.innerHTML = "Phone must be 10 digits";
        valid = false;
    } else if (!(phone.startsWith("98") || phone.startsWith("97"))) {
        phoneMsg.innerHTML = "Phone must start with 98 or 97";
        valid = false;
    }

    // Patterns
    let usernamePattern = /^ [A-Z a-z] {3,20} $/;
    let emailPattern = /^ [A-Z a-z 0-9 ._%+-]+@[A-Z a-z 0-9]+\.[A-Za-z] {2,} $/;
    let passwordPattern = /^ (?=.[A-Z])(?=.[a-z])(?=.*\d).{8,} $/;
    let phonePattern = /^(98|97)\d{8}$/;
    let valid1 = true;

    // Username
    if (!usernamePattern.test(username)) { //.test() checks whether the value matches the pattern.
        userMsg.innerHTML = "Enter a valid username";
        valid1 = false;
    }

    // Email
    if (!emailPattern.test(email)) {
        emailMsg.innerHTML = "Enter a valid email address";
        valid = false;
    }

    // Password
    if (!passwordPattern.test(password)) {
        passwordMsg.innerHTML =
            "8+ chars, 1 uppercase, 1 lowercase, 1 number";
        valid = false;
    }

    // Phone Number
    if (!phonePattern.test(phone)) {
        phoneMsg.innerHTML =
            "Phone must start with 98 or 97 and contain 10 digits";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful");
    }
});