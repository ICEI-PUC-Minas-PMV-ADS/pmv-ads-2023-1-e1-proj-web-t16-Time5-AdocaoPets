function signIn(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    let email_usuario = document.getElementById('email_usuario').value;
    let pwd_usuario = document.getElementById('senha_usuario').value;

    // Obtem os dados do usuário do localStorage
    let formData = JSON.parse(localStorage.getItem('formData')) || [];


    // Verificar se o usuário existe e a senha está correta
    let user = formData.find(user => user && user.email_usuario.toLowerCase() === email_usuario.toLowerCase());

    if (email_usuario === '' || pwd_usuario === '') {

        alert('usuário ou password em branco!');
        return;
    }

    if (user && user.pwd_usuario === pwd_usuario) {
       // Login bem-sucedido
        // console.log("user found!");
        localStorage.setItem('userId', user.id);
        // Redirecionar para a página desejada após o login
        
        // Checa se o usuario e ong ou nao, redirecionando para a pagina usuario ou ong de acordo
        if (document.getElementById('isOng').checked ) {
            window.location.href = 'perfil_ong.html';
        } else {
            
            window.location.href = 'perfil_usuario.html';
        }
            
            
    } else {
        console.log("user not found!");
        // Credenciais de login incorretas
        alert("Credenciais de login incorretas!");
    }
}