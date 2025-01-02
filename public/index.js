const overlay = document.querySelector('.overlay__menu__mobile')
const featuresButton = document.querySelector('.menu__nav__features__button')
const companyButton = document.querySelector('.menu__nav__company__button')
const buttonOpenMenu = document.querySelector('.mobile--open--menu')
const buttonCloseMenu = document.querySelector('.mobile--close--menu')
const menuModal = document.querySelector('.snap__header__menu__nav')

function changeIconMenu() {
    buttonOpenMenu.addEventListener('click', () => {
        buttonOpenMenu.classList.add('disable')
        buttonCloseMenu.classList.add('enable')

        overlay.style.display = 'block'
        overlay.classList.remove('disable__overlay')
        overlay.classList.add('enable__overlay')
    })

    buttonCloseMenu.addEventListener('click', () => {
        buttonCloseMenu.classList.remove('enable')

        buttonOpenMenu.classList.remove('disable')
        buttonOpenMenu.classList.add('enable')

        
        overlay.classList.remove('enable__overlay')
        overlay.classList.add('disable__overlay')

        setTimeout(() => {
            overlay.style.display = 'none'
        }, 300)
    })
}

function openCloseModal(button, modalName, classNameinCss, arrowName, arrowAnimationEnable, arrowAnimationDisable) {
    button.addEventListener('click', () => {
        
        const modal = document.querySelector(modalName)
        const arrow = document.querySelector(arrowName)
        
        if (modal) {
            modal.classList.toggle(classNameinCss)
            
            if (modal.classList.contains(classNameinCss)) {
                if (arrow) {
                    arrow.classList.add(arrowAnimationEnable)
                    arrow.classList.remove(arrowAnimationDisable)
                }
            } else {
                if (arrow) {
                    arrow.classList.remove(arrowAnimationEnable)
                    arrow.classList.add(arrowAnimationDisable)
                }
            }
        }

    })
}

openCloseModal(featuresButton, '.features__modal', 'activate__modal__features__and__company', '.features__arrow', 'arrow__animation__enable', 'arrow__animation__disable')
openCloseModal(companyButton, '.company__modal', 'activate__modal__features__and__company', '.company__arrow', 'arrow__animation__enable', 'arrow__animation__disable')
openCloseModal(buttonOpenMenu, '.snap__header__menu__nav', 'activate__modal__menu')
openCloseModal(buttonCloseMenu, '.snap__header__menu__nav', 'activate__modal__menu')
changeIconMenu()