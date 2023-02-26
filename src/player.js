import { game } from "./game.js";
import { gameBoard } from "./board.js";


export const Player = (name, marker) => {
  const getMarker = () => {
    return marker;
  };
  const add = (marker, board, index, event) => {
    console.log(
      "marker",
      marker,
      "board",
      board,
      "index",
      index,
      "event",
      event
    );
    board[index] = marker;
    event.textContent = marker;
    game.turn();
    console.log(board);
  }; // adds the player marker to the selected board div
  const getName = () => {
    return name;
  }; // given form input sets the name of the player.

  return { add, getName, getMarker };
};

