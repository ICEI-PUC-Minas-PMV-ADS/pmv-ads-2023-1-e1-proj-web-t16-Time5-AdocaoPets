// Obtém os dados do LocalStorage
var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Adiciona um novo usuário à tabela
var novoUsuario = {
    nome_usuario: 'Brenda', sobrenome_usuario: 'Rodrigues', cep_usuario: '33010-600',
    email_usuario: 'brenda@gmail.com', senha_usuario: '12345', estou_procurando_usuario: ['cachorro', 'gato', 'pequeno', 'amoroso'],
    interesses_usuario: ['adotar um pet', 'apadrinhar um pet'], sobre_usuario: 'Tenho 27 anos, sou de região central de BH e gostariade um animal como companhia.'
};
usuarios.push(novoUsuario);

// Armazena os dados atualizados de volta no LocalStorage
localStorage.setItem('usuarios', JSON.stringify(usuarios));

const currentUsuario = JSON.parse(localStorage.getItem('currentUsuario'));

// Exibe as informações do pet na página, por exemplo:
document.getElementById('nome_usuario').textContent = currentUsuario.nome_usuario;
document.getElementById('raca_pet').textContent = currentPet.raca;
document.getElementById('local_pet').textContent = currentPet.local;
document.getElementById('especie_pet').textContent = currentPet.especie;
document.getElementById('sexo_pet').textContent = currentPet.sexo;
document.getElementById('porte_pet').textContent = currentPet.porte;
document.getElementById('sobremim_pet').textContent = currentPet.sobremim;





