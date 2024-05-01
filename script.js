const registrationForm = document.getElementById|("registration");

registrationForm.addEventListener("click", (e) => {
    e.preventDefault();
alert (`you submitted this: ${registrationForm.querySelector (`username`).value}`)
})
