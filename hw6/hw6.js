
// 1
// Реализовать функцию foo:
// let a = {
// name: 'static',
// count: 0
// }
// console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
// {name:'static', count:1}, ..., {name:'static', count:9}] */

let a = {
name: 'static',
count: 0
}
console.log(foo(a, 'count', 10));

function foo(obj,field,count) {
    let arr =[];
    for(let i=obj.count; i<count;i++){
        copyObj = Object.assign({},obj);
        copyObj[field] += i;
        arr.push(copyObj);
    }
    return arr;
}


// 2
// Сделайте функцию, каждый вызов который будет генерировать одно случайное число
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
// хранится массив чисел, которые уже были сгенерированы функцией.

function randomGeneration() {
    let arr = [];
    return function funcRand(){
        let num = Math.ceil(Math.random() * 100);
        if (arr.indexOf(num) ===-1) {
            arr.push(num);
            return num;
        } else {
            return funcRand();
        } 
    }
}

let func = randomGeneration();
for (let i = 0; i < 100; i++) {
    console.log(func());
}

// 3
// Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например:
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.

let student ={
    name: "Джон",
    surname: "Смит",
    age: 21,
    interests: [" программирование", " музыка", " аниме"],
    univerity: "ИТМО",
    biography(){  return "<<" + this.name + ' ' + this.surname + '. ' + this.age + ' год. Интересы:' + this.interests + '. Учится в ' + this.univerity+'>>'; }
}

console.log(student.biography());


// 4
// Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя
// минус два и так далее, до единицы. Обозначается n!
// Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1

function factorialN(n) {
    return n === 0 || n===1 ? 1: n * factorialN(n - 1)
}

console.log(factorialN(0))
console.log(factorialN(1))
console.log(factorialN(10))


// 5
// Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию,
// определяющую порядок сортировки. Массив для тестирования:
// let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5},
// { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

let arr = [{ 'price' : 10, 'count' : 2 },
            { 'price' : 5, 'count' : 5},
            { 'price' : 8, 'count' : 5 },
            { 'price' : 12, 'count' : 4 },
            { 'price' : 8, 'count' : 4},];

let sorted = arr.sort((a,b) => a.price - b.price);

console.log(sorted);






