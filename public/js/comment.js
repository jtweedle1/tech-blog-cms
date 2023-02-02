//javascript connected
console.log("Comment JS connected");

//accessing inputs and submit button
const commentText = document.getElementById("comment-input")
const commentButton = document.getElementById("comment-button")

const submitComment = (data) => {
  axios
    .post("/posts/:id", data)
    .then((results) => {
      console.log(results.data);
      //if the results are okay refresh
      document.location.reload();
    })
    .catch((error) => {
      alert(
        "There was a problem with creating the comment. Please try again later."
      );
      console.log(error);
    });
};

commentButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = {
  content: commentText.value
  };
  console.log(data)
  // console.log(data);
  submitComment(data);
}
);
