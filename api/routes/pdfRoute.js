const express = require('express');
const router = express.Router();
const fileUpload = require("express-fileUpload");
const pdfParse = require("pdf-parse");

router.post("/extract-text", (req, res) => {
  if (!req.files && ! req.files.pdfFile) {
    res.status(400);
    res.end();
  }

  pdfParse(req.files.pdfFile).then(result => {
    res.send(result.text);
  });
});

module.exports = router;