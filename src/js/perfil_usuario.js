
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

    let imagem_usuario = localStorage.getItem('formDataImage:' + user.id);
    if (imagem_usuario) {
        // Exibe a imagem do usuário
        document.getElementById('imagem_usuario').src = imagem_usuario;
    }

    let interesses_usuario = document.querySelectorAll('input[type="checkbox"]:checked');
    let interessesContainer = document.getElementById('interesses_usuario');
    interessesContainer.innerHTML = '';

    user.interesses_usuario.forEach(interesse => {
        const span = document.createElement('span');
        span.className = 'badge text-bg-orange';
        span.textContent = interesse;
        interessesContainer.appendChild(span);
    });

} else {
    // Caso o usuário não seja encontrado, faça o tratamento adequado
    console.log('Usuário não encontrado');
}


var mostrarPet = document.getElementById('meus-pets');
if (user.interesses_usuario.includes("Doar pet")) {
    mostrarPet.style.display = 'block';
} else {
    mostrarPet.style.display = 'none';
}



// Realiza o logout do usuário
const logout = () => {
    // Remove os dados do usuário do localStorage
    localStorage.removeItem('userId');

    // Redireciona para a página de login
    window.location.href = 'login.html';
};

// Chame a função logout quando o usuário clicar no botão de logout
document.getElementById('btn-logout').addEventListener('click', logout);



// Variável global para armazenar o contador de IDs
let petIdCounter = 1;

function addPet() {
    // Resto do código para obter os dados do pet...

    // Gera o ID único para o pet
    let petId = petIdCounter++;

    // Verifica se o ID já existe na lista de pets
    while (user.pets.some((pet) => pet.id === petId)) {
        petId = petIdCounter++;
    }

    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const local = document.getElementById('local').value;
    const especie = document.getElementById('especie').value;
    const sexo = document.getElementById('sexo').value;
    const porte = document.getElementById('porte').value;
    const sobremim = document.getElementById('sobremim').value;

    // Cria um objeto com as características selecionadas pelo usuário
    const caracteristicas = [];
    const checkboxes = document.getElementsByName('caracteristicas');

    let msgError = document.querySelector('#msgError');
    let msgSuccess = document.querySelector('#msgSuccess');
    // Verifica se ao menos um checkbox foi selecionado pelo usuário
    let peloMenosUmCheckboxMarcado = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            peloMenosUmCheckboxMarcado = true;
            caracteristicas.push(checkboxes[i].value);
        }
    }

    if (!peloMenosUmCheckboxMarcado) {
        msgError.setAttribute('style', 'display: block');
        msgSuccess.setAttribute('style', 'display:none');
        return;
    }

    // Verifica se todos os campos foram preenchidos
    if (!nome || !raca || !local || !especie || !sexo || !porte || !sobremim) {
        msgError.setAttribute('style', 'display: block');
        return;
    } else {

        //Pega imagem do pet
        let imagemInput = document.getElementById('petFile');
        let imagemFile = imagemInput.files[0];
        if (imagemFile) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let imagemDataUrl = event.target.result;
                user.pets = user.pets || [];

                user.pets.push({
                    id: petId,
                    nome,
                    raca,
                    local,
                    especie,
                    sexo,
                    porte,
                    caracteristicas,
                    sobremim,
                    imagem: imagemDataUrl
                });

                localStorage.setItem('formData', JSON.stringify(formData));


                msgSuccess.setAttribute('style', 'display: block');
                msgError.setAttribute('style', 'display: none');

                setTimeout(() => {
                    window.location.href = 'perfil_usuario.html';
                }, 500);

            };
            reader.readAsDataURL(imagemFile);

        }


    };

    reader.readAsDataURL(imagemFile);
}



function deletePet(index) {

    if (user && user.pets) {
        // Exibir a confirmação ao usuário
        const confirmDelete = confirm("Tem certeza de que deseja excluir este pet?");

        if (confirmDelete) {
            user.pets.splice(index, 1);
            formData.forEach((data, i) => {
                if (data.id === user.id) {
                    formData[i] = user;
                    return;
                }
            });
            localStorage.setItem('formData', JSON.stringify(formData));
            showPetsCard();
        }
    }
}


