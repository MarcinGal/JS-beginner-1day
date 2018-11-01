function sleep() {
    return `I'm sleepy`;
}

console.log(sleep());


const sum = function (a, b) {
    return `Sum of ${a} and ${b} is equal to:${a + b}. \n`;
}

console.log(sum(24, 363));



const resultAdd1 = sum(1,2);
const resultAdd2 = sum(10, 34);
const resultAdd3 = sum(100, 300);
const resultAdd4 = sum(1000, 4000);

const result = function() {
    return resultAdd1 + resultAdd2 + resultAdd3 + resultAdd4;
}
console.log(result());



const sum2 = function(c,d){
    return c + d;
}

const resultAdd5 = sum2(1,2);
const resultAdd6 = sum2(10, 34);
const resultAdd7 = sum2(100, 300);
const resultAdd8 = sum2(1000, 4000);

const result2 = function() {
    return `Sum is equal to: ${resultAdd5 + resultAdd6 + resultAdd7 + resultAdd8}`;
}
console.log(result2());



const isGreaterThan20 = function (x){
    if(x >20){ return `${x} is greater than 20.`;
    }else{ return `${x} is less than 20.`}
}

console.log(isGreaterThan20(18));
console.log(isGreaterThan20(24));

const test = function test2(){
    return 'Test!';
}

console.log(test());


const withoutReturn = function(){

}

console.log(withoutReturn());
