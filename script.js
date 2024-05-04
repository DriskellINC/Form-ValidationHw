const registration = document.getElementById("registration");

registration.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(`you submitted this: ${registration.querySelector("input").value}`);
});
// Example above part 1-3/1- 5
//*validating the username, email and password using localStorage
function validUsername(e) {
  const username = document.getElementsByName("name");
  const email = document.getElementsByName("email");
  const password = document.getElementsByName("password");
}
localStorage.setItem("validUsername", ",");

// Validate lowercase
validUsername = function () {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
};
//////part 4

// const errorDisplay = document.getElementById("errorDisplay");