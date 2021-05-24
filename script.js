const body = document.body
const hamburgerMenu = document.getElementById('hamburgerMenu')

hamburgerMenu.addEventListener('click', () => {
    body.classList.toggle('toogle-nav')
})
