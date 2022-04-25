// task
// let armchair = [100, 40, 30, 155, 67, 'glasses','cup', 'bed', 'perfume', 'pencil', true, false]
// console.log(armchair);// --створити масив з:  5 числових значень, 5 стічкових значень, 5 значень стрічкового,
// // числового та булевого типу , вивести його в консоль
// //_______________________________________________________________________________________________________________
// // task
//
// let emptyMassif = ['window','door','floor','curtains','wardrobe','chairs'];
// console.log(emptyMassif[0]); // Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до
// конкретного індексу. Вивести в консоль
//_______________________________________________________________________________________________________________
//task 1 - while loop is applied
// let massifOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < massifOfNumbers.length) {
//     document.write(`<ol>${massifOfNumbers[i]}</ol>`)
//     i++;
// }
//___________________________________________________
//task 2 - for loop is applied
// let massifOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// document.write(`<ol>`)
// for (let i = 0; i < massifOfNumbers.length; i++) {
//     document.write(`<li>${massifOfNumbers[i]}</li>`)
// }
// document.write(`</ol>`)
//______________________________________________________________________________
//task 3 - перебрати циклом while та вивести  числа тільки з непарним індексом
// let massifOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 1;
// while (i < massifOfNumbers.length) {
//     document.write(`<ol>${massifOfNumbers[i]}</ol>`)
//     i+=2;
//     console.log(massifOfNumbers);
// }
//_________________________________________________________________________________________________________
// task 4 - перебрати циклом for та вивести  числа тільки з непарним індексом
// let massifOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// document.write(`<ul>`)
// for (let i = 1; i < massifOfNumbers.length; i+=2) {
//     document.write(`<li>${massifOfNumbers[i]}</li>`)
//     console.log(massifOfNumbers);
// }
// document.write(`</ul>`)
//__________________________________
// task 5 - перебрати циклом while та вивести  числа тільки парні  значення
// let massifOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < massifOfNumbers.length) {
//     if(massifOfNumbers[i] % 2 === 0) {
//         console.log(massifOfNumbers[i]);
//     }
//     i++;
// }
//______________________________________________________________________________
// //task 6 -перебрати циклом for та вивести  числа тільки парні  значення
// let massifOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < massifOfNumbers.length; i++) {
//     if (massifOfNumbers[i] % 2 === 0) {
//         console.log(massifOfNumbers[i]);
//     }
// }
//____________________________________________________________________________
//task 7 - замінити кожне число кратне 3 на слово "okten"
// let massifOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 1; i < massifOfNumbers.length; i++) {
//     if (i % 3) {
//         console.log(`${i} okten`)
//     }
// }
//______________________________________________
//task 9 - масив в зворотньому порядку
// let massifOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// document.write(`<ul>`)
// for (let i = massifOfNumbers.length - 1; i >= 0; i--) {
//     document.write(`<li>${massifOfNumbers[i]}</li>`)
// }
// document.write(`</ul>`)
//______________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________
//Additional tasks 25.04.22.
// 1- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let appleQuantity = [10, 30, 25, 13, 54, 90, 65, 40, 35, 80]
// for (let appleNumber of appleQuantity) {
//     console.log(appleNumber);
// }
//2 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let food = ['butter', 'meat', 'eggs', 'salt', 'sugar', 'noodles', 'rice', 'cucumbers', 'tomatoes', 'juice']
// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }
//3 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let differentTypesOfMassif = [10, 'happiness', true, -100, null, false, 'earth', boolean = true, undefined, 'peace'];
// let i = 0;
// while (i<differentTypesOfMassif.length){
//     console.log(differentTypesOfMassif[i]);
//     i++;
//     document.write(`<h1>${differentTypesOfMassif[i]}</h1>`)
// }
// 4 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let massifOfAllTypes = [true, 'good day', 2022, 'sun', false, 24, 'mount', 'hiking', 8, true];
// for (let i = 0; i < massifOfAllTypes.length; i++) {
//     if (typeof massifOfAllTypes[i] === 'boolean') {
//         console.log(massifOfAllTypes[i]);
//     }
// }
//5 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let massifOfThreeTypes = [true, 41, false, 52, 'hello', 35, 90, 56, false, 65, true, 'victory', 'tree', 32, 28, 65, 30, true];
// for (let aMassifOfThreeTypes of massifOfThreeTypes) {
//     if (typeof aMassifOfThreeTypes === 'number') {
//         console.log(aMassifOfThreeTypes);
//     }
// }
//6 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let massifOfThreeTypesSecond = [true, 41, false, 52, 'hello', 'sky', 90, 'holidays', false, 65, true, 'victory', 'tree', 32, 'sun', 65, 30, true];
// let i = 0;
// while (i < massifOfThreeTypesSecond.length) {
//     if (typeof massifOfThreeTypesSecond[i] === 'string') {
//         console.log(massifOfThreeTypesSecond[i]);
//     }
//     i++;
// }
//7 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let emptyArray = [];
// emptyArray[0] = true;
// emptyArray[1] = false
// emptyArray[3] = 'hello'
// emptyArray[4] = 100
// emptyArray[5] = 'style'
// let i=0;
// while (i<emptyArray.length){
//     console.log(emptyArray[i]);
//     i++;
// }
//8 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 10; i++) {
//     console.log(i);
//     document.write(`<h2>Step ${i}</h2>`)
// }
//9 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let i = 2;
// while (i<=100){
//     console.log(i);
//     document.write(`<h2>step ${i}</h2>`)
//     i++;
// }
//10 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let i = 2;
// while (i <= 100) {
//     if (i === 100) {
//         console.log([2]);
//         document.write(`<h2>step ${[2]}</h2>`)
//     }
//     i++;
// }
// 11 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let i = 2;
// while (i <= 100) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`<h3>step # ${i}</h3>`)
//     }
//     i++;
// }
//12 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<h3>step # ${i}</h3>`)
// }
//nothing
let i = 0;
while (i<30){
    console.log(i);
    i++;
}
