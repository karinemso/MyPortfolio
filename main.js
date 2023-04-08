

menuBurguer = document.querySelector('.menuBurguer')
menuList = document.querySelector('.openedmenu')
menuBurguer.addEventListener('click', ()=>{
    
    menuBurguer.classList.toggle('active')
    menuList.classList.toggle('flex')

    
})

navHome = document.querySelector("#NavHome")
navSobre = document.querySelector("#NavSobre")

navs = [navHome, navSobre]

navs.map((nav)=>{
    nav.addEventListener('click', ()=>{
        menuBurguer.classList.toggle('active')
        menuList.classList.toggle('flex')
    
})})
// navHome.addEventListener('click', ()=>{
//     menuBurguer.classList.toggle('active')
//     menuList.classList.toggle('flex')


// })

// navSobre.addEventListener('click', ()=>{
//     menuBurguer.classList.toggle('active')
//     menuList.classList.toggle('flex')


// })