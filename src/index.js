const gameboard = (() => {
  const board = [
    "A","","",
    "","","",
    "","",""]
  
    // set the game board to an array.

  const renderBoard = () => {
    const container = document.querySelector(".board")
    for (let i = 0; i < board.length; i++){
        let div = container.appendChild(document.createElement("div"));
        div.setAttribute("class", "w-25 h-25 bg-warning")
        div.textContent = board[i]
    }
    return {renderBoard}
  }; // creates DOM Elements for the board

  const events = () => {}; // creates event listeners for each DOM element

  console.log(board)
  return {board, renderBoard, events}
}) ();


const player = (name, marker) => {
  //const marker = () => {} // assigns an X or O marker to the player
  const changeMarker = () => {} // // changes player marker form default
  const playerName = () => {} // sets player name
  const add = () => {}; // fills in the selected array Dom element with player.marker
};
const game = (() => {
  const start = () => {
    const button = document.querySelector(".start-button");
    console.log(button);
    button.addEventListener("click", () => {
      console.log("click");
      game.nameForm();
      // creates Name Form
    })}; // creates a start button that will call the Player name function -- starts the game
  // refactor this into a module only create one form.
  const nameForm = () => {
    const container = document.querySelector(".name-form");

    if (document.querySelector(".new-player") !== null) {
      console.log("form exists");
    } else {
      const form = container.appendChild(document.createElement("form"));
      form.setAttribute(
        "class",
        "new-player d-flex flex-column justify-content-around align-items-start container w-100 h-100"
      );

      const formLabel = () => {
        const label = form.appendChild(document.createElement("label"));
        label.setAttribute("class", "form-label");
        label.setAttribute("for", "player-name");
        label.textContent = "Name";
        return { formLabel };
      };

      const formInput = () => {
        input = form.appendChild(document.createElement("input"));
        input.setAttribute("id", "player-name");
        input.setAttribute("class", "w-100 h-25");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Your name");
        input.setAttribute("required", "");
       return { formInput };
      };

      const formSubmit = () => {
        const submit = form.appendChild(document.createElement("input"));
        submit.setAttribute("type", "submit");
        submit.setAttribute("class", "w-75");
        submit.setAttribute("id", "submit-name");
        submit.setAttribute("value", "Add Name");
    

        submit.addEventListener("submit", (event) => {
          event.preventDefault();
          console.log("form submitted");
          gameboard.renderBoard()
          // assigns player name and Marker based on Form
          // Populates the Dom with the Gameboard
          // creates Events to play the game.
          // ... continued game logic
        });
        return { formSubmit };
      };
      formLabel()
      formInput()
      formSubmit()
      
      return { formLabel, formInput, formSubmit };
    }; // creates a form that requests the user name
  }






  const winCombos = () => {}; // assigns win combinations for the game to evaluate a winner
  const rounds = () => {}; // assigns a total number of rounds the game should iterate for.
  const winner = () => {}; // given win combinations and the total number of rounds, evaluates a winner
  const end = () => {}; //
  const displayWinner = () => {}; // updates the game display with the winner of the game.

  return { start, nameForm };
})();

game.start();

// test commit 1
