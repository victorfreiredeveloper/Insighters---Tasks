// execution context
// scope chain
const v1 = 10;

const fn1 = function(){
    const v1 = 1000;

    const fn2 = function(){
        // const v1 = 15;
        //console.log(v1);

        const fn3 = function(){
            // const v1 = 18;
            //console.log(v1);
        }
        fn3();
    }
    fn2();
}
fn1();

const obj1 = {
    p1 : 10,
    getP1: function(){
        // Não funciona com o this
        // const fn1 = function(){
        //     return this.p1;
        // }
        
        // arrow function  
        const fn1 = () => {
            //this continua com a referencia do obj
            return this.p1
        }
        return fn1();
    }
};

console.log(obj1.getP1());

// error handling

const Rectangle = function (x,y) {
    this.x = x;
    this.y = y;
}

const rectangle = new Rectangle(10,2);

console.log(rectangle);