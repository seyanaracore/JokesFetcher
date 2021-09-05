import Api from "../utils/api.js";

function getJokes(amount = 10, lang = "en") {
  return Api.get(
    `https://v2.jokeapi.dev/joke/Any?lang=${lang}&amount=${amount}`
  );
}

export default getJokes;
