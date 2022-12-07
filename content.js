document.addEventListener("DOMContentLoaded", () => {

    api.getPosts(localStorage.token, data => {
        data.forEach(post => {
            document.getElementById("target").innerHTML += `<div class="card shadow p-3 mb-5">${post.text}</div>`;
        });
    });

    document.getElementById("create").addEventListener("click", () => {
        api.createPost(localStorage.token, { text: document.getElementById("text").value }, data => {
            window.location.href = window.location.href; //REFRESH
        });
    });

});//END DOMContentLoaded