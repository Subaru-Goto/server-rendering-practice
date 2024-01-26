import express from "express";
import animalRouter from "./routes/animals.js";
import { landingPage } from "./components/landingPage.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/animals", animalRouter);

app.get("/", (req, res) => {
  res.send(landingPage());
});

app.listen(PORT,
   () => console.log(`You are listening to PORT ${PORT}`));