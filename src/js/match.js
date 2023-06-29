// Obtém o ID do usuário logado armazenado no localStorage
let userId = localStorage.getItem('userId');

// Obtém os dados do usuário do localStorage
let formData = JSON.parse(localStorage.getItem('formData')) || [];



function showAllPets() {
  const userData = JSON.parse(localStorage.getItem('formData'));
  const petsContainer = document.getElementById('container_pet');
  petsContainer.innerHTML = '';

  let isFirstItem = true;

  if (userData && userData.length > 0) {
    userData.forEach(user => {
      if (user && user.pets && user.pets.length > 0) {
        user.pets.forEach(pet => {
          const petCard = document.createElement('div');
          petCard.className = 'carousel-item' + (isFirstItem ? ' active' : '');
          isFirstItem = false;

          const petName = document.createElement('a');
          petName.textContent = pet.nome;
          petName.href = `perfil_pet.html?id=${pet.id}`;

          petCard.innerHTML = `
              <div class="content">
                <div class="card-pet">
                  <div class="image">
                    <img class="user" src="${pet.imagem}" alt="" />
                    <div class="profile">
                      <div class="name"> <a class="petCardLink" href="perfil_pet.html">${pet.nome}</a></button></div>
                      <div class="local">
                        <i class="fas fa-map-marker-alt"> ${pet.local}</i>
                        <div class="name">
                          <span class="badge text-bg-orange"> ${pet.especie} </span>
                          <span class="badge text-bg-orange"> ${pet.sexo} </span>
                          <span class="badge text-bg-orange"> ${pet.porte} </span>
                          <span class="badge text-bg-orange"> ${pet.raca} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons">
                  <div class="no">
                    <i class="fas fa-times"></i>
                  </div>
                  <div class="star">
                    <i class="fas fa-star fa"></i>
                  </div>
                  <div class="heart">
                    <i class="fas fa-heart"></i>
                  </div>
                </div>
              </div>
            `;

          petsContainer.appendChild(petCard);
        });
      }
    });
  } else {
    petsContainer.textContent = 'Nenhum pet cadastrado.';
  }
}

showAllPets();


// Realiza o logout do usuário
const logout = () => {
  // Remove os dados do usuário do localStorage
  localStorage.removeItem('userId');

  // Redireciona para a página de login
  window.location.href = 'login.html';
};

// Chame a função logout quando o usuário clicar no botão de logout
document.getElementById('btn-logout').addEventListener('click', logout);