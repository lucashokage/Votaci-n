let votes = {};

// Función para obtener los votos actuales
function getVotes() {
  return votes;
}

// Función para agregar un voto
function addVote(categoryId, optionId) {
  if (!votes[categoryId]) {
    votes[categoryId] = {};
  }
  if (!votes[categoryId][optionId]) {
    votes[categoryId][optionId] = 0;
  }
  votes[categoryId][optionId]++;
  saveVotes();
}

// Función para guardar los votos en un archivo
function saveVotes() {
  const votesJson = JSON.stringify(votes);
  localStorage.setItem('votes', votesJson);
}

// Función para cargar los votos desde un archivo
function loadVotes() {
  const votesJson = localStorage.getItem('votes');
  if (votesJson) {
    votes = JSON.parse(votesJson);
  }
