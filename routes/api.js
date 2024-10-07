const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/joke", async (req, res) => {
  try {

    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const jokeData = response.data;

    if (jokeData.flags.nsfw || jokeData.flags.explicit) {

      return res.render("index", {
        joke: null,
        message: "This joke is not suitable for display. Please try again.",
      });
    }
    res.render("index", { joke: jokeData, message: null });
  } catch (error) {
    console.error("Error fetching data from JokeAPI:", error);
    res.render("index", {
      joke: null,
      message: "Unable to retrieve joke. Please try again.",
    });
  }
});
module.exports = router;
