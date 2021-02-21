const btnToggler = document.querySelector('.nav-toggle')

const nav = document.querySelector('.nav')

btnToggler.addEventListener('click', () =>{
    nav.classList.toggle('show-nav')
})