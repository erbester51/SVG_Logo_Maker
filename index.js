const inquirer = require('inquirer');
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like your logo to say? (Only 3 characters allowed!)",
    },
    {
        type: "input",
        name: "textColor",
        message: "What would like the color of the text inside your logo to be? (This can be a keyword or a hexadecimal number).",
    },
    {
        type: "list",
        name: "Shape",
        message: "What shape would you like for your logo?",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What would like the background color of your logo to be? (This can be a keyword or a hexadecimal number).",
    },
];

inquirer.prompt(questions).then