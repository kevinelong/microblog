
const baseURL = "https://microbloglite.herokuapp.com";

function post(endpoint, data,  callbackFunction = ()=>{} ){
    fetch(endpoint, { method: "POST", body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json()).then(callbackFunction)
}

function register(userData = {username:"",password:"",fullName:""}, callbackFunction = ()=>{} ){
    post( baseURL + "/api/users", userData, callbackFunction);
}

function login(authData = {username:"",password:""}, callbackFunction){
    post( baseURL + "/auth/login", authData, callbackFunction);
}

document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("register").addEventListener("click", ()=>{
        register({
            username:document.getElementById("usernameR").value,
            password:document.getElementById("passwordR").value,
            fullName:document.getElementById("fullName").value,
        }, data=>{
            document.getElementById("registerResult").innerHTML = JSON.stringify(data)
        });
    });

    document.getElementById("login").addEventListener("click", ()=>{
        login({
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
        }, data => {
            document.getElementById("loginResult").innerHTML = JSON.stringify(data)
            localStorage.token = data.token; // store on client browser disk for later use on the content.html page
            window.location.href = "content.html"
        });
    });

});
