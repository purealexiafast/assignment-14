const commentFormHandler = async function (event) {
    event.preventDefault();

    const comment = document.querySelector('#commenttext').value;
    const postId = document.querySelector('#postId').value;

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            body: comment,
            postId
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to comment');
    }
};

document
    .querySelector('#newcomment')
    .addEventListener('submit', commentFormHandler);