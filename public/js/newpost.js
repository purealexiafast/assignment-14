const newpostFormHandler = async function (event) { //for new post
    event.preventDefault();
    //select off of html page the values in inputs id's, change variable names
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');

    const response = await fetch('/api/user/login', { //match route the backend
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
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