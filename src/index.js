function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    speed: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "0b9403b26eb5tfao06ad1ab04e3ae066";
  let context = "You are an AI poetry assistant";
  let prompt = `Write a short nature-themed poem about ${instructionsInput.value}. Make sure that it is a haiki poem and it follows the user instructions. Please only include the poem, no additional text or code visible, except for a title. Use HTMl formatting and saparate each line with a <br />, use a single line for each line of the poem`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  // call API
  axios.get(apiURL).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
