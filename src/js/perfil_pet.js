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
    petImage.src = currentPet.urlImagem;

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