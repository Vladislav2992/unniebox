(function (){
    const menuButton = document.getElementById('menu-btn');
    const menu = document.querySelector('.header__menu-wrapper')
    const closeButton = document.querySelector('.close-menu-button')
    const body = document.querySelector('body')
    menuButton.addEventListener('click', ()=> {


        if(menuButton.classList.contains('active')) {
            menu.classList.remove('active');
            menuButton.classList.remove('active')
        } else {
            menu.classList.add('active');
            menuButton.classList.add('active') 
        }
        // if(body.offsetWidth > 1024) {
           
        // } else {
        //     menu.classList.add('active');
        //     menuButton.style.display = 'none';
        // }
             
    })

    
    closeButton.addEventListener('click', ()=> {
        menu.classList.remove('active');
        menuButton.classList.remove('active')
    })
})();

