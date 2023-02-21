const header = (() => {
  const create = () => {
    const newHeader = document.body.appendChild(
      document.createElement("header")
    );
    newHeader.setAttribute(
      "class",
      "header bg-primary container-fluid d-flex justify-content-center align-items-center"
    );
    this.head = newHeader;
    return this.head;
  };
  const nav = () => {
    console.log(this.head);
    const navbar = this.head.appendChild(document.createElement("nav"));
    navbar.setAttribute("class", "nav");
    this.nav = navbar;
    return this.nav;
  };
  const title = () => {
    const navTitle = this.nav.appendChild(document.createElement("h1"));
    navTitle.setAttribute("class", "title text-white");
    navTitle.textContent = "Tic Tac Toe";
  };
  return { create, nav, title };
})(); // creates the header element. creates a nav element. creates a page title.
const main = (() => {
  const create = () => {
    const newMain = document.body.appendChild(document.createElement("main"));
    newMain.setAttribute("class", "main bg-secondary w-100 d-flex");
    this.main = newMain;
    return this.main;
  };
  const aside = () => {
    const newAside = this.main.appendChild(document.createElement("aside"));
    newAside.setAttribute(
      "class",
      "aside bg-secondary d-flex flex-column justify-content-around align-self-start align-items-center col-3 h-50 "
    );
    this.aside = newAside;
    return this.aside;
  };
  const start = () => {
    const button = this.aside.appendChild(document.createElement("button"));
    button.setAttribute("class", "start-button w-75 h-25 bg-dark text-white");
    button.setAttribute("id", "start-button");
    button.setAttribute("value", "Start");
    button.textContent = "Start";

    const name = this.aside.appendChild(document.createElement("div"));
    name.setAttribute("class", "name-form w-75 h-25");
  };
  const section = () => {
    const newSection = this.main.appendChild(document.createElement("section"));
    newSection.setAttribute(
      "class",
      "game-container bg-secondary col-9 d-flex flex-column justify-content-around align-items-center"
    );
    this.section = newSection;
    return this.section;
  };
  const article = () => {
    const game = this.section.appendChild(document.createElement("article"));
    game.setAttribute(
      "class",
      "board bg-secondary row row-cols-3 h-75 w-100 bg-dark"
    );
  };
  const display = () => {
    const gameDisplay = this.section.appendChild(document.createElement("div"));
    gameDisplay.setAttribute(
      "class",
      "display w-100 h-25 bg-light d-flex justify-content-center align-items-center"
    );
    const playerDisplay = gameDisplay.appendChild(document.createElement("h2"))
    playerDisplay.setAttribute("class", "player-display")
    this.display = playerDisplay;
  };
  const text = () => {
    let message = this.display.appendChild(document.createElement("h2"));
    message.setAttribute("class", "winner-text");
    message.textContent = "";
    this.text = message;
    return this.text;
  };
  return { create, aside, start, section, article, display, text };
})(); // creates a main element. creates a section element, creates an aside element. creates a start button.
const footer = (() => {
  const create = () => {
    const newFooter = document.body.appendChild(
      document.createElement("footer")
    );
    newFooter.setAttribute(
      "class",
      "footer bg-primary container-fluid d-flex justify-content-center align-items-center"
    );
    this.footer = newFooter;
  };

  const info = () => {
    const info = this.footer.appendChild(document.createElement("h4"));
    info.setAttribute("class", "footer-info text-white");
    info.textContent = "Tecnically Austin";
  };

  return { create, info };
})(); // creates the footer. creates footer text

// creates header elements
header.create();
header.nav();
header.title();

// creates main elements
main.create();
main.aside();
main.start();
main.section();
main.display();
main.article();
main.text();

// creates footer elements
footer.create();
footer.info();
