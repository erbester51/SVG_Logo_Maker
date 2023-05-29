
const { Circle, Triangle, Square } = require ("./shapes.js");

function generateSvg(data) {
    if (data.shape === Circle) {
        data.shape = new Circle(data.shapeColor);
    }
    else if (data.shape === Triangle) {
        data.shape = new Triangle(data.shapeColor);
    }
    else if (data.shape === Square); {
        data.shape = new Square(data.shapeColor);
    }

return `
<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg">
${data.shape.render()}
<text x="125" y="100" font-size="35" text-anchor="middle" fill="${data.textColor}">${data.title}</text>
</svg>
`
};

module.exports = generateSvg;