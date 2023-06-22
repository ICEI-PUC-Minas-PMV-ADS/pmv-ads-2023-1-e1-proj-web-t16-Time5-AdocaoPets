"use strict";

function signIn(event) {
    let isOng = false;
    if (document.getElementById('isOng').checked ) isOng = true;


    event.preventDefault(); // Impede o envio do formulário padrão

    let email_usuario = document.getElementById('email_usuario').value;
    let pwd_usuario = document.getElementById('senha_usuario').value;

    if (email_usuario === '' || pwd_usuario === '') {
        
        alert('usuário ou password em branco!');
        return;
    }
    // Obtem os dados do usuário do localStorage
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let user;
    // Verificar se o usuário existe e a senha está correta
    // let user;
    if(isOng){
        user = formData.find(user => user && user.email_ong.toLowerCase() === email_usuario.toLowerCase());
        if (user && user.pwd_ong === pwd_usuario)
        {
            UserFound(user);
            window.location.href = 'perfil_ong.html';
        }
        else UserNotFound();
    } 
    else {
        user = formData.find(user => user && user.email_usuario.toLowerCase() === email_usuario.toLowerCase());
        if (user && user.pwd_usuario === pwd_usuario) 
        {
            UserFound(user);
            window.location.href = 'perfil_usuario.html';
        } 
    else UserNotFound();
    }
        
}

function UserNotFound(){
    alert("Credenciais de login incorretas!");
}

function UserFound(user){
    localStorage.setItem('userId', user.id);
}