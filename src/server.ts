import express from "express";

const app = express();

app.get("/", (request, response) =>
  response.json({ message: "Hello Typescript" })
);

app.listen(3333, () => {
  console.log("Server startes on port 3333!");
});
