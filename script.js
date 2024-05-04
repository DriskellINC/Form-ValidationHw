const registration = document.getElementById("registration");

registration.addEventListener("click", (e) => {
  e.preventDefault();

  alert(`you submitted this: ${registration.querySelector("input").value}`);
});
// Example above

// const errorDisplay = document.getElementById("errorDisplay");