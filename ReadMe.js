/*
File Management System Documentation
====================================
This documentation outlines the functionalities and usage of the Node.js File Management System project.

Overview
========
The File Management System is a simple Node.js application that provides basic file management 
functionalities through a web interface. It allows users to create files dynamically and view a 
list of all files stored in a specific directory.

Technologies Used
==================
Node.js: A JavaScript runtime used for server-side scripting.
Express.js: A web application framework for Node.js used to handle routing and middleware.
File System (fs): Node.js built-in module used for file operations.
Path: Node.js built-in module used for handling file paths.

Setup and Installation
======================
Clone the repository or download the project files.
Navigate to the project directory in the terminal.
Install dependencies by running npm install.
Start the server by running node app.js or npm start.

Usage
=====
Once the server is running, you can access the application through a web browser. 
By default, the server runs on port 3000.

Home Page: Navigate to http://localhost:3000/ to access the home page. 
Here, you will find links to the available APIs:

API 1: /createFile - Create a new file.
API 2: /getAllFiles - View all files.
Create File API: Accessing /createFile will generate a new file with a unique filename (timestamp) containing the current date and time as its content. The file will be stored in the specified location.

Get All Files API: Accessing /getAllFiles will retrieve a list of all files stored in the specified location. The list will be displayed in an HTML format on the web page.

Project Structure
=================
NodeJsTaskOne.js: The main entry point of the application containing the server setup and route definitions.
styles.css: CSS file for styling the HTML pages.
dataBase/: Directory where the created files are stored.

Dependencies
============
express: Web framework for Node.js.
fs: Built-in module for file system operations in Node.js.
path: Built-in module for handling file paths in Node.js.

Server Configuration
====================
The server is configured to listen on either the specified port in the environment 
variable PORT 

Conclusion
==========
The File Management System project provides a simple yet effective way to 
perform basic file operations through a web interface using Node.js and Express.js. 
It can be further extended and customized based on specific requirements.
*/