document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#game-menu button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            loadGame(this.id.replace('play-', ''));
        });
    });
});

function loadGame(gameName) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; 

    let gameURL = '';
    switch (gameName) {
        case 'wordle':
            gameURL = '<iframe id="wordle" src="https://wordlegame.org/" width="600" height="800" frameborder="0"></iframe>';
            break;
        case 'flappybird':
            gameURL = '<iframe id="flappybird" src="https://flappybird.io/" width="600" height="800" frameborder="0"></iframe>';
            break;
        case '2048':
            gameURL = '<iframe id="2048" src="https://play2048.co/" width="600" height="800" frameborder="0"></iframe>';
            break;
        case 'minesweeper':
            gameURL = '<iframe id="msweeper" src="https://msweeper.github.io/" width="600" height="800" frameborder="0"></iframe>';
            break;
        case 'connections':
            gameURL = '<iframe id="msweeper" src="https://connectionsgame.org/" width="600" height="800" frameborder="0"></iframe>';
    }

    gameContainer.innerHTML = gameURL;
}
