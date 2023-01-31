//javascript connected
console.log("Register JS connected")

//accessing inputs and submit button
const username = document.getElementById("username-register")
const password = document.getElementById("password-register")
const submitButton = document.getElementById("submit-button")

const submitUser = (data) => {
    axios
      .post("/register", data)
      .then((results) => {
        console.log(results.data);
        document.location.replace("/dashboard");
      })
      .catch((error) => {
        alert("There was a problem with the signup. Try again later.");
        console.log(error);
      });
};

submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value,
    };
    submitUser(data);
  });
  