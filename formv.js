function clicked() {
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Subject = document.getElementById("subject").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var namePattern = /^[a-zA-Z\s]*$/; // Allow only letters and spaces

    if (Name.trim() === "" || !namePattern.test(Name) || !emailPattern.test(Email) || Subject.trim() === "") {
        alert("Please fill in all fields correctly.");
    } else {
        alert("Form submitted successfully!");

        document.getElementById("myForm").reset();
    }
}