function showPetsCard() {
    const user = getUserData();
    const petsCard = document.getElementById('petsCard');
    petsCard.innerHTML = '';

    if (user && user.pets) {
        user.pets.forEach((pet, index) => {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
            <div class="row_pet">
            <div class="col-md-4" style="text-align: -webkit-center">
              <img id="imagem_pet" src="${pet.imagem}" class="img-fluid" style="height: 200px; object-fit:cover" >
            </div>
            <div class="d-flex">
              <span class="mt-2 badge text-bg-orange" style="width:100%">${pet.nome}</span>
            </div>

              <div class="d-flex">
                <td><button class="btn_pet btn btn-primary" onclick="showPetProfile((${index}))">Ver</button></td>
                <td><button class="btn_pet btn btn-primary" onclick="deletePet(${index})">Excluir</button></td>
              </div>
              
          </div>
                
               
            `;

            petsCard.appendChild(card);
        });
    }
}

function getUserData() {
    const userId = localStorage.getItem('userId');
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    return formData.find(user => user && user.id == userId);
}

function showPetProfile(index) {
    const user = getUserData();

    if (user && user.pets) {
        const pet = user.pets[index];
        localStorage.setItem('currentPet', JSON.stringify(pet));
        window.location.href = 'perfil_pet.html';
    }
}

// Chame as funções iniciais
// showPets();
showPetsCard();


//Mostra os dados do usuario ao clicar em "Editar perfil"
function fillUserData() {


    // Verifica se o usuário foi encontrado
    if (user) {
        document.getElementById('nome_usuario_editar').value = user.nome_usuario;
        document.getElementById('email_usuario').value = user.email_usuario;
        document.getElementById('senha_usuario').value = user.pwd_usuario;
        document.getElementById('local_usuario_editar').value = user.local_usuario;
        document.getElementById('celular_usuario').value = user.celular_usuario;
        document.getElementById('sobre_usuario_editar').value = user.sobre_usuario;
        document.querySelectorAll('input[type="checkbox"]:checked');


    } else {
        console.log('Usuário não encontrado');
    }
}



// Função para atualizar os dados do usuário
function updateUserData() {
    // Capturar os novos valores dos campos de entrada
    const nome = document.getElementById('nome_usuario_editar').value;
    const email = document.getElementById('email_usuario').value;
    const senha = document.getElementById('senha_usuario').value;
    const local = document.getElementById('local_usuario_editar').value;
    const celular = document.getElementById('celular_usuario').value;
    const sobre = document.getElementById('sobre_usuario_editar').value;

    let interesses_usuario = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkboxValues = Array.from(interesses_usuario).map(interesses_usuario => interesses_usuario.value);


    // Atualizar os valores do objeto user
    user.nome_usuario = nome;
    user.email_usuario = email;
    user.pwd_usuario = senha;
    user.local_usuario = local;
    user.celular_usuario = celular;
    user.sobre_usuario = sobre;
    user.interesses_usuario = checkboxValues;

    // Atualizar os dados no localStorage
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    const index = formData.findIndex((u) => u.id === user.id);
    if (index !== -1) {
        formData[index] = user;
        localStorage.setItem('formData', JSON.stringify(formData));

    } else {
        console.log('Usuário não encontrado no localStorage.');
    }


    //Pega imagem do usuario
    let imagemInput = document.getElementById('imagem_usuario_editar');
    let imagemFile = imagemInput.files[0];

    if (imagemFile) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imagemDataUrl = event.target.result;
            // Exibir a imagem do usuário
            const imagemUsuarioPerfil = document.getElementById('imagem_usuario');
            imagemUsuarioPerfil.src = imagemDataUrl;

            localStorage.setItem('formDataImage:' + user.id, imagemDataUrl);

        };

        reader.readAsDataURL(imagemFile);
    }

    window.location.href = 'perfil_usuario.html';
}


