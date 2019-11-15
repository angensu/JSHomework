'use strict';

// 1
// На садовом участке площадью 10 соток, разбили грядки
// 15 на 25 метров. Сколько м2 осталось незанято?

let a = 10*100;
let b = 15*25;
let result1 = a % b;
console.log (result1 +" м.кв.");


// 2
// Найдите площадь овального кольца, полученного из овала
// площадью 15 дм2 вырезанием овала площадью 600 см2.

let c = 15 * 100;
let d = 600;
let result2 = c - d;
console.log (result2 +" см. кв.");

// 3
// Из трех данных чисел выбрать наименьшее.

let e = 1;
let f = 34;
let g = 678;
let min = 0;

if ( e <= f && e <= g) {
    min = e;
} else if ( f <= g && f <= e) {
    min = f;
} else if ( g <= f && g <= e) {
    min = g;
} else {
    console.log ('...');
}
console.log (min);

// 4
// Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. Например,
// среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let m = 8.5;
let n = 11.45;
const ten = 10;
let num1 = ten - m;
let num2 = ten - n;

if ( Math.abs(num1) < Math.abs(num2)) {
    console.log (m);
} 
else if ( Math.abs(num2) < Math.abs(num1)) { 
    console.log (n);
} 
else {
    console.log (m,n);
}

