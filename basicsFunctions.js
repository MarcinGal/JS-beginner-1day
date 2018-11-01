function sleep() {
    return `I'm sleepy`;
}

console.log(sleep());


const sum = function (a, b) {
    return `Sum of ${a} and ${b} is equal to:${a + b}`;
}

console.log(sum(24, 363));


const isGreaterThan20 = function (x){
    if(x >20){ return `${x} is greater than 20.`;
    }else{ return `${x} is less than 20.`}
}

console.log(isGreaterThan20(18));
console.log(isGreaterThan20(24));


