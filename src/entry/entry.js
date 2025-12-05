const username = document.getElementById('username-input');
const password = document.getElementById('password-input');
const loginForm = document.querySelector('.login-form__form');
const loginBtn = document.querySelector('.login-form__submit-link');
const formInputs = document.querySelectorAll('.login-form__input');
const warningMessages = document.querySelectorAll('.warning-message');
const warningUserNotExist = document.querySelector(
  '.warning-message--user-not-exist'
);
const warningWrongPass = document.querySelector('.warning-message--wrong-pass');
const warningIcons = document.querySelectorAll('.warning-icon');
const storedAccountsJSON = localStorage.getItem('accounts');
const accountsArray = storedAccountsJSON ? JSON.parse(storedAccountsJSON) : [];

warningIcons.forEach(message => message.classList.add('hidden'));
warningMessages.forEach(icon => icon.classList.add('hidden'));
warningUserNotExist.classList.add('hidden');
warningWrongPass.classList.add('hidden');

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const isUsernameEmpty = username.value === '';
  const isPasswordEmpty = password.value === '';
  let isValid = true;

  formInputs.forEach(input => {
    input.classList.remove('left-padding');
    input.classList.remove('warning-input');
  });
  warningIcons.forEach(message => message.classList.add('hidden'));
  warningMessages.forEach(icon => icon.classList.add('hidden'));
  warningUserNotExist.classList.add('hidden');
  warningWrongPass.classList.add('hidden');

  if (isUsernameEmpty) {
    formInputs[0].classList.add('left-padding');
    formInputs[0].classList.add('warning-input');
    warningIcons[0].classList.remove('hidden');
    warningMessages[0].classList.remove('hidden');
    isValid = false;
  }

  if (isPasswordEmpty) {
    formInputs[1].classList.add('left-padding');
    formInputs[1].classList.add('warning-input');
    warningIcons[1].classList.remove('hidden');
    warningMessages[1].classList.remove('hidden');
    isValid = false;
  }

  const userAuthentication = function () {
    const userAcc = accountsArray.find(
      acc => acc.mobileNumber === username.value
    );

    if (userAcc) {
      if (userAcc && userAcc.password === password.value) {
        alert(
          `${userAcc.name} گرامی شما با موفقیت وارد حساب کاربری خود شدید✅`
        );
        window.location.href = '../index.html';
      } else if (
        userAcc &&
        userAcc.password !== password.value &&
        isPasswordEmpty === false
      ) {
        formInputs[1].classList.add('left-padding');
        formInputs[1].classList.add('warning-input');
        warningIcons[1].classList.remove('hidden');
        warningWrongPass.classList.remove('hidden');
        isValid = false;
      }
    } else if (!userAcc && isUsernameEmpty === false) {
      formInputs[0].classList.add('left-padding');
      formInputs[0].classList.add('warning-input');
      warningIcons[0].classList.remove('hidden');
      warningUserNotExist.classList.remove('hidden');
    }
  };

  if (isValid) {
    userAuthentication();
  }
});
