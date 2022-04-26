// //створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleAre(a,b){
//     return a*b
// }
// rectangleAre(3,2)
// console.log(rectangleAre(3,2));
// document.write(`<h3>Площа прямокутника - ${rectangleAre(3,2)}</h3>`)
// // //___________________________________________________________________________________________
// // //створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle (a){
//     return 2 * Math.PI * a
// }
// console.log(circle(2));
// document.write(`<h3>Площа кола - ${circle(2)}</h3>`)
// //_________________________________________________________________________________________________
// //створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder (r, h){
//     return 2 * Math.PI * r * h;
// }
// console.log(cylinder(2,5));
// document.write(`<h3>Площа циліндра - ${cylinder(2,5)}</h3>`)
//_____________________________________________________________________________________________________
//створити функцію яка приймає масив та виводить кожен його елемент
// First solution
// let massif1 = [25,35,45,55,'hey','how are you?'];
// function noName(array){
//     for (let arrayElement of massif1) {
//         document.write(`<ul><li>${arrayElement}</li></ul>`)
//     }
// }
// noName(console.log(massif1));

//Second solution
// function noName1(array) {
//     for (let arrayElement1 of array) {
//         console.log(arrayElement1);
//         document.write(`<ul><li>${arrayElement1}</li></ul>`)
//     }
// }
//
// noName1([1, true, 'hello']);

//Third solution
// let massif2 = [25,35,45,55,'hey','how are you?'];
// function noName(array){
//     for (let arrayElement of massif2) {
//         console.log(arrayElement);
//         document.write(`<ul><li>${arrayElement}</li></ul>`)
//     }
// }
// noName(massif2);
//______________________________________________________________________________________________________
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(text){
//     return text;
// }
// console.log(text('hello, this is a paragraph with some uninteresting text'));
//__________________________________________________________________________________________________
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function paragraph (text1){
//     document.write(`<ul><li>${text1}</li></ul>`)
//     document.write(`<ul><li>${text1}</li></ul>`)
//     document.write(`<ul><li>${text1}</li></ul>`)
// }
// paragraph('Hello! How do you do?');
//__________________________________________________________________________________________________________
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liInUl (text3, a){
//     for (let i = 0; i < a; i++) {
//        console.log(text3);
//        document.write(`<ul><li>${text3}</li></ul>`)
//     }
// }
// liInUl('Goodbye! Take care!',5)
//_________________________________________________________________________
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function niceFunc(array){
//  for (let arrayElement of array) {
//   document.write(`<ol><li>${arrayElement}</li></ol>`)
//      console.log(arrayElement);
//  }
// }
//   niceFunc([20,true, 'hello',false,43])

//______________________________________________________________________________________________________
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//  {id:334455,name:'olia',age:25},
//  {id:223344, name:'vitia', age:30},
//  {id:112233, name:'olena',age:31}
// ]
// function block(array){
//  for (let arrayElement of array) {
//   console.log(arrayElement);
//   document.write(`<ol><li> User id is ${arrayElement.id}. User name is ${arrayElement.name}. User age is ${arrayElement.age}</li></ol>`)
//  }
// }
// block(users)
//_________________________________________________________________________________________________________________
// створити функцію яка повертає найменьше число з масиву
//first solution
// function minNumber(){
// }
// minNumber(console.log(Math.min(100,200,20)))

//second solution
// let arr = [1,2,3,4,5,6];
// function minNumb(array){
//     let minN = array[0];
//     for (let number of array) {
//         if( number<minN){
//             minN= number
//         }
//         return minN
//     }
// }
// console.log(minNumb(arr));
//_________________________________________________________________________________________________________
//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sum(array,action){
//  let res = 0;
//  for (let arrayElement of array) {
//   if(action ==='+'){}
//   res = res + arrayElement
//  }
//  return res;
// }
//  console.log(sum([1,2],'+'));
