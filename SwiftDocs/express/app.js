const express = require("express");
const mega = require("megajs");
const cors = require("cors");
const { Readable } = require("stream");
const app = express();
const port = 5000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());

const filesByName = [];

// MEGA credentials
const email = "nacreddinechouich0012@gmail.com";
const password = "gesE74py7IvXxCs6";

// Initialize MEGA client
const storage = new mega.Storage({ email, password }, (error) => {
  if (error) {
    console.log("Connection to MEGA failed!");
  } else {
    console.log("Connected to MEGA successfully!");
  }
});

// Handle file upload
app.post("/upload", async (req, res) => {
  // console.log(req.body)

  try {
    const { file, fileContent } = req.body;

    // Access file attributes
    const fileName = file.name;

    // Convert base64 content to buffer
    const buffer = Buffer.from(
      fileContent.replace(/^data:.*;base64,/, ""),
      "base64"
    );

    // Create a readable stream from the buffer
    const bufferStream = new Readable();
    bufferStream.push(buffer);
    bufferStream.push(null); // End the stream

    // Upload the file using megajs
    const uploadStream = storage.upload({
      name: fileName,
      size: buffer.length,
      parent: "test",
      Physical_location: file.Physical_location,
      Description: file.Description,
    });

    filesByName.push(fileName);
    // console.log("filesByName", filesByName);

    // Pipe the buffer stream to the upload stream
    bufferStream.pipe(uploadStream);

    // Listen for the completion event
    uploadStream.on("complete", (uploadedFile) => {
      console.log("The file was uploaded!", uploadedFile);
      res
        .status(200)
        .json({ message: "File uploaded and stored in MEGA successfully!" });
    });

    // Listen for the error event
    uploadStream.on("error", (error) => {
      console.error("Error uploading file to MEGA:", error);
      res
        .status(500)
        .json({ error: "An error occurred while uploading the file to MEGA." });
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the file upload." });
  }
});

// Rename File
app.put("/rename/:previousFileName", async (req, res) => {
  const { previousFileName } = req.params;
  const { newFileName } = req.body;

  try {
    // Find the file by its previous name
    // console.log(filesByName)
    // console.log("Searching for file:", previousFileName);

    // Find the file on Mega by its name
    const file = storage.root.children.find(
      (file) => file.name === previousFileName
    );

    if (!file) {
      return res.status(404).json({ error: "File not found on Mega" });
    }

    //   // Rename the file on Mega
    await file.rename(newFileName + ".pdf");

    return res.json({ message: "File renamed successfully" });
  } catch (error) {
    console.error("Error renaming file:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while renaming the file." });
  }
});

// Download File
app.get("/download/:fileName", async (req, res) => {
  const { fileName } = req.params;

  try {
    // Find the file on Mega by its name
    const file = storage.root.children.find((file) => file.name === fileName);

    if (!file) {
      return res.status(404).json({ error: "File not found on Mega" });
    }

    // Set the response headers for downloading
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}.pdf"` 
    );
    res.setHeader("Content-Type", "application/octet-stream");

    // Create a readable stream for downloading the file
    const downloadStream = file.download();

    // Pipe the file stream to the response
    downloadStream.pipe(res);

    // Listen for errors
    downloadStream.on("error", (error) => {
      console.error("Error downloading file:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while downloading the file." });
    });
  } catch (error) {
    console.error("Error finding file:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while finding the file on Mega." });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
