//javascript connected
console.log("Dashboard JS connected");

//accessing inputs and submit button
const updatePostButton = document.getElementById
("update-post-button");

const updatePost = async (e) => {
  e.preventDefault();

  const title = document.getElementById("edit-title").value;
  const content = document.getElementById("edit-content").value;
  const post_id = document.getElementById('post-id').innerHTML

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

updatePostButton.addEventListener("click", updatePost);
