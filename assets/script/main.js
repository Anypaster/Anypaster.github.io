let setting = document.querySelector('.menu__setting');
let setting_2 =document.querySelector('.menu__setting-2')
let setting_menu = document.querySelector(".setting-menu");
let setting_closed = document.querySelector('.setting-menu__closed');

setting.addEventListener("click", function(){
    setting_menu.classList.add("_setting-active");
});

setting_2.addEventListener("click", function(){
    setting_menu.classList.add("_setting-active");
});

setting.addEventListener("click", function(){
    setting_menu.classList.add("_setting-active");
});
setting_closed.addEventListener("click", function(){
    setting_menu.classList.remove("_setting-active");
});