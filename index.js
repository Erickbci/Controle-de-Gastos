function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordError();
}

function isEmailValid() {
  const email = form.email().value
  if (!email) {
    return false;
  }
  return validateEmail(email)
}

function toggleEmailErrors() {
  const email = form.email().value
  form.emailRequiredError().style.display = email ? 'none' : 'block';
  form.emailInvalidError().style.display = validateEmail(email) ? 'none' : 'block';
}

function togglePasswordError() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? 'none' : 'block';
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = form.password().value
  if (!password) {
    return false;
  }
  return true;
}

function seePassword() {
  if (form.password().type === 'password') {
    form.password().type = 'text';
    form.seePasswordImage().setAttribute('src', 'olho.svg');
    return;
  } else {
    form.password().type = 'password';
    form.seePasswordImage().setAttribute('src', 'olho-fechado.svg');
  } 

}


const form = {
  email: () => document.getElementById('email'),
  emailInvalidError: () => document.getElementById('email-invalid-error'),
  emailRequiredError: () => document.getElementById('email-required-error'),
  loginButton: () => document.getElementById('login-button'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('password-required-error'),
  recoverPassword: () => document.getElementById('recover-password-button'),
  seePasswordImage: () => document.getElementById('see-password-img')
}
