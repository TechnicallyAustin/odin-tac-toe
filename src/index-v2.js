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
    const newForm = (() => {
        let form = null
        const createForm = () => {
            console.log("form created")
            const playerForm = formContainer.appendChild(document.createElement("form"))
            playerForm.setAttribute("class", "new-player-form");
            playerForm.addEventListener("submit", (event) => {
                event.preventDefault()
            })
            form = playerForm
        }
        const legend = () => {
            const legend = form.appendChild(document.createElement("legend"));
            legend.setAttribute("class", "")
            return legend
        }
        const label = () => {
            const label = form.appendChild(document.createElement("label"))
            label.setAttribute("for", "player-name")
            label.setAttribute("class","")
            label.textContent = "Enter your Name!"
            return label
        }
        const input = () => {
            const input = form.appendChild(document.createElement("input"));
            input.setAttribute("class", "")
            input.setAttribute("id","player-name")
            input.setAttribute("type", "text")
            input.setAttribute("required", "")
            return input
        }
        const submit = () => {
            const submit = form.appendChild(document.createElement("button"));
            submit.setAttribute("id", "");
            submit.setAttribute("class", "");
            submit.setAttribute("type", "submit");
            submit.textContent = "Start Game"

            submit.addEventListener("click", ()=>{
                console.log("form submitted")
                gameBoard.renderBoard()
                gameBoard.events()

            })
            return submit
        }

        return { form, createForm, legend, label, input, submit};
    })();

    const display = (() => {

    })
    return {newForm, display}
})();

const player = (name, marker) => {}





// gameboard module
const gameBoard = (() => {
    const board = [
        "","","",
        "","","",
        "","",""]; // defines the gameboard as an empty array

    const renderBoard = () => {
        const container = document.querySelector(".board")
        console.log(container)
        for (let i = 0; i < board.length; i ++){
            let div = container.appendChild(document.createElement("div"));
            div.setAttribute("class", `${i} bg-warning col border`);
            div.textContent = board[i]
        }
    }; // renders the game baord

    const gameForm = () => {
        game.newForm.createForm()
        game.newForm.legend()
        game.newForm.label()
        game.newForm.input()
        game.newForm.submit()
    }; // organizes form creation methods

    
    const gameStart = () => {
            const startButton = document.querySelector("#start-button");
            startButton.addEventListener("click", ()=>{
                gameForm()
            })
        }; // calls gameForm 
        gameStart()

    const events = () => {
        const board = document.querySelector(".board");

        for (let i = 0; i < board.children.length; i++){
            let div = board.children[i]
            div.addEventListener("click", () => {
                console.log("add player marker here")
                console.log("board location", `${i}`)
            })
        }
    }; // contains logic for gameboard div events
    
    
    return {board, renderBoard, gameForm, events}
})();


