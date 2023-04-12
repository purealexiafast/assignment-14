const updatePostHandler = async function (event) { //for new post
    event.preventDefault();

    const titleEl = document.querySelector('#inputTitle');
    const textpostEl = document.querySelector('#inputText');
    const id = document.querySelector('#postId').value;

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: titleEl.value,
            body: textpostEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post.');
    }
};

document
    .querySelector('#updateButton')
    .addEventListener('click', updatePostHandler);