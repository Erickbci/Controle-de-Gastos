function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordError();
}

function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email)
}

function toggleEmailErrors() {
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email-required-error").style.display = "block"
  } else {
    document.getElementById("email-required-error").style.display = "none"
  }

  if (validateEmail(email)) {
    document.getElementById("email-ivalid-error").style.display = "none"
  } else {
    document.getElementById("email-invalid-error").style.display = "block"
  }
}

function togglePasswordError() {
  const password = document.getElementById("password").value;
  if (!password) {
    document.getElementById("password-required-error").style.display = "block"
  } else {
    document.getElementById("password-required-error").style.display = "none"
  }
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  document.getElementById('recover-password-button').disabled = !emailValid;

  const passwordValid = isPasswordValid();
  document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = document.getElementById('password').value
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
