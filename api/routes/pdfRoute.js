const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileUpload");
const pdfParse = require("pdf-parse");

router.use(fileUpload());


router.post("/", (req, res) => {
  console.log("inside upload route")
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  pdfParse(file).then(result => {
    console.log(result.text);
  })

  res.json({ fileName : file.name})
});

module.exports = router;
