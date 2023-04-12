const editPost = async function (event) {
    event.preventDefault();
    const postId = document.querySelector('#postId');
    const title = document.querySelector('#postTitle');
    const body = document.querySelector('#postBody');

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to login');
    }
};

document
    .querySelector('#updateButton')
    .addEventListener('click', editPost);