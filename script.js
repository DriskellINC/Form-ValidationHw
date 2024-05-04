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
const login1 = document.getElementById("login");
const password1 = document.getElementsByName("password");

login1.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(`you submitted this: ${login1.querySelector("input").value}`);
});
// Example above part 1-3/1- 5
//*validating the username, email and password using localStorage
/
localStorage.setItem("login1", ",");
// function ErrorDisplay() {
const errorDisplay = document.getElementById("errorDisplay");
add.addEventListener(e){
    innerHtml.e.('error message')
}
// const errorDisplay = document.getElementById("errorDisplay");
///////part 5 needs an if statement for the keep me logged in 

