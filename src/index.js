function generatePoem(event) {
  event.preventDefaut();

  new Typewriter("#poem", {
    strings: ["Hello world abcd "],
    autoStart: true,
    cursor: "",
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
