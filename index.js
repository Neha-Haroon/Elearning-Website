// CHANGE NAVBAR STYLES ON SCROLL

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    // 0 indicates how fast we want to see change: if window scroll along y axis means vercially is anything greater than 0 change navbar
})

// show / hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon from plus to minus
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        }
        else {
            icon.className = "uil uil-plus";
        }
    })
})


// TOGGLE (HIDE / SHOW ) THE NAV MENU ON MEDIUM SCREEN
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"; // to show the close butttn when menu is opened
    menuBtn.style.display = "none"; // to not display the menu button

})

//close nav menu Function
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none"; // to not show the close butttn when menu is closed 
    menuBtn.style.display = "inline-block"; // to  display the menu button

}

closeBtn.addEventListener('click', closeNav)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = document.getItem('selected-theme')
const selectedIcon = document.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil uil-moon' : 'uil uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    // document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)






