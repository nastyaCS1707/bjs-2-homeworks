function parseCount(count) {
    let parsed = Number.parseFloat(count);
    if(Number.isNaN(parsed)){
        throw new Error("Невалидное значение");
    }else {
        return parsed;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error){
        return error;
    }
}



class Triangle {
    constructor (side1, side2, side3){
        if(side1+side2 <= side3 || side2+side3 <= side1 || side1+side3 <= side2) {
            throw new Error("Треугольник с такими сторонами не существует");
        }else {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        }
    }

    get perimeter(){
        return this.side1 + this.side2 + this.side3;
    }

    get area (){
        let p = this.perimeter / 2;
        let S = Math.sqrt(p * (p - this.side1) * (p - this.side2) *(p - this.side3));
        return Number(S.toFixed(3));
    }
}

function getTriangle(side1, side2, side3){
    try{
        return new Triangle(side1, side2, side3);
    }catch (error){
        return {
            get area() {
            return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
            return "Ошибка! Треугольник не существует";
            }
        };
    }
}
