const newpostFormHandler = async function (event) { //for new post
    event.preventDefault();
    //select off of html page the values in inputs id's, change variable names
    const titleEl = document.querySelector('#inputtitle');
    const textpostEl = document.querySelector('#textpost');

    const response = await fetch('/api/post', { //match route the backend
        method: 'POST',
        body: JSON.stringify({
            title: titleEl.value,
            body: textpostEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create post.');
    }
};

document
    .querySelector('#newpostform') //select new post form
    .addEventListener('submit', newpostFormHandler);