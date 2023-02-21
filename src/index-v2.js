const game = (() => {
    const formContainer = document.querySelector(".name-form")
    const newForm = (() => {
        let form = null
        const createForm = () => {
            console.log("form created")
            const playerForm = formContainer.appendChild(document.createElement("form"))
            playerForm.setAttribute("class", "new-player-form");
            form = playerForm

            form.addEventListener("submit", (event) =>{
                event.preventDefault();
                let name = document.querySelector("#player-name").value
                console.log("from form", name)

                const newPlayer = Player(name, "X")
                console.log("form", newPlayer.getName(), newPlayer.getMarker())

                   console.log("form submitted");

                   gameBoard.renderBoard();
                   gameBoard.events();



            })
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
            return submit
        }

        return { form, createForm, legend, label, input, submit};
    })();

    const gameStart = () => {
      const startButton = document.querySelector("#start-button");

      
      startButton.addEventListener("click", () => {
          const form = document.querySelector(".new-player-form")
          if (form === null){
              game.newForm.createForm();
              game.newForm.legend();
              game.newForm.label();
              game.newForm.input();
              game.newForm.submit();
          } else {console.log("form exists")};
            
      });
    };

    const display = (() => {
        // sets the display to the name of the current player
    })

    const winCombos = (() => {
        const wins = (array) => {
            [ // horizontal
              [array[0], array[1], array[2]],
              [array[3], array[4], array[5]],
              [array[6], array[7], array[8]],
              // vertical
              [array[0], array[3], array[6]],
              [array[1], array[4], array[7]],
              [array[2], array[5], array[8]],
              // diagonal
              [array[0], array[4], array[8]],
              [array[2], array[4], array[6]],
            ];
        };
        return { wins}
    })(); // takes an array as an argument to check win combos

    const winner = () => {
    } //declares a winner based on win combos and markers.

    const round = () => {} // returns the current round.

    return {newForm, display, winCombos, gameStart, winner, round}
})();
game.gameStart()

// Playere factory Funcion

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
            
        const events = () => {
            const board = document.querySelector(".board")
            for (let i = 0; i < board.children.length; i++){
                let div = board.children[i]
                div.addEventListener("click", () => {
                    console.log("add player marker here")
                    console.log("board location", `${i}`)
            })
        }
    }; // contains logic for gameboard div events
    
    return {board, renderBoard, events}
})();


// Playere factory Funcion
const Player = (name, marker) => {
    const getMarker = () => {
        console.log(marker)
        return marker
    }
    const add = () => {
        console.log("added");
    }; // adds the player marker to the selected board div
    const getName = () => {
        console.log(name)
        return name
    }; // given form input sets the name of the player.

  return { add, getName, getMarker};
};