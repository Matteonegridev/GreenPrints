import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;

  //! NODE.JS fs per gestire il file json:
  fs.readFile("formData.json", "utf8", (err, fileData) => {
    let jsonData = [];

    if (!err && fileData) {
      jsonData = JSON.parse(fileData);
    }

    // pusha i dati all'array:
    jsonData.push(data);

    // L'array aggiornato viene scritto nel file:
    fs.writeFile(
      "formData.json",
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
          return res
            .status(500)
            .send({ status: "error", message: "Failed to save data" });
        }

        console.log("Data saved to data.json");
        res.status(200).send({ status: "received", data });
      },
    );
  });
});

app.listen(5000, () => console.log("app is running"));
