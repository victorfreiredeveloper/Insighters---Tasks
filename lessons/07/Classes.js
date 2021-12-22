class Square{
    constructor(side){
        this.side = side;
    }
    toString(){
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }
    calculateArea(){
        return Math.pow(this.side,2)
    }

    static fromArea(area){
        return new Square(Math.sqrt(area))
    }
}

// instanciar --> Transformar em objeto
const square = new Square(6);

console.log(square.toString());
console.log(Square.fromArea(36));