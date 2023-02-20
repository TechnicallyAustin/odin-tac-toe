// Single item = module
// multiple Items = factory

//save array inside gameBoard{}
// renderBoard()

// create name form

// players can add a marker to the board -- updates Dom -- move Validation

// 3 objects gameBoard{} player{} game{}

// checks when game is over
    // checks win combos
    // declareeres winer
    // updates display

const game = (() => {
    const formContainer = document.querySelector(".name-form")
    const newForm = () => {
        const form = () => {
            const form = formContainer.appendChild(document.createElement("form"))
            form.setAttribute("class", "new-player-form");
        }
        const legend = () => {
            
        }
        const label = () => {}
        const input = () => {}
        const submit = () => {}

    };

    
    return {createForm}
})();

game.createForm()

// gameboard module
const gameBoard = (() => {
    const board = [
        "","","",
        "","","",
        "","",""];
    const renderBoard = () => {
        const container = document.querySelector(".board")
        console.log(container)
        for (let i = 0; i < board.length; i ++){
            let div = container.appendChild(document.createElement("div"));
            div.setAttribute("class", `${i} bg-warning col border`);
            div.textContent = board[i]
        }
    };
    const events = () => {
        const startButton = document.querySelector("#start-button")
        startButton.addEventListener("click", ()=>{
        })
    };
    return {board, renderBoard, events}
})();

