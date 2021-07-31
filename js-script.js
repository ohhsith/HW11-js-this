console.log('#3')

let counter = { 
    a: 0, 
    
    up(){
        this.a++;


    },
    down(){
        this.a--;
    },
    showStep(){
        return this.a;
    },
}

counter.up();
counter.up();
console.log(counter.showStep()) //result 2
counter.down();
console.log(counter.showStep()) //result 1



console.log('#4')



function Calculator() {
    this.sum = function(x){

        return function sum1(y) {
            return x + y;
        }
        
    },
    
     this.multiply = function(x){
    
        return function multiply1(y) {
            return x * y;
        }
        
    }
    
    this.subtract = function(x) {
    
        return function subtract1(y) {
            return x - y;
        }
        
    }
    
    this.divide = function(x) {
    
        return function divide1(y) {
            return x / y;
        }
        
    }
}


let calculator = new Calculator();
console.log(calculator.sum(1)(2)); // результат 3