function showPetProfile() {
    const currentPet = JSON.parse(localStorage.getItem('currentPet'));

    // Exibe as informações do pet na página, por exemplo:
    document.getElementById('nome_pet').textContent = currentPet.nome;
    document.getElementById('raca_pet').textContent = currentPet.raca;
    document.getElementById('local_pet').textContent = currentPet.local;
    document.getElementById('especie_pet').textContent = currentPet.especie;
    document.getElementById('sexo_pet').textContent = currentPet.sexo;
    document.getElementById('porte_pet').textContent = currentPet.porte;
    document.getElementById('sobremim_pet').textContent = currentPet.sobremim;



    // Exibe a imagem do pet no perfil
    const petImage = document.getElementById('petImage');
    petImage.src = currentPet.imagem;

    // Exibe as características do pet em spans separados
    const caracteristicasContainer = document.getElementById('caracteristicas_pet');
    caracteristicasContainer.innerHTML = '';

    currentPet.caracteristicas.forEach((caracteristica) => {
        const span = document.createElement('span');
        span.className = 'badge text-bg-orange';
        span.textContent = caracteristica;
        caracteristicasContainer.appendChild(span);
    });



}

showPetProfile();


//Mostra os dados do pet ao clicar em "Editar perfil"
function fillPetData() {
    const currentPet = JSON.parse(localStorage.getItem('currentPet'));

    // Verifica se o pet foi encontrado
    if (currentPet) {
        document.getElementById('nome').value = currentPet.nome;
        document.getElementById('raca').value = currentPet.raca;
        document.getElementById('local').value = currentPet.local;
        document.getElementById('sobremim').value = currentPet.sobremim;

        // Adicione a chamada da função updatePetData() ao clicar em "Salvar"
        const saveButton = document.getElementById('Submit');
        saveButton.addEventListener('click', function () {
            updatePetData(currentPet); // Passa o objeto currentPet como argumento para updatePetData()
        });
    } else {
        console.log('Pet não encontrado');
    }
}

function getUserData() {
    const userId = localStorage.getItem('userId');
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    return formData.find(user => user && user.id == userId);
}



function updatePetData(currentPet) {
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    const user = getUserData();

    if (user && user.pets && currentPet) {
        const nome = document.getElementById('nome').value;
        const raca = document.getElementById('raca').value;
        const local = document.getElementById('local').value;
        const especie = document.getElementById('especie').value;
        const sexo = document.getElementById('sexo').value;
        const porte = document.getElementById('porte').value;
        const sobremim = document.getElementById('sobremim').value;

        const caracteristicas = [];
        const checkboxes = document.getElementsByName('caracteristicas');

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                caracteristicas.push(checkboxes[i].value);
            }
        }

        // Pega imagem do pet
        let imagemInput = document.getElementById('petFile_editar');
        let imagemFile = imagemInput.files[0];

        if (imagemFile) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let imagemDataUrl = event.target.result;

                currentPet.nome = nome;
                currentPet.raca = raca;
                currentPet.local = local;
                currentPet.especie = especie;
                currentPet.sexo = sexo;
                currentPet.porte = porte;
                currentPet.caracteristicas = caracteristicas;
                currentPet.sobremim = sobremim;
                currentPet.imagem = imagemDataUrl;

                user.pets.forEach((pet, i) => {
                    if (pet.id === currentPet.id) {
                        user.pets[i] = currentPet;
                        return;
                    }
                });

                formData.forEach((data, i) => {
                    if (data.id === user.id) {
                        formData[i] = user;
                        return;
                    }
                });

                localStorage.setItem('formData', JSON.stringify(formData));

                setTimeout(() => {
                    window.location.href = 'perfil_usuario.html';
                }, 500);
            };

            reader.readAsDataURL(imagemFile);
        } else {
            currentPet.nome = nome;
            currentPet.raca = raca;
            currentPet.local = local;
            currentPet.especie = especie;
            currentPet.sexo = sexo;
            currentPet.porte = porte;
            currentPet.caracteristicas = caracteristicas;
            currentPet.sobremim = sobremim;

            user.pets.forEach((pet, i) => {
                if (pet.id === currentPet.id) {
                    user.pets[i] = currentPet;
                    return;
                }
            });

            formData.forEach((data, i) => {
                if (data.id === user.id) {
                    formData[i] = user;
                    return;
                }
            });

            localStorage.setItem('formData', JSON.stringify(formData));
            setTimeout(() => {
                window.location.href = 'perfil_usuario.html';
            }, 500);
        }
    }
}
