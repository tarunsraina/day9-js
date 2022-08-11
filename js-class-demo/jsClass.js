class Rectangle{

    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
 
    }

    getArea(){
          return this.length * this.breadth;  
    }

    getName(){
        return "I am a rectangle"
    }
}

class Square{

    constructor(length,){
        this.length = length;
        
    }

    getArea(){
        return this.length * this.length;
    }

    getName(){
        return "I am a square";
    }
}

let rectangle = new Rectangle(10,20);
let square = new Square(20);
console.log(rectangle);
console.log(square);

console.log("Rectangle area :"+rectangle.getArea());
console.log("Square area :"+square.getArea());

console.log("Rectangle says:"+rectangle.getName());
console.log("Square says :"+square.getName());
