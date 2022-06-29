"use strict";

let app = 'CoffeBoom';
    //company = 'CoffeBoom';
    //app_code = 'com.webnet.CoffeBoom';
    //email = 'dbqqbq@gmail.com';
    //date = '2022-06-30';

document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem("lang", "ru");
     
});

function changePage(page) {
  alert(123);
}

function changeLang(lang) {
  localStorage.setItem("lang", lang);
  let tmpActiveLang = document.querySelector(".langActiveElement");
  tmpActiveLang.classList.remove("langActiveElement");

  if(lang == "ru") {
    document.querySelector(".btnOrder").innerHTML = "оформить заказ";
    document.querySelectorAll(".langElement")[0].classList.add("langActiveElement");
    document.querySelector(".ourMenu").innerText = "Наше меню";
    document.querySelector(".bp").innerHTML = "г. Атырау, Абулхаир Хана 63, Блок 3, ЖК 'TALAN'";
    document.querySelector(".copyright").innerHTML = '© coffeeboom.talan.atyrau, 2022 Все права защищены. Перепечатка и цитирование материалов запрещены';

    document.querySelector("menu").innerHTML = `<div class="menuItem menuActiveItem" style="margin-top: 0px">Основное меню</div>
    <div class="menuItem">Десерты</div>
    <div class="menuItem">Алкогольные напитки</div>
    <div class="menuItem new">Новитки кухни</div>
    <div class="menuItem new">Новинки бара и десертов</div>`;
  }
  if(lang == "kz") {
    document.querySelector(".btnOrder").innerHTML = "тапсырыс беру";
    document.querySelectorAll(".langElement")[1].classList.add("langActiveElement");
    document.querySelector(".ourMenu").innerText = "Біздің мәзір";
    document.querySelector(".bp").innerHTML = "Атырау қ., Әбілқайыр Хан 63, 3 блок, 'TALAN' тұрғын үй кешені";
    document.querySelector(".copyright").innerHTML = '© coffeeboom.talan.atyrau, 2022 Барлық құқықтар сақталған. Материалдарды қайта басып шығаруға және дәйексөз келтіруге тыйым салынады';

    document.querySelector("menu").innerHTML = `<div class="menuItem menuActiveItem" style="margin-top: 0px">БАСТЫ МӘЗІР</div>
    <div class="menuItem">десерттер</div>
    <div class="menuItem">алкогольдік сусындар</div>
    <div class="menuItem new">мәзір жаңалықтары</div>
    <div class="menuItem new">бар & десерт жаңалықтары</div>`;
  }
  if(lang == "en") {
    document.querySelector(".btnOrder").innerHTML = "make an order";
    document.querySelectorAll(".langElement")[2].classList.add("langActiveElement");
    document.querySelector(".ourMenu").innerText = "Our menu";
    document.querySelector(".bp").innerHTML = "Atyrau city, Abulkhair Khan 63, Block 3, 'TALAN' residence";
    document.querySelector(".copyright").innerHTML = '© coffeeboom.talan.atyrau, 2022 All rights reserved. Reprinting and quoting of materials is prohibited';

    document.querySelector("menu").innerHTML = `<div class="menuItem menuActiveItem" style="margin-top: 0px">MAIN MENU</div>
      <div class="menuItem">desserts</div>
      <div class="menuItem">alcoholic beverages</div>
      <div class="menuItem new">new kitchen</div>
      <div class="menuItem new">new beverages & desserts</div>`;
    }
}

 