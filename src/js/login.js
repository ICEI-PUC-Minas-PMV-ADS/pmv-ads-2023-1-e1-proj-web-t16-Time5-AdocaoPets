function signIn(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    let email_usuario = document.getElementById('email_usuario').value;
    let pwd_usuario = document.getElementById('senha_usuario').value;

    // Obtem os dados do usuário do localStorage
    let formData = JSON.parse(localStorage.getItem('formData')) || [];


    // Verificar se o usuário existe e a senha está correta
    let user = formData.find(user => user && user.email_usuario.toLowerCase() === email_usuario.toLowerCase());

    if (user && user.pwd_usuario === pwd_usuario) {
        // Login bem-sucedido
        alert("Login bem-sucedido!");
        localStorage.setItem('userId', user.id);
        // Redirecionar para a página desejada após o login
        window.location.href = 'perfil_usuario.html';


    } else {
        // Credenciais de login incorretas
        alert("Credenciais de login incorretas!");
    }
}