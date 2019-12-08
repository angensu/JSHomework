// 1. Создать функцию которая выводит время 
// в html и обновляет значения каждую секунду. 
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.


let div = document.createElement('div');
document.body.append(div);
let span1 = document.createElement('span'),
    span2 = document.createElement('span'),
    span3 = document.createElement('span');
span1.id = 'span1';
span2.id = 'span2';
span3.id = 'span3';
div.append(span1);
div.append(span2);
div.append(span3);
div.style.textAlign = 'center';
div.style.fontSize = '48px';
span1.style.color = 'grey';
span2.style.color = 'lightblue';
span3.style.color = 'lightgrey';
function clock(){
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('span1').innerHTML = hours + ':';
    document.getElementById('span2').innerHTML = minutes + ':';
    document.getElementById('span3').innerHTML = seconds;
}
setInterval(clock, 1000);
clock();
let hr = document.createElement('hr');
div.after(hr);


// 2. Дан массив с объектами, где каждый объект 
// описывает товар: фото, артикул, описание и т.п.
// Сформировать функцию, которой передаётся массив 
// товаров, и которая создаст и внесёт все 
// необходимые html элементы, стили, и содержание 
// для отображения всей информации о товарах.

let products = [
    {
        image : 'img/i3.png',      
        code : 'i3',
        desc: 'Intel® Core™ i3 9-го поколения с графикой Intel® Iris® Plus впервые обеспечивают масштабные возможности искусственного интеллекта (ИИ) на ПК',
    },
    {
        image : 'img/i5.png',      
        code : 'i5',
        desc: 'Intel® Core™ i5 9-го поколения с графикой Intel® Iris® Plus впервые обеспечивают масштабные возможности искусственного интеллекта (ИИ) на ПК',
    },
    {
        image : 'img/i7.png',      
        code : 'i7',
        desc: 'Intel® Core™ i7 9-го поколения с графикой Intel® Iris® Plus впервые обеспечивают масштабные возможности искусственного интеллекта (ИИ) на ПК',
    },
    {
        image : 'img/i9.png',      
        code : 'i9',
        desc: 'Intel® Core™ i9 9-го поколения с графикой Intel® Iris® Plus впервые обеспечивают масштабные возможности искусственного интеллекта (ИИ) на ПК',
    }
];
function productsOnHTML(prod){
    let div1 = document.createElement('div');
    document.body.append(div1);    
    div1.style.display = 'flex';
    div1.style.justifyContent = 'space-around';
    div1.style.margin = '160px 220px';

     for (let i=0; i<prod.length;i++){
        let divObj = document.createElement('div'),
            imgHTML = document.createElement('img'),
            codeP = document.createElement('p'),
            descP = document.createElement('p');
        div1.append(divObj); 

            imgHTML.setAttribute('src', prod[i].image);
            imgHTML.innerHTML = prod[i].image;
            codeP.innerHTML = prod[i].code;
            descP.innerHTML = prod[i].desc;

            divObj.append(imgHTML);
            divObj.append(codeP);
            divObj.append(descP);
            divObj.style.textAlign ='center';
            divObj.style.margin = '0px 40px';
     }
    let hr1 = document.createElement('hr');
    div1.after(hr1);
}
productsOnHTML(products);



// 3. Создать светофор (красный, желтый, 
// зелёный). Переключать цвет у светофора 
// через каждые 2 сек сверху вниз и снизу вверх.


// ????????????????????????????
// Со светофором не понятно. Должен ли я все теги сделать в JS, как в предыдущем задании, а потом из JS пушить
// в HTML, или можно болванку в HTML CSS сделать, а в JS только логику?





// 4*. Создать функцию которая выводит в html количество дней, 
// часов и минут до нового года и обновляет значения каждую минуту. 
// Датой наступления нового года считается 1 января. Функция выводит в html 
// строку вида: "14 дней 21 час 46 минут". Нужно реализовать корректные 
// окончания слов, например: 1 день, 2 дня, 5 дней. 
// Функция должна корректно работать при запуске в любом году, 
// т. е. грядущий год должен вычисляться программно.