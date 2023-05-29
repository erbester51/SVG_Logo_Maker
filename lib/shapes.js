class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<polygon points="180, 20 10, 150 250, 160" fill="${this.shapeColor}" stroke-width="5"/>`
    }  
}

class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<x="50" y="10" rx="10" ry="10" width="30" height="30" fill="${this.shapeColor}/>`
    }
}

module.exports = {Circle, Triangle, Square};