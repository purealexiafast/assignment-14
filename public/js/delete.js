const deletePost = async function (event) {
    event.preventDefault();
    const postId = document.querySelector('#postId').value;


    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',

        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};

document
    .querySelector('#deleteButton')
    .addEventListener('click', deletePost);