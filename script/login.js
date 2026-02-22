// login page costomize
const loginBtn = document.getElementById('login-btn').addEventListener('click', function(){
    console.log('login is start');


    const loginNumber = document.getElementById('login-number');
    const login = loginNumber.value;
    console.log(login);

    const loginPin = document.getElementById('login-pin');
    const pin = loginPin.value;
    console.log(pin);

    if(login == '01747227026' && pin == '1234'){
        alert('Login Successfull')
        window.location.assign("/home.html")
    }
    else{
        alert('Invalid Input')
        return
    }
});