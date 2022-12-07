
api.getPosts(localStorage.token, data => {
    data.forEach(post => {
        document.getElementById("target").innerHTML += `<div class="card shadow p-3 mb-5">${post.text}</div>`;
    });
});
