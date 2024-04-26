const openIcon = document.querySelector('.open-menu-icon');
openIcon.addEventListener('click', mobileMenu);
document.querySelector('.close-menu-icon').addEventListener('click', mobileMenu);
const menu = document.querySelector('.mobile-menu');
function mobileMenu(){
    document.body.classList.toggle('blockScroll');
    menu.classList.toggle('openMenu');
    document.addEventListener('click', function(event){
        let isClickIcon = openIcon.contains(event.target);
        let isClickMenu = menu.contains(event.target);
        if(!isClickIcon && !isClickMenu){
            document.body.classList.remove('blockScroll');
            menu.classList.remove('openMenu');
        }
    });
}
/*Our creations list background*/
const our_creations_li = document.querySelectorAll('.our-creations-li');
var background_list = ['image-deep-earth.jpg','image-night-arcade.jpg','image-soccer-team.jpg','image-grid.jpg','image-from-above.jpg','image-pocket-borealis.jpg','image-curiosity.jpg','image-fisheye.jpg'];
function updateBackgroundImages() {
    our_creations_li.forEach((li,index)=>{
        if(window.innerWidth <= 750){
            li.style.backgroundImage = `url("mobile-images/${background_list[index]}")`;
        }else{
            li.style.backgroundImage = `url("desktop-images/${background_list[index]}")`;
        }
    });
}
updateBackgroundImages();
window.addEventListener('resize', updateBackgroundImages);