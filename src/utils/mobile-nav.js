
const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobilelink = document.querySelectorAll('.mobile-nav__link');
    // state
    let isMobileNavOpen=false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileNav.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }
    });

    mobilelink.forEach(link => {
      link.addEventListener('click',() => {
         isMobileNavOpen = false ;
         mobileNav.style.display = "none";
         document.body.style.overflow = "auto";
        });
    });
};

export default mobileNav;