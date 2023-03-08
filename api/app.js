const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: A Short History of Nearly Everything",
    },
    {
      id: "2",
      title: "Game Review: Alone in the dark",
    },
    {
      id: "3",
      title: "Show Review: Last of us",
    },
    {
      id: "4",
      title: "Show Review: 24",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
