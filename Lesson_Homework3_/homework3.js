//task1
// for (let i = 0; i <=20; i++ ) {
//         document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>`)
// }
//________________________________________________________________________________________________
// //task2
// for (let i = 0; i <=20; i++ ) {
//         document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ${i} </div>`)
// }

// //task3
// let i = 0;
// while (i<20){
//         document.write(`<h1>Some text</h1>`)
//     i++;
// }
//________________________________________________________________________________________________
//task4
// let i = 0;
// while (i<=20){
//     document.write(`<h1>Some text ${i}</h1>`)
//     i++;
// }

//________________________________________________________________________________________________
//task 5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let  i = 0; i<=listOfItems.length;i++){
    console.log(listOfItems.length);
    document.write(`<ul>`)
    document.write(`<li>${listOfItems[i]}</li>`)
    document.write(`</ul>`)
}
//________________________________________________________________________________________________

//task 5 (plus indexes of items)
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let  i = 0; i<=listOfItems.length;i++){
//     console.log(listOfItems.length);
//     document.write(`<div>${listOfItems[i]} ${i} </div>`)
// }
//________________________________________________________________________________________________
// task 6
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let i = 0; i < products.length; i++) {
// document.write(`<div> <h3> ${products[i].title} costs ${products[i].price} <img class="product-image" src="${products[i].image}" alt="" </h3></div>`)
//
// }
