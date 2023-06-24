import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@9.0.0/+esm'

const signUp = e => {
    e.preventDefault();

    let nome_ong = document.getElementById('nome_ong').value;
    let email_ong = document.getElementById('email_ong').value;
    let pwd_ong = document.getElementById('senha_ong').value;
    let cep_ong = document.getElementById('cep_ong').value;
    let telefone_ong = document.getElementById('telefone_ong').value;
    let sobre_ong = document.getElementById('sobre_ong').value;


    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        formData.some(data =>
            data.nome_ong &&
            data.email_ong &&
            data.nome_ong.toLowerCase() === nome_ong.toLowerCase() &&
            data.email_ong.toLowerCase() === email_ong.toLowerCase()
        );

    if (!exist) {
        let newIdOng = uuidv4(); // Gera um novo ID para o usuário

        formData.push({ 
            id: newIdOng, 
            nome_ong, 
            email_ong, 
            pwd_ong, 
            cep_ong, 
            telefone_ong, 
            sobre_ong
        });
        localStorage.setItem('formData', JSON.stringify(formData));

        //Pega imagem do usuario
        let imagemInput = document.getElementById('imagem_ong');
        let imagemFile = imagemInput.files[0];

        if (imagemFile) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let imagemDataUrl = event.target.result;
                localStorage.setItem('formDataImage:'+newUserId, imagemDataUrl);   
            };
            reader.readAsDataURL(imagemFile);

        }

        document.querySelector('form').reset();
        document.getElementById('nome_ong').focus();
        window.location.href = 'login.html';
    } else {
        alert("Ops... Ong duplicado!!!\nVocê já está cadastrado.");
    }
};

document.querySelector('form').addEventListener('submit', signUp);