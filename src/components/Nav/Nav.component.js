/** **************
Скрипт из файла nav.js
создает ссылки в меню nav для каждого пункта меню header_nav
Cf      Tasks
****************** */

import './Nav.class';
import { dataNavAcmp } from './data-nav';
import { endUrl }      from '../Header/header-nav/header-nav';

const nav = document.getElementById('nav');
const main = document.getElementById('maincomponent');

/** **************
1. nav для страниц acmp
**************** */

// 1.1 Создаем ссылки из массива dataNavAcmp
createNavAcmp(dataNavAcmp);

function createNavAcmp(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      main.innerHTML = el.content;
      el.act();
    });
  });
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function createNav() {
  // 1.2 Добавим ссылки navAcmp в nav если адрес acmp.html
  if (endUrl === '/acmp.html') {
    nav.innerHTML = '';
    dataNavAcmp.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavAcmp[0].elem.classList.add('active');
  }
}
