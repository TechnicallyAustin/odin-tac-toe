import { game } from "./game.js";
import { Player } from "./player.js";

export const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""]; // defines the gameboard as an empty array

  const renderBoard = () => {
    const container = document.querySelector(".board");
    console.log(container);
    for (let i = 0; i < board.length; i++) {
      let div = container.appendChild(document.createElement("div"));
      div.setAttribute(
        "class",
        `board-item ${i} bg-warning col border fs-1 d-flex justify-content-center align-items-center`
      );
      div.textContent = board[i];
    }
  }; // renders the game baord

  const events = () => {
    const board = document.querySelector(".board");
    for (let i = 0; i < board.children.length; i++) {
      let div = board.children[i];
      div.addEventListener("click", (event) => {
        const cell = event.target;
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

  const winCombos = (array) => {
     const displaySelector = document.querySelector(".player-display");
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
      [array[2], array[4], array[6]],
    ];


    for (let combo of combos){
        if (combo.every(item => item === "X")){
            console.log("true", combo)
            displaySelector.textContent = `${game.playerOne.getName()} Wins!`


        } else if (combo.every(item => item === "O")){
            console.log("true", combo)
            displaySelector.textContent = `${game.playerTwo.getName()} Wins!`
        }
    }
  };

  return { board, renderBoard, events, winCombos };
})();
