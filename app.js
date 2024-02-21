const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const location = "database";

// Serve static files from the "NodeJs Task" folder
app.use(express.static(path.join(__dirname, "NodeJS Task")));

// Routes
app.get("/", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to File System</title>
            <link rel="stylesheet" href="/styles.css"> <!-- Link to your CSS file -->
        </head>
        <body>
            <h1>Welcome to File System</h1>
            <h2>API 1: <a href="/createFile">/createFile</a></h2>
            <h2>API 2: <a href="/getAllFiles">/getAllFiles</a></h2>
        </body>
        </html>
    `);
});

app.get("/createFile", (req, res) => {
    const currentDate = new Date();
    const fileName = `${currentDate.getTime()}.txt`;
    const filePath = path.join(location, fileName);
    
    fs.writeFile(filePath, currentDate.toString(), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error creating file");
        } else {
            console.log("File created:", fileName);
            res.status(200).send(`File "${fileName}" created successfully in folder "${location}"`);
        }
    });
});

app.get("/getAllFiles", (req, res) => {
    fs.readdir(location, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading directory");
        } else {
            // Generate the HTML with the file list dynamically
            const fileListItems = files.map(file => `<li>${file}</li>`).join('');
            const htmlResponse = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>All Files</title>
                    <link rel="stylesheet" href="/styles.css"> <!-- Link to your CSS file -->
                </head>
                <body>
                    <h1>All Files</h1>
                    <ul class="card">
                        ${fileListItems}
                    </ul>
                    <a href="/">Back to Home</a>
                </body>
                </html>
            `;
            res.status(200).send(htmlResponse);
        }
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
