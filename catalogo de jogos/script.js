const games = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        image: "zelda.jpg",
        description: "An action-adventure game where you explore the vast open world of Hyrule."
    },
    {
        title: "Red Dead Redemption 2",
        image: "rdr2.jpg",
        description: "A western-themed action-adventure game set in the dying days of the American Wild West."
    },
    {
        title: "Minecraft",
        image: "minecraft.jpg",
        description: "A sandbox game where players build and explore blocky, procedurally generated 3D worlds."
    },
    {
        title: "Fortnite",
        image: "fortnite.jpg",
        description: "A battle royale game that pits 100 players against each other in a fight for survival."
    },
    {
        title: "Cyberpunk 2077",
        image: "cyberpunk.jpg",
        description: "An open-world RPG set in the dystopian Night City, filled with futuristic technology."
    }
];

const catalog = document.getElementById('game-catalog');

games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');

    gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h2>${game.title}</h2>
        <p>${game.description}</p>
    `;

    catalog.appendChild(gameCard);
});
