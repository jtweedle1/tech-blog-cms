const username = document.getElementById('username-login').value.trim();
const password = document.getElementById('password-login').value.trim();
const loginButton = document.getElementById('login-button')

const loginUser = (data) => {
    axios
      .post("/login", data)
      .then((results) => {
        console.log(results.data);
        //if the results are okay redirect to the dashboard
        document.location.replace("/dashboard");
      })
      .catch((error) => {
        alert("There was a problem with the login. Try again later.");
        console.log(error);
      });
  };

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value,
    };
    console.log(data)
    loginUser(data);
  });
  