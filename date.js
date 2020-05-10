'use strict';

const updateDate = () => {
  const date = new Date();
  const weakDay = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
  const dayElm = document.querySelector('.date__daynum');
  const monthElm = document.querySelector('.date__month');
  const yearElm = document.querySelector('.date__year');
  const weakDayElm = document.querySelector('.date__day');
  dayElm.textContent = String(date.getDate()).padStart(2, '0');
  monthElm.textContent = String(date.getMonth() + 1).padStart(2, '0');
  yearElm.textContent = date.getFullYear();
  weakDayElm.textContent = weakDay[date.getDay()];
}

updateDate();