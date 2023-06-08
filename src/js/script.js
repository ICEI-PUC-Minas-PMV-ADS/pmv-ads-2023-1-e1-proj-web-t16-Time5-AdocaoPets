



function addPet() {
  const nome = document.getElementById('nome').value;
  const raca = document.getElementById('raca').value;
  const local = document.getElementById('local').value;
  const especie = document.getElementById('especie').value;
  const sexo = document.getElementById('sexo').value;
  const porte = document.getElementById('porte').value;


  // Obtem o elemento de input de arquivo para a imagem
  const inputImagem = document.getElementById('petFile');
  const imagemSelecionada = inputImagem.files[0];

  // Crie um objeto URL para a imagem selecionada
  const urlImagem = URL.createObjectURL(imagemSelecionada);

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

    const pets = JSON.parse(localStorage.getItem('pets')) || [];

    pets.push({
      nome,
      raca,
      local,
      especie,
      sexo,
      porte,
      caracteristicas,
      urlImagem,
      sobremim
    });

    localStorage.setItem('pets', JSON.stringify(pets));

    // Exibe a imagem do pet no perfil
    const imagemPet = document.getElementById('imagem_pet');
    imagemPet.src = urlImagem;

    showPets();
    showPetsCard();
    msgSuccess.setAttribute('style', 'display: block');
    msgError.setAttribute('style', 'display: none');

    setTimeout(() => {
      window.location.href = 'perfil_usuario.html';
    }, 500);
  }
}

function deletePet(index) {
  const pets = JSON.parse(localStorage.getItem('pets'));

  pets.splice(index, 1);

  localStorage.setItem('pets', JSON.stringify(pets));

  showPets();
  showPetsCard();

}

function showPets() {
  const pets = JSON.parse(localStorage.getItem('pets')) || [];

  const html = pets.map((pet, index) => `
      <tr>
        <td>${pet.nome}</td>
        <td>${pet.raca}</td>
        <td>${pet.local}</td>
        <td>${pet.especie}</td>
        <td>${pet.sexo}</td>
        <td>${pet.porte}</td>
        <td>${pet.caracteristicas}</td>
        <td>${pet.sobremim}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${index})">Excluir</button></td>
      </tr>
    `).join('');

  document.getElementById('pets-table-body').innerHTML = html;
}

function showPetsCard() {
  const pets = JSON.parse(localStorage.getItem('pets')) || [];

  const petsCard = document.getElementById('petsCard');
  petsCard.innerHTML = '';

  pets.forEach((pet, index) => {
    const card = document.createElement('div');
    card.classList.add('col-md-2');
    card.innerHTML = `
      <div class="row">
        <img id="imagem_pet" src="${pet.urlImagem}" / class="img-fluid">
        <span class="mt-2 badge text-bg-orange">${pet.nome}</span>
      </div>
      <div class="btn_petContainer">
      <td><button class="btn_pet" onclick="showPetProfile(${index})">Ver</span></button></td>
      <td><button class="btn_pet" onclick="deletePet(${index})">Excluir</button></td>
      </div>
    `;

    petsCard.appendChild(card);
  });
}



showPets();
showPetsCard();

function showPetProfile(index) {
  const pets = JSON.parse(localStorage.getItem('pets')) || [];
  const pet = pets[index];

  localStorage.setItem('currentPet', JSON.stringify(pet));

  window.location.href = 'perfil_pet.html';
}






