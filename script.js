import { addVote, getVotes } from './votos.js';

// Cargar las categorías y opciones desde el archivo database.json
fetch('database.json')
  .then(response => response.json())
  .then(data => {
    const categories = data.categories;
    const categoriesList = document.getElementById('categories-list');

    // Mostrar las categorías y opciones en la página
    categories.forEach(category => {
      const categoryElement = document.createElement('li');
      categoryElement.classList.add('category');
      categoryElement.innerHTML = `
        <h2>${category.name}</h2>
        <ul>
          ${category.options.map(option => `
            <li class="option">
              <img src="${option.image}" alt="${option.name}">
              <button data-category-id="${category.id}" data-option-id="${option.id}">Votar</button>
            </li>
          `).join('')}
        </ul>
      `;
      categoriesList.appendChild(categoryElement);
    });

    // Agregar un evento de clic a cada botón de votación
    document.querySelectorAll('.option button').forEach(button => {
      button.addEventListener('click', (e) => {
        const categoryId = e.target.dataset.categoryId;
        const optionId = e.target.dataset.optionId;
        addVote(categoryId, optionId);
      });
    });
  });

// Mostrar los votos actuales
function showVotes() {
  const votes = getVotes();
  console.log(votes);
}

showVotes();
