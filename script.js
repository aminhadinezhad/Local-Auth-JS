const userName = document.getElementById("user-login");
const userPass = document.getElementById("password-login");
const btnLogin = document.querySelector(".btn-login");
const setUserName = document.getElementById("user-signup");
const setUserPass = document.getElementById("password-signup");
const btnSignUp = document.querySelector(".btn-signup");

const user = {
  userName: "",
  password: "",

  login: function (user, pass) {
    if (pass === this.password && user === this.userName) {
      return "✅ User logged in successfully";
    } else {
      return "❌ Login failed: invalid username or password";
    }
  },
};
console.log(user);

const users = [user];

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();

  // set user name and password
  user.userName = setUserName.value;
  user.password = setUserPass.value;

  // show user info
  console.log(user);

  // clear login form inputs
  setUserName.value = "";
  setUserPass.value = "";
});

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  // show login result
  console.log(user.login(userName.value, userPass.value));

  // clear login form inputs
  userName.value = "";
  userPass.value = "";
});
