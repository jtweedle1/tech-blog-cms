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