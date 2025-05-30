import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var brandName="";

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

function brandNameGen(req, res, next) {
  console.log(req.body);
  brandName = req.body["street"] + req.body["pet"];
  next();
};

app.use(brandNameGen);

app.post("/submit", (req, res) => {
  console.log("Form submitted:", req.body);
  res.send(`<h1>Form submitted successfully!</h1><p>Data: ${JSON.stringify(req.body)}</p>`);
}
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
