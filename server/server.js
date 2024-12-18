import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.post("/formData", (req, res) => {
  const data = req.body;

  //! NODE.JS fs per gestire il file json:

  const filePath = path.join(__dirname, "formData.json");

  fs.readFile(filePath, "utf8", (err, fileData) => {
    let jsonData = [];

    if (!err && fileData) {
      jsonData = JSON.parse(fileData);
    }

    // pusha i dati all'array:
    jsonData.push(data);

    // L'array aggiornato viene scritto nel file:
    fs.writeFile(
      filePath,
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
