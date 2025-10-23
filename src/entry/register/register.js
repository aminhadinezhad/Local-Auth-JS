const name = document.getElementById('name-input');
const nationalId = document.getElementById('national-id-input');
const mobileNumber = document.getElementById('mobile-number-input');
const landlineNumber = document.getElementById('landline-number-input');
const email = document.getElementById('email-input');
const postalCode = document.getElementById('postal-code-input');
const address = document.getElementById('address-input');
const password = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password-input');
const registerForm = document.querySelector('.register-form__form');
const registerBtn = document.querySelector('.register-form__submit-link');
const registerInputs = document.querySelectorAll('.register-form__input');
const warningMessages = document.querySelectorAll('.warning-message');
const warningIcons = document.querySelectorAll('.warning-icon');

warningIcons.forEach(message => message.classList.add('hidden'));
warningMessages.forEach(icon => icon.classList.add('hidden'));

registerBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const isNameEmpty = name.value === '';
  const isNationalIdEmpty = nationalId.value === '';
  const isMobileNumberEmpty = mobileNumber.value === '';
  const isAddressEmpty = address.value === '';
  const isPasswordEmpty = password.value === '';
  const isConfirmPasswordEmpty = confirmPassword.value === '';
  let isValid = true;

  registerInputs.forEach(input => {
    input.classList.remove('left-padding');
    input.classList.remove('warning-input');
  });

  warningIcons.forEach(message => message.classList.add('hidden'));
  warningMessages.forEach(icon => icon.classList.add('hidden'));

  if (isNameEmpty) {
    registerInputs[0].classList.add('left-padding');
    registerInputs[0].classList.add('warning-input');
    warningIcons[0].classList.remove('hidden');
    warningMessages[0].classList.remove('hidden');
    isValid = false;
  }

  if (isNationalIdEmpty) {
    registerInputs[1].classList.add('left-padding');
    registerInputs[1].classList.add('warning-input');
    warningIcons[1].classList.remove('hidden');
    warningMessages[1].classList.remove('hidden');
    isValid = false;
  }

  if (isMobileNumberEmpty) {
    registerInputs[2].classList.add('left-padding');
    registerInputs[2].classList.add('warning-input');
    warningIcons[2].classList.remove('hidden');
    warningMessages[2].classList.remove('hidden');
    isValid = false;
  }

  if (isAddressEmpty) {
    registerInputs[6].classList.add('left-padding');
    registerInputs[6].classList.add('warning-input');
    warningIcons[3].classList.remove('hidden');
    warningMessages[3].classList.remove('hidden');
    isValid = false;
  }

  if (isPasswordEmpty) {
    registerInputs[7].classList.add('left-padding');
    registerInputs[7].classList.add('warning-input');
    warningIcons[4].classList.remove('hidden');
    warningMessages[4].classList.remove('hidden');
    isValid = false;
  }

  if (isConfirmPasswordEmpty) {
    registerInputs[8].classList.add('left-padding');
    registerInputs[8].classList.add('warning-input');
    warningIcons[5].classList.remove('hidden');
    warningMessages[5].classList.remove('hidden');
    isValid = false;
  }

  if (isValid) {
    registerForm.submit();
  }
});
