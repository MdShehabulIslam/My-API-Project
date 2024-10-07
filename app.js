const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.render("index", {
    joke: null,
    message: "Welcome! Click the button to get a joke.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
