document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtenha o valor selecionado no campo de seleção
    let selectValue = document.getElementById('Select').value;

    // Verifique o valor selecionado e redirecione para a página apropriada
    if (selectValue === 'Pessoa física') {
        window.location.href = 'cadastro-pessoa-fisica.html';
    } else if (selectValue === 'ONG') {
        window.location.href = 'cadastro-ong.html';
    }
});

const signUp = e => {
    e.preventDefault();

    let nome_usuario = document.getElementById('nome_usuario').value;
    let email_usuario = document.getElementById('email_usuario').value;
    let pwd_usuario = document.getElementById('senha_usuario').value;
    let local_usuario = document.getElementById('local_usuario').value;
    let celular_usuario = document.getElementById('celular_usuario').value;
    let sobre_usuario = document.getElementById('sobre_usuario').value;

    let pets = [];

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        formData.some(data =>
            data.nome_usuario &&
            data.email_usuario &&
            data.nome_usuario.toLowerCase() === nome_usuario.toLowerCase() &&
            data.email_usuario.toLowerCase() === email_usuario.toLowerCase()
        );

    if (!exist) {
        let newUserId = formData.length + 1; // Gera um novo ID para o usuário
        let interesses_usuario = document.querySelectorAll('input[type="checkbox"]:checked');
        let checkboxValues = Array.from(interesses_usuario).map(interesses_usuario => interesses_usuario.value);

        //Pega imagem do usuario
        let imagemInput = document.getElementById('imagem_usuario');
        let imagemFile = imagemInput.files[0];

        if (imagemFile) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let imagemDataUrl = event.target.result;

                formData.push({ id: newUserId, nome_usuario, email_usuario, pwd_usuario, local_usuario, celular_usuario, sobre_usuario, interesses_usuario: checkboxValues, imagem_usuario: imagemDataUrl, pets });
                localStorage.setItem('formData', JSON.stringify(formData));
                document.querySelector('form').reset();
                document.getElementById('nome_usuario').focus();
                window.location.href = 'login.html';
            };

            reader.readAsDataURL(imagemFile);
        } else {
            formData.push({
                id: newUserId,
                nome_usuario,
                email_usuario,
                pwd_usuario,
                local_usuario,
                celular_usuario,
                sobre_usuario,
                interesses_usuario: checkboxValues
            });

            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('nome_usuario').focus();
            window.location.href = 'login.html';
        }
    } else {
        alert("Ops... Usuário duplicado!!!\nVocê já está cadastrado.");
    }
};

document.querySelector('form').addEventListener('submit', signUp);




