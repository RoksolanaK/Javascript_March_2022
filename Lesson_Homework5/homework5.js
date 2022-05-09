//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень
// let arrowF = array => {
//     let x = 0;
//     for (let arrayElement of array) {
//         x = x += arrayElement // оператор присвоєння
//     }
//     return x/2
// }
// console.log(arrowF([10, 20]))

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//Переробити на стрілочні функції з попереднього дз

let x = (a,b)=> a*b;
console.log(x(2,4));
//--------------------
let circle = (a) => 2*Math.PI*a;
console.log(circle(3));
//---------------
cylinder = (h,r) => 2*Math.PI*r*h;
console.log(cylinder(3,4));
//------------------
paragraph = text => text;
console.log(paragraph('hello, how are you doing?'))
//--------------------
liFunc = text =>
    document.write(`<ul><li>${text}</li></ul>`)

console.log(liFunc('hi'))

console.log(liFunc('hi'))

console.log(liFunc('hi'))
//--------------------------------------
hi = (text1, a) => {
    for (let i = 0; i < a; i++){

        console.log(text1);

        document.write(`<ul><li>${text1}</li></ul>`)

    }

}

hi('this is terrible',2);
//-------------------------
let arr = [true, 100,'okten'];
day = (array) => {

    for (let ele of array){

        console.log(ele);

        document.write(`<ul><li>${ele}</li></ul>`)

    }

}

day(arr);
//--------------------------------
let users = [

    {id:334455,name:'olia',age:25},
    {id:223344, name:'vitia', age:30},
    {id:112233, name:'olena',age:31}
]
block = array => {
    for (let arrayElement of array) {

        console.log(arrayElement);

        document.write(`<ol><li> User id is ${arrayElement.id}. User name is ${arrayElement.name}. User age is ${arrayElement.age}</li></ol>`)

    }

}

block(users);
//------------------------------------
let arr5 = [1,2,3,4,5,6];
minNumb = (array) => {
    let minN = array[0];
    for (let number of array) {
        if( number<minN){
            minN= number
        }
        return minN;
    }
}
console.log(minNumb(arr5));
//------------------------------------
let arr7 = [1,2,3,4,5,6];
minNumb = (array) => {
    let minN = array[0];
    let maxN = array[0];
    for (let number of array) {
        if( number < minN) { minN = number }
        if (number > maxN) { maxN = number }
    }
    console.log(maxN);
    console.log('--------------------')
    return minN;
}
console.log(minNumb(arr7));
//-----------------------
let arr2 = [2,4,2,2,2];
happy = (array) => {
    let sum = 0;
    for (let element of array ){
        sum = sum + element
    }
    return sum;
}
console.log(happy(arr2))
