const add = (a,b) =>{
    return a + b;
}

const add2 = (a,b) => a + b;


console.log(add(4,19));
console.log(add2(3,16));

const returnObject = () => ({
    name: 'Marcin',
    hobby: 'music',
    work: 'coding'
})

console.log(returnObject());

const returnObject2 = () => ({
    name: 'Mark',
    hobby: 'riding a bike',
    work: 'teaching'
})

console.log(returnObject2());