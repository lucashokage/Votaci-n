fetch('database.json')
  .then(response => response.json())
  .then(data => {
    const categories = data.categories;
    const categoriesList = document.getElementById('categories-list');

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

    document.querySelectorAll('.option button').forEach(button => {
      button.addEventListener('click', (e) => {
        const categoryId = e.target.dataset.categoryId;
        const optionId = e.target.dataset.optionId;
        console.log(`Votaste por la opción ${optionId} de la categoría ${categoryId}`);
      });
    });

    document.querySelectorAll('.option img').forEach(img => {
      img.addEventListener('click', (e) => {
        const categoryId = e.target.parentNode.querySelector('button').dataset.categoryId;
        const optionId = e.target.parentNode.querySelector('button').dataset.optionId;
        console.log(`Votaste por la opción ${optionId}
