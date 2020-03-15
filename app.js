const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navlink')  
    const navlink = document.querySelectorAll('.navlink li');

    burger.addEventListener('click', () => {
        /*toggle nav*/
        nav.classList.toggle('nav-active');

        /*Animate Links*/ 
         navlink.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index/5+0.1}s`;
            }
         });
        /*Burger animation*/
        burger.classList.toggle('toggle');     
    });
}

navSlide();