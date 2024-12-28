let featuresButton = document.querySelector('.menu__nav__features__button')
let companyButton = document.querySelector('.menu__nav__company__button')
let buttonOpenMenu = document.querySelector('.mobile--open--menu')
let buttonCloseMenu = document.querySelector('.mobile--close--menu')

function changeIconMenu() {
    if(document.querySelector('.snap__header__menu__nav').classList.contains('activate__modal__menu')) {
        buttonOpenMenu.style.display = 'none'
        buttonCloseMenu.style.display = 'block'
    } else {
        buttonOpenMenu.style.display = 'block'
        buttonCloseMenu.style.display = 'none'
    }
}

function openCloseModalAndMenu(button, modalName, classNameinCss, arrowName, arrowAnimationEnable, arrowAnimationDisable) {
    button.addEventListener('click', () => {

        changeIconMenu();
        const modal = document.querySelector(modalName);
        const arrow = document.querySelector(arrowName);
        
        if (modal) {
            modal.classList.toggle(classNameinCss);
            
            // Arrow animation START
            if (modal.classList.contains(classNameinCss)) {
                if (arrow) {
                    arrow.classList.add(arrowAnimationEnable);
                    arrow.classList.remove(arrowAnimationDisable);
                }
            } else {
                if (arrow) {
                    arrow.classList.remove(arrowAnimationEnable);
                    arrow.classList.add(arrowAnimationDisable);
                }
            }
            // Arrow animation END
        }
    });
}

openCloseModalAndMenu(featuresButton, '.features__modal', 'activate__modal__features__and__company', '.features__arrow', 'arrow__animation__enable', 'arrow__animation__disable');
openCloseModalAndMenu(companyButton, '.company__modal', 'activate__modal__features__and__company', '.company__arrow', 'arrow__animation__enable', 'arrow__animation__disable');
openCloseModalAndMenu(buttonOpenMenu, '.snap__header__menu__nav', 'activate__modal__menu');
openCloseModalAndMenu(buttonCloseMenu, '.snap__header__menu__nav', 'activate__modal__menu');
openCloseModalAndMenu(buttonOpenMenu, '.overlay__menu__mobile', 'activate__overlay');
openCloseModalAndMenu(buttonCloseMenu, '.overlay__menu__mobile', 'activate__overlay');