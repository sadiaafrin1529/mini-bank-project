document.getElementById('btn-signup').addEventListener('click',function(){

    const textfield=document.getElementById('user-name');
    const username=textfield.value;

const emailField=document.getElementById('user-email');
const email=emailField.value;

const passwordField=document.getElementById('user-password');
const password=passwordField.value;

const confirmPasswordField=document.getElementById('user-confirm-password');
const confirmPassword=confirmPasswordField.value;

console.log(username,email,password,confirmPassword);

if(username=='sadia'&&email=='sadia@gmail.com'&&password=='123456'&&confirmPassword==password){
    window.location.href='login.html'
}
else{
    alert('undefine')
}

})