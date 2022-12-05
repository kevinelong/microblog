document.addEventListener("DOMContentLoaded", ()=>{

    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    
    register.addEventListener("click", ()=>{
        console.log(username.value);
        console.log(password.value);
                         
        const baseURL = "https://microbloglite.herokuapp.com";
        const endpoint = "/api/users";
        fetch(baseURL + endpoint, {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value,
                fullName: "Kevin Long"
            }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data);
            localStorage.loginData = data;
            alert("Registration Success. Please Login.")
        })
    });

    login.addEventListener("click", ()=>{
        console.log(username.value);
        console.log(password.value);
                         
        const baseURL = "https://microbloglite.herokuapp.com";
        const endpoint = "/auth/login";
        fetch(baseURL + endpoint, {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((data)=>{
            console.log(data);
            localStorage.token = data.token;
            window.location.href = "content.html"
        })
    });

});
