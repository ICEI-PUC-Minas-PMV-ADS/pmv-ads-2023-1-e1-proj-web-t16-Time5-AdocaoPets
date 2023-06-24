function showPets() {
    // Obtém os dados dos pets do LocalStorage
    const pets = JSON.parse(localStorage.getItem('pets')) || [];

    // Obtém o elemento que conterá os pets
    const petsContainer = document.getElementById('petsContainer');

    // Limpa o conteúdo atual do container de pets
    petsContainer.innerHTML = '';

    // Itera sobre os pets e cria os elementos correspondentes
    pets.forEach((pet) => {
        // Cria o elemento do item do carrossel
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        petsContainer.appendChild(carouselItem);

        // Cria o elemento do conteúdo do item
        const content = document.createElement('div');
        content.className = 'content';
        carouselItem.appendChild(content);

        // Cria o elemento do card do pet
        const card = document.createElement('div');
        card.className = 'card';
        content.appendChild(card);

        // Cria o elemento do usuário
        const user = document.createElement('div');
        user.className = 'user';
        card.appendChild(user);

        // Cria a imagem do pet
        const imgPet = document.createElement('img');
        imgPet.className = 'user';
        imgPet.src = pet.urlImagem;
        imgPet.alt = '';
        user.appendChild(imgPet);

        // Cria o elemento do perfil do pet
        const profile = document.createElement('div');
        profile.className = 'profile';
        user.appendChild(profile);

        // Cria o elemento do nome do pet
        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = pet.nome;
        profile.appendChild(name);

        // Cria o elemento do local do pet
        const local = document.createElement('div');
        local.className = 'local';
        local.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${pet.local}`;
        profile.appendChild(local);

        // Cria os botões
        const buttons = document.createElement('div');
        buttons.className = 'buttons';
        content.appendChild(buttons);

    })
};

//showPets();