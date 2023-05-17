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
        name: "Color",
        message: "What would like the color of your logo to be?",
    },
    {
        
    }
];