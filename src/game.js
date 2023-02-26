// needs access to Board
import {gameBoard} from "./board.js";
import { Player } from "./player.js";
import {newForm} from "./form.js";

console.log(gameBoard.board)



// needs access to Players
// needs access to Form

export const game = (() => {
  const formContainer = document.querySelector(".name-form");
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

  const form = () => {}

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
      console.log(gameBoard.winCombos(gameBoard.board));
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
    console.log(gameBoard.winCombos(gameBoard.board)); // checks for a winner
    game.currentRound++;
  }; // if the current round is divisible cleanly by 2 its playerOne's turn

  const display = () => {
    const display = document.querySelector(".player-display");
    display.textContent = `${game.currentPlayer.getName()}. You are ${game.currentPlayer.getMarker()}`;
  }
  // takes an array as an argument to check win combos
  const winner = () => {}; //declares a winner based on win combos and markers
  return {
    form,
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
