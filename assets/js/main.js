// password show hide js

const eyeIcon = document.querySelectorAll(".eye-icon");

eyeIcon.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = icon.closest(".pass-field").querySelector("input");
    const i = icon.querySelector("i");
    input.type == "password"
      ? input.setAttribute("type", "text") & i.classList.add("fa-eye")
      : input.setAttribute("type", "password") &
        i.classList.remove("fa-eye") &
        i.classList.add("fa-eye-slash");
  });
});

// form validation js

const form = document.getElementById("form");
const usName = document.querySelector(".name");
const email = document.querySelector(".email");
const paswrd = document.querySelector(".password");
const cnfmPaswrd = document.querySelector(".confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('hi');  
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.closest(".input-style");
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.closest(".input-style");
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidName = (usName) =>{
    const regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(String(usName).toLowerCase());
}


const validateInputs = () => {
  const namVal = usName.value.trim();
  if (namVal === null || namVal === "") {
    setError(usName, "Name is required.");

  } 
  else if(!isValidName(namVal)){
    setError(usName, "Please enter valid name.");
  }
  else if (namVal.length > 40) {
    setError(usName, "Name is too long.");
  } else {
    setSuccess(usName);
  }

  const emailVal = email.value.trim();
  if (emailVal === "") {
    setError(email, "Email is required.");
  } else if (!isValidEmail(emailVal)) {
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  const paswrdVal = paswrd.value.trim();

  if (paswrdVal === "") {
    setError(paswrd, "Password is required.");
  } else if (paswrdVal.length < 8) {
    setError(paswrd, "Password is too short.");
  } else {
    setSuccess(paswrd);
  }

  const cnfmPaswrdVal = cnfmPaswrd.value.trim();

  if (cnfmPaswrdVal === "") {
    setError(cnfmPaswrd, "Password is required.");
  } else if (cnfmPaswrdVal.length < 8) {
    setError(cnfmPaswrd, "Password is too short.");
  } else if (paswrdVal != cnfmPaswrdVal) {
    setError(cnfmPaswrd, "Password did not match.");
  } else {
    setSuccess(cnfmPaswrd);
  }
};


