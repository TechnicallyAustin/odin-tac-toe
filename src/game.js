import { gameBoard } from "./board.js";
import { Player } from "./player.js";
import { newForm } from "./form.js";

export const game = (() => {
  let currentRound = 0;
 
  const gameStart = () => {
    const startButton = document.querySelector("#start-button");

    startButton.addEventListener("click", () => {
      const form = document.querySelector(".new-player-form");
      if (form === null) {
        newForm.createForm();
        newForm.legend();
        newForm.playerOne();
        newForm.playerTwo();
        newForm.submit();
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
    return game.playerOne;
  }; // creates Player One

  const playerTwo = () => {
    let playerTwo = document.querySelector("#player-two").value;
    const player = Player(playerTwo, "O");
    game.playerTwo = player;
    console.log(game.playerTwo.getName());
    return game.playerTwo;
  }; // creates Player Two

  const playRound = (marker, board, index, event) => {
    console.log(gameBoard.board);
    console.log(event);
    if (board[index] === "") {
      game.currentPlayer.add(marker, board, index, event);
    }
  };

  const turn = () => {
    if (game.currentRound === 9) {
      console.log("It's a Tie!");
    } else if (game.currentRound % 2 === 0) {
      game.currentPlayer = game.playerOne;
    } else {
      game.currentPlayer = game.playerTwo;
    }
    game.display();
    game.currentRound++;
    game.winner()
  }; // if the current round is divisible cleanly by 2 its playerOne's turn

  const display = () => {
    const displaySelector = document.querySelector(".player-display");
    if (game.currentRound === 9){
        displaySelector.textContent = `Winner is ...`
    }
    displaySelector.textContent = `${game.currentPlayer.getName()}. You are ${game.currentPlayer.getMarker()}`;
  };
  // takes an array as an argument to check win combos
  const winner = () => {
    gameBoard.winCombos(gameBoard.board)
  }; //declares a winner based on win combos and markers
  return {
    display,
    playerOne,
    playerTwo,
    playRound,
    turn,
    currentRound,
    gameStart,
    winner,
  };
})();
game.gameStart();
