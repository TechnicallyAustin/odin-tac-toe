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
            return input
        }
        const submit = () => {
            const submit = form.appendChild(document.createElement("button"));
            submit.setAttribute("id", "");
            submit.setAttribute("class", "");
            submit.setAttribute("type", "submit");
            submit.textContent = "Start Game"
            return submit
        }

        return { form, createForm, legend, label, input, submit};
    })();
    return {newForm}
})();





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

            function playerForm(){
                game.newForm.createForm()
                game.newForm.legend()
                game.newForm.label()
                game.newForm.input()
                game.newForm.submit()
            };
            
            function setUp(){}
        })
    };
    return {board, renderBoard, events}
})();

gameBoard.events()

