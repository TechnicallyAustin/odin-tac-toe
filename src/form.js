import { Player } from "./player.js";
import { gameBoard } from "./board.js";
import { game } from "./game.js";

export const newForm = (() => {
  let form = null;
  const createForm = () => {
    const formContainer = document.querySelector(".name-form");
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

      let players = [game.playerOne, game.playerTwo];
      let index = Math.floor(Math.random() * players.length);
      game.currentPlayer = players[index];
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
