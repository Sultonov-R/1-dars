// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const list = document.getElementById('name')


// btn.addEventListener('click', function(){
    
// })





let username = document.getElementById('username');
let password = document.getElementById('password');

let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    if (username === "ruzali" && password === "ruzali" ) {
        alert("Succesfull");
    } else {
        alert("Unsuccesful, please try again!");
    }
})