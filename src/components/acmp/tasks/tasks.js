/** *******************
Скрипт из файла tasks.js
Объект tasks содержит страницу alg-tasks
Функция showTasks показывает страницу tasks
******************** */
import './js/element-tasks';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект tasks
const tasks = {};

// 2. В объекте tasks создаем свойство aside
tasks.aside = createAside();

// 3. В объекте tasks создаем свойство main
tasks.main = createMain();

// 4. Экспортируем функцию showTasks()
export default function showTasks() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(tasks.aside);
    mainAside.append(tasks.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
