"use strict";

let app = 'CoffeBoom';
    //company = 'CoffeBoom';
    //app_code = 'com.webnet.CoffeBoom';
    //email = 'dbqqbq@gmail.com';
    //date = '2022-06-30';

let newRu = `<div>
<img src="public/img/menu/new/1ru.png">
</div>
<div>
<img src="public/img/menu/new/2ru.png">
</div>
<div>
<img src="public/img/menu/new/3ru.png">
</div>
<div style="margin-right: 140vw;">
<img src="public/img/menu/new/4ru.png">
</div>`;

let newKz = `<div>
<img src="public/img/menu/new/1kz.png">
</div>
<div>
<img src="public/img/menu/new/2kz.png">
</div>
<div>
<img src="public/img/menu/new/3kz.png">
</div>
<div style="margin-right: 140vw;">
<img src="public/img/menu/new/4kz.png">
</div>`;

let newEn = `<div>
<img src="public/img/menu/new/1en.png">
</div>
<div>
<img src="public/img/menu/new/2en.png">
</div>
<div>
<img src="public/img/menu/new/3en.png">
</div>
<div style="margin-right: 140vw;">
<img src="public/img/menu/new/4en.png">
</div>`;



document.addEventListener('DOMContentLoaded', () => {
    let menuItems = document.querySelector(".menuItem");
    menuItems.classList.add("menuActiveItem");
    localStorage.setItem("lang", "ru");
    localStorage.setItem("page", "index");
    changeMenuItem();
});


function changeMenuItem() {
  let page = localStorage.getItem("page");
  let menuItems = document.querySelectorAll(".menuItem");
  let menuActive = document.querySelector(".menuActiveItem");
  menuActive.classList.remove("menuActiveItem");

  if(page == "index") {
    menuItems[0].classList("menuActiveItem");
  }
}

function changePage(page) {
  let lang = localStorage.getItem("lang");
  let slider = document.querySelector(".slider");
  localStorage.setItem("page", page)


  if(page == "new") {
    if(lang == "ru") {
      slider.innerHTML = newRu;
    }
    if(lang == "kz") {
      slider.innerHTML = newKz;
    }
    if(lang == "en") {
      slider.innerHTML = newEn;
    }
  }
}

function changeLang(lang) {
  localStorage.setItem("lang", lang);
  let page = localStorage.getItem("page");
  let slider = document.querySelector(".slider");
  let tmpActiveLang = document.querySelector(".langActiveElement");
  tmpActiveLang.classList.remove("langActiveElement");

  if(page == "new") {
    if(lang == "ru") {
      slider.innerHTML = newRu;
    }
    if(lang == "kz") {
      slider.innerHTML = newKz;
    }
    if(lang == "en") {
      slider.innerHTML = newEn;
    }
  }

  if(lang == "ru") {
    document.querySelector(".btnOrder").innerHTML = "оформить заказ";
    document.querySelectorAll(".langElement")[0].classList.add("langActiveElement");
    document.querySelector(".ourMenu").innerText = "Наше меню";
    document.querySelector(".bp").innerHTML = "г. Атырау, Абулхаир Хана 63, Блок 3, ЖК 'TALAN'";
    document.querySelector(".copyright").innerHTML = '© coffeeboom.talan.atyrau, 2022 Все права защищены. Перепечатка и цитирование материалов запрещены';

    document.querySelector("menu").innerHTML = `<div class="menuItem" style="margin-top: 0px" onclick="changePage('index')">Основное меню</div>
    <div class="menuItem" onclick="changePage('dess')">Десерты</div>
    <div class="menuItem" onclick="changePage('alco')">Алкогольные напитки</div>
    <div class="menuItem new" onclick="changePage('new')">Новитки кухни</div>
    <div class="menuItem new" onclick="changePage('newalcodess')">Новинки бара и десертов</div>`;
  }
  if(lang == "kz") {
    document.querySelector(".btnOrder").innerHTML = "тапсырыс беру";
    document.querySelectorAll(".langElement")[1].classList.add("langActiveElement");
    document.querySelector(".ourMenu").innerText = "Біздің мәзір";
    document.querySelector(".bp").innerHTML = "Атырау қ., Әбілқайыр Хан 63, 3 блок, 'TALAN' тұрғын үй кешені";
    document.querySelector(".copyright").innerHTML = '© coffeeboom.talan.atyrau, 2022 Барлық құқықтар сақталған. Материалдарды қайта басып шығаруға және дәйексөз келтіруге тыйым салынады';

    document.querySelector("menu").innerHTML = `<div class="menuItem" style="margin-top: 0px" onclick="changePage('index')">БАСТЫ МӘЗІР</div>
    <div class="menuItem" onclick="changePage('dess')">десерттер</div>
    <div class="menuItem" onclick="changePage('alco')">алкогольдік сусындар</div>
    <div class="menuItem new" onclick="changePage('new')">мәзір жаңалықтары</div>
    <div class="menuItem new" onclick="changePage('newalcodess')">бар & десерт жаңалықтары</div>`;

  }
  if(lang == "en") {
    document.querySelector(".btnOrder").innerHTML = "make an order";
    document.querySelectorAll(".langElement")[2].classList.add("langActiveElement");
    document.querySelector(".ourMenu").innerText = "Our menu";
    document.querySelector(".bp").innerHTML = "Atyrau city, Abulkhair Khan 63, Block 3, 'TALAN' residence";
    document.querySelector(".copyright").innerHTML = '© coffeeboom.talan.atyrau, 2022 All rights reserved. Reprinting and quoting of materials is prohibited';

    document.querySelector("menu").innerHTML = `<div class="menuItem" style="margin-top: 0px" onclick="changePage('index')">MAIN MENU</div>
    <div class="menuItem" onclick="changePage('dess')">desserts</div>
    <div class="menuItem" onclick="changePage('alco')">alcoholic beverages</div>
    <div class="menuItem new" onclick="changePage('new')">new kitchen</div>
    <div class="menuItem new" onclick="changePage('newalcodess')">new beverages & desserts</div>`;
      
    }
}

 