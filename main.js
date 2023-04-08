

menuBurguer = document.querySelector('.menuBurguer')
menuList = document.querySelector('.openedmenu')


menuBurguer.addEventListener('click', ()=>{
    menuList.classList.toggle('flex')
})