document.getElementById('game-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const developer = document.getElementById('developer').value;
    const publisher = document.getElementById('publisher').value;
    const platforms = document.getElementById('platform').value; 
    const releaseDate = document.getElementById('releaseDate').value;
    const description = document.getElementById('description').value;

});
async function fetchGames() {
    try {
        const response = await fetch('http://127.0.0.1:3000/api/games'); // Certifique-se de que a rota da API está correta
        if (!response.ok) {
            throw new Error('Erro ao buscar plantações');
        }
        const games = await response.json();
        const list = document.getElementById('games-list');
        list.innerHTML = '';
        games.forEach(p => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>${p.name}</h3>
                <h3>${p.developer}</h3>
                <h3>${p.publisher}</h3>
                <h3>${p.platforms}</h3>
                <h3>${p.releaseDate}</h3>
                <p>${p.description}</p>                
            `;
            list.appendChild(item);
        });
    } catch (error) {
        console.error('Erro ao carregar jogos:', error);
    }
}

fetchPlantations();