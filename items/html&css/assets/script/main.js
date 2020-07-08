/*///////////////////////////////////////////////////////////////////////*/
/*                    Setting - Modal Window (pop-up)                    */
/*///////////////////////////////////////////////////////////////////////*/

const setting_btn = document.querySelector('.menu__setting');
const setting_menu = document.querySelector(".setting-menu");
const setting_closed = document.querySelector('.setting-menu__closed');

setting_btn.addEventListener("click", function(){
    setting_menu.classList.add("_setting-active");
});
setting_closed.addEventListener("click", function(){
    setting_menu.classList.remove("_setting-active");
});
/*///////////////////////////////////////////////////////////////////////////*/
/*                    Mobile Menu - Modal Window (pop-up)                    */
/*///////////////////////////////////////////////////////////////////////////*/

const mobile_button = document.querySelector('.menu-header__button');
const mobile_menu = document.querySelector('.menu-header__list');
const menu_active = document.querySelector('.header__menu')
const menu_is_active = menu_active.classList.contains('._menu-header__list-open');

mobile_button.addEventListener("click", function(){
    mobile_menu.classList.add("_menu-header__list-open");
    mobile_button.classList.add('_menu-header-deactivate');
});

document.documentElement.addEventListener("click", function (e) {
    if (e.target.closest('._text-decoration')){   
        mobile_menu.classList.remove("_menu-header__list-open");
        mobile_button.classList.remove('_menu-header-deactivate');
    }   
    else { 
        if(!e.target.closest('.menu-header')) {
        mobile_menu.classList.remove("_menu-header__list-open");
        mobile_button.classList.remove('_menu-header-deactivate');
        }
    }
})