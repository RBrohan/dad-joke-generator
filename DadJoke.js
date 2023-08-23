const btn = document.querySelector(".btn");

const paragraphTag = document.querySelector("#joke");

const API_KEY = "f11SQioxXk/flbdGUonN7A==kUSfDlAJE08EZXra";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const getJokes = async () => {
  try {
    paragraphTag.innerText = "Getting joke...";

    btn.disabled = true;
    btn.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btn.disabled = false;
    btn.innerText = "Tell me a joke!";

    paragraphTag.innerText = data[0].joke;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", getJokes);
