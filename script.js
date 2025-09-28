const userName = document.getElementById("user");
const userPass = document.getElementById("password");
const btnLogin = document.querySelector(".btn-login");

console.log(userName);
console.log(userPass);

const user = {
  user: "amin_hn",
  password: 123456000000,

  login: function (user, password) {
    if (password === this.password && user === this.user) {
      return "User logged in successfully";
    } else {
      return "❌ Login failed: invalid username or password";
    }
  },
};

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(user.login(userName.value, Number(userPass.value)));
});
