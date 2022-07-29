const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstname", "First Name is required");
  } else {
    removeErrorFrom("firstname");
  }

  if (lastName === "") {
    addErrorTo("lastname", "Last Name is required");
  } else removeErrorFrom("lastname");

  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else removeErrorFrom("email");

  if (isValid(email)) {
    addErrorTo("email", "Email is not valid");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.opacity = "1";
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

const isValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
