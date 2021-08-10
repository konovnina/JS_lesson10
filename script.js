'use strict';

let books = document.querySelectorAll('.book');

//1
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

books = document.querySelectorAll('.book');
//2
document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

//3
books[2].querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов';

//4
document.querySelector('.adv').remove();

//5
const orderListItems = function (list, listItems, order) {
  for (let i = 0; i < listItems.length; i++){
    list.append(listItems[parseInt(order[i], 16)]);
  }
};

const book2 = books[1].querySelector('ul');
orderListItems(book2, book2.querySelectorAll('li'), '0136845792A');

const book5 = books[4].querySelector('ul');
orderListItems(book5, book5.querySelectorAll('li'), '0193426758A');

//6
const book6 = books[5].querySelector('ul');
book6.querySelector('li:nth-child(9)').insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');