//javascript connected
console.log("Update/delete JS connected");

//accessing inputs and submit button
const updatePostButton = document.getElementById
("update-post-button");
const deletePostButton = document.getElementById
("delete-button");
const post_id = document.getElementById('post-id').innerHTML

const updatePost = async (e) => {
  e.preventDefault();

  const title = document.getElementById("edit-title").value;
  const content = document.getElementById("edit-content").value;
  

  if (title && content) {
    const response = await fetch(`/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert('Failed to update post.');
    }
};
}

const deletePost = async (e) => {
  e.preventDefault();

  console.log("button is working")

  const response = await fetch(`/posts/${post_id}`, {
    method: 'DELETE',
})

if (response.ok) {
  window.location.reload();
} else {
  alert('Failed to delete post.');
}
};

deletePostButton.addEventListener("click", deletePost);
updatePostButton.addEventListener("click", updatePost);
