// 1.
// Даны несколько div элементов на html. 
// По первому нажатию на каждый div он перекрашивается
// зеленым цветом, при повторном нажатии перекрашивается
// обратно и так далее каждый клик
// происходит чередование цвета.


let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');

box1.onclick = onGreen;
box2.onclick = onGreen;
function onGreen() {
    this.classList.contains('green')?
        this.classList.remove('green'):
        this.classList.add('green');  
}


// 2
// Реализовать счётчик нажатий на
// кнопку: Дана кнопка внутри неё
// записана цифра. При клике на
// кнопку – её значение должно
// увеличиваться на единицу.

let count = 0;
let buttonCounter = document.querySelector('#buttonCounter');
buttonCounter.onclick = function() {
    count++;
    document.querySelector('#buttonCounter').innerHTML = count;
}

//3
// Реализовать возможность добавления комментариев.
// Комментарий вводится в textarea. Комментарий добавляется по нажатию на кнопку Комментировать.
// При добавлении комментария отображаются: аватар автора (пока у всех комментариев одинаковый),
// имя автора (пока у всех комментариев одинаковое), дата добавления комментария (текущая дата),
// текст комментария (тот, что был введен в textarea).


function createMessage() {
    let container = document.querySelector(".sent");
let txt = document.querySelector("#message").value;
let newMessage = document.createElement("p");
let user = "Leo";
let avatar = document.createElement('img')
let date = function () {
    let date = new Date();
    return date.getHours() + ":"+date.getMinutes();
}

newMessage.innerHTML = `<img src="leo.jpg" height="24px" width="35px"> <span style="color:blue"><strong>${user}</strong></span> <span style="color:red">${date()} : </span>${txt}`;
container.append(newMessage);
container.scrollBy(0, 200);
}


//4
// Дан массив с объектами, где каждый объект описывает книгу: артикул, автор, название, описание.
// Сформировать функцию, которой передаётся массив книг, и которая создаст и внесёт все необходимые 
// html элементы, стили, и содержание для отображения всей информации о книгах в виду таблицы.

//5*
// Реализовать одну
// страничку HTML о знаменитом человеке с
// использованием панели с вкладками (табы).
// Например, в качестве знаменитого человека
// возьмём Пушкина А.С., из википедии возьмём
// наполнение странички, в качестве вкладок
// можно указать: биография, творчество и т.п.
// Переключение между вкладками страницы и
// изменение содержимого реализовать с
// использованием JS.