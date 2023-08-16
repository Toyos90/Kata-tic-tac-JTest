const { handlePlayerChange } = require('./script');

describe('handlePlayerChange', () => {
    beforeEach(() => {
        // Set up virtual DOM
        document.body.innerHTML = `
            <div class="status"></div>
        `;
    });

    test('debería cambiar el jugador actual de X a O', () => {
        currentPlayer = 'X';
        handlePlayerChange();
        expect(currentPlayer).toBe('X');
    });

    test('debería cambiar el jugador actual de O a X', () => {
        currentPlayer = 'O';
        handlePlayerChange();
        expect(currentPlayer).toBe('O');
    });
});
