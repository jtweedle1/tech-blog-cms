// //javascript connected
// console.log("Comment JS connected");

// //accessing inputs and submit button
// const commentText = document.getElementById("comment-input")
// const commentButton = document.getElementById("comment-button")

// const submitComment = async (data) => {

//   const response = await fetch(`api/comments`, {
//     method: 'POST',
//     body: JSON.stringify({ content }),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })

//   if (response.ok) {
//     document.location.reload();
//   } else {
//     alert('Failed to create comment')
//   }

//   // axios
//   //   .post("/posts/:id", data)
//   //   .then((results) => {
//   //     console.log(results.data);
//   //     //if the results are okay refresh
//   //     document.location.reload();
//   //   })
//   //   .catch((error) => {
//   //     alert(
//   //       "There was a problem with creating the comment. Please try again later."
//   //     );
//   //     console.log(error);
//   //   });
// };

// commentButton.addEventListener("click", async (e) => {
//   e.preventDefault();
//   const
//   content: commentText.value
//   };
//   console.log(data)
//   // console.log(data);
//   submitComment(data);
// }
// );

console.log("Comment Js connected.")

const newComment = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-input').value.trim();
  const post_id = document.getElementById('post-id').innerHTML

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document.querySelector('#comment-button').addEventListener('click', newComment);