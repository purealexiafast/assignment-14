const editPost = async function (event) {
    event.preventDefault();
    const postId = document.querySelector('#postId').value;
    const title = document.querySelector('#postTitle').value;
    const body = document.querySelector('#postBody').value;

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to edit post');
    }
};

document
    .querySelector('#updateButton')
    .addEventListener('click', editPost);