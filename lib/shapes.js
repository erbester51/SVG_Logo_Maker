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
        return `<polygon points="180, 20 10, 150 250, 160" fill="${this.shapeColor}"/>`
    }  
}

class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        
    }
}

class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
    }
}