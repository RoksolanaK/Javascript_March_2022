// // task
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

