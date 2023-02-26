// refactor Gam
// refactor Gameboard
// refactor Player

const game = (() => {
    const formContainer = document.querySelector(".name-form");
    let currentRound = 0

  const newForm = (() => {
    let form = null;
    const createForm = () => {
      console.log("form created");
      const playerForm = formContainer.appendChild(
        document.createElement("form")
      );
      playerForm.setAttribute("class", "new-player-form");
      form = playerForm;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let board = document.querySelector(".board");
        console.log("form submitted");

        game.playerOne();
        game.playerTwo();

        let players = [game.playerOne, game.playerTwo]
        let index = Math.floor(Math.random() * players.length)
        game.currentPlayer = players[index]
        game.display();

        // board validation
        if (board.children.length !== 0) {
          console.log("board exists");
        } else {
          gameBoard.renderBoard();
          gameBoard.events();
        }

        function clearForm() {
          form.reset();
        }
        clearForm(); // resets or deletes form.
      });
    };

    const legend = () => {
      const legend = form.appendChild(document.createElement("legend"));
      legend.setAttribute("class", "");
      return legend;
    };
    const playerOne = () => {
      const label = form.appendChild(document.createElement("label"));
      label.setAttribute("for", "player-one");
      label.setAttribute("class", "");
      label.textContent = "Player One Name";

      const input = form.appendChild(document.createElement("input"));
      input.setAttribute("class", "");
      input.setAttribute("id", "player-one");
      input.setAttribute("type", "text");
      input.setAttribute("required", "");
      return { playerOne };
    };

    const playerTwo = () => {
      const label = form.appendChild(document.createElement("label"));
      label.setAttribute("for", "player-two");
      label.setAttribute("class", "");
      label.textContent = "Player Two Name";

      const input = form.appendChild(document.createElement("input"));
      input.setAttribute("class", "");
      input.setAttribute("id", "player-two");
      input.setAttribute("type", "text");
      input.setAttribute("required", "");
      return { playerTwo };
    };

    const submit = () => {
      const submit = form.appendChild(document.createElement("button"));
      submit.setAttribute("id", "");
      submit.setAttribute("class", "");
      submit.setAttribute("type", "submit");
      submit.textContent = "Start Game";
      return submit;
    };

    return { form, createForm, legend, playerOne, playerTwo, submit };
  })();

  const gameStart = () => {
    const startButton = document.querySelector("#start-button");

    startButton.addEventListener("click", () => {
      const form = document.querySelector(".new-player-form");
      if (form === null) {
        game.newForm.createForm();
        game.newForm.legend();
        game.newForm.playerOne();
        game.newForm.playerTwo();
        game.newForm.submit();
      } else {
        console.log("form exists");
      }
    });
  };

  const playerOne = () => {
    let playerOne = document.querySelector("#player-one").value;
    const player = Player(playerOne, "X");
    game.playerOne = player;
    console.log(game.playerOne.getName());
    return game.playerOne 
  }; // creates Player One

  const playerTwo = () => {
    let playerTwo = document.querySelector("#player-two").value;
    const player = Player(playerTwo, "O");
    game.playerTwo = player;
    console.log(game.playerTwo.getName());
    return game.playerTwo
  }; // creates Player Two


const playRound = (marker, board, index, event) => {
    console.log(gameBoard.board)
    console.log(event)
    if (board[index] === "") {
        game.currentPlayer.add(marker, board, index, event)
        console.log(gameBoard.winCombos(gameBoard.board))
    }
}

  const turn = () => {
    if (game.currentRound === 9 ) {
        console.log("It's a Tie!")
    } else if (game.currentRound % 2 === 0){
        game.currentPlayer = game.playerOne
    } else {
        game.currentPlayer = game.playerTwo
    }
  game.display()
  console.log(gameBoard.winCombos(gameBoard.board)) // checks for a winner
  game.currentRound++
  }; // if the current round is divisible cleanly by 2 its playerOne's turn

  const display = () => {
    const display = document.querySelector(".player-display");
    display.textContent = `${game.currentPlayer.getName()}. You are ${game.currentPlayer.getMarker()}`;
  };


// takes an array as an argument to check win combos

  const winner = () => {}; //declares a winner based on win combos and markers.

  return {
    newForm,
    display,
    playerOne,
    playerTwo,
    playRound,
    turn,
    currentRound,
    gameStart,
    winner
  };
})();
game.gameStart()



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
            div.setAttribute("class", `board-item ${i} bg-warning col border fs-1 d-flex justify-content-center align-items-center`);
            div.textContent = board[i]
        }
    }; // renders the game baord
            
    const events = () => {
        const board = document.querySelector(".board")
        for (let i = 0; i < board.children.length; i++){
            let div = board.children[i]
            div.addEventListener("click", (event) => {
                const cell = event.target
                game.playRound(
                  game.currentPlayer.getMarker(),
                  gameBoard.board,
                  i,
                  cell
                ); // adds player marker to the board array
                //game.display()// adds player Marker to the Dom
            });
        }
    }; // contains logic for gameboard div events

     const winCombos = array => {

        // horizontal
          const combos = [
                [array[0], array[1], array[2]],
                [array[3], array[4], array[5]],
                [array[6], array[7], array[8]],
                // vertical
                [array[0], array[3], array[6]],
                [array[1], array[4], array[7]],
                [array[2], array[5], array[8]],
                // diagonal
                [array[0], array[4], array[8]],
                [array[2], array[4], array[6]]
            ]

            for (let i = 0; i < combos.length; i++){
                let win = combos[i]

          //     let winning = win.filter(element => element.every(item => item === "X"|"O")}

               if (winning) {
                console.log("Winner")
               }



            }
        }
    
    return {board, renderBoard, events, winCombos}
})();


// Player factory Funcion
const Player = (name, marker) => {
    const getMarker = () => {
        return marker
    }
    const add = (marker, board, index, event) => {
        console.log("marker", marker, "board", board,"index", index,"event", event)
        board[index] = marker
        event.textContent = marker
        game.turn()
        console.log(board)

    }; // adds the player marker to the selected board div
    const getName = () => {
        return name
    }; // given form input sets the name of the player.

  return { add, getName, getMarker};
};

const Computer = (marker) => {
    const name = () => {
        return "Computer"
    }

    const add = () => {} // automated Play but intelegently randomizing an array selection.

    const getMarker = () => {
        return "O"
    }

    return {name, add, getMarker}
};
