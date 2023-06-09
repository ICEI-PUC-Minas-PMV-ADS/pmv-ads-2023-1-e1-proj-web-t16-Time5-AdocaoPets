// Obtém o ID do usuário logado armazenado no localStorage
let userId = localStorage.getItem('userId');

// Obtém os dados do usuário do localStorage
let formData = JSON.parse(localStorage.getItem('formData')) || [];

// Procura pelo usuário com o ID correspondente
let user = formData.find(user => user && user.id == userId);

// Verifica se o usuário foi encontrado
if (user) {
    // Atualiza os elementos da página com os dados do usuário
    document.getElementById('nome_usuario').textContent = user.nome_usuario;
    document.getElementById('local_usuario').textContent = user.local_usuario;
    document.getElementById('sobre_usuario').textContent = user.sobre_usuario;

    let interesses_usuario = document.querySelectorAll('input[type="checkbox"]:checked');
    let interessesContainer = document.getElementById('interesses_usuario');
    interessesContainer.innerHTML = '';

    interesses_usuario.forEach(interesse => {
        let span = document.createElement('span');
        span.className = 'badge text-bg-orange';
        span.textContent = interesse.value;
        interessesContainer.appendChild(span);
    });

} else {
    // Caso o usuário não seja encontrado, faça o tratamento adequado
    console.log('Usuário não encontrado');
}
