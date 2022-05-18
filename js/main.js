let body = document.querySelector('body');
let firstSlide = document.querySelectorAll('.firstSlide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let trip_img = document.querySelectorAll('.trip_img');
let trip_prev = document.querySelector('.trip_prev');
let trip_next = document.querySelector('.trip_next');
let modal = document.querySelector('#modal');
let bron_btn = document.querySelector('.bron_btn');
let close = document.querySelector('.modal_close');
let menuNav = document.querySelector('.menu_nav')
let menuBurger = document.querySelector('.menu_burger')

let i = 0;
let x = 0;


for(let i = 0; i<firstSlide.length; i++){
    firstSlide[i].style.display = 'none'
}

firstSlide[0].style.display = 'block'

    next.addEventListener('click', () =>{
        if(i < 2){
            firstSlide[i].style.display = 'none'
            i++;
            firstSlide[i].style.display = 'block'
        }else {
            firstSlide[i].style.display = 'none'
            i = 0;
            firstSlide[i].style.display = 'block'
        }
    })

    prev.addEventListener('click', () =>{
         if(i>0){
             firstSlide[i].style.display = 'none'
             i--
             firstSlide[i].style.display = 'block'
         }else {
             firstSlide[i].style.display = 'none'
              i=2;
             firstSlide[i].style.display = 'block'
         }
     })

    // ! 2 SLAYD
    for(x = 0; x < trip_img.length; x++){
        trip_img[x].style.display = 'none'
    }

    trip_img[0].style.display = 'block'

    for(x = 0; x < 2; x++){
        trip_next.addEventListener('click', () =>{
            // console.log('work');
            if(x < 2){
                trip_img[x].style.display = 'none'
                x++;
                trip_img[x].style.display = 'block'
            }else {
                trip_img[x].style.display = 'none'
                x = 0;
                trip_img[x].style.display = 'block'
            }
        })
    }

    for(x = 2; x > 0; x--){
        trip_prev.addEventListener('click', () =>{
            if(x>0){
            trip_img[x].style.display = 'none'
                x--
                trip_img[x].style.display = 'block'
            }else {
            trip_img[x].style.display = 'none'
            x=2;
            trip_img[x].style.display = 'block'
            }
        })
    }
    
    //! MODAL 
    bron_btn.addEventListener('click', () =>{
        // console.log('work')

    modal.style.display = 'block'
    modal.style.display = 'block'
    modal.style.marginLeft = '330px'
    modal.style.marginTop = '-200px'
    modal.style.position = 'absolute'
    modal.style.zIndex = '2'
    body.style.backgroundColor = 'grey'
    })

    close.addEventListener('click', () =>{
        modal.style.display = 'none'
    body.style.backgroundColor = 'white'

    })

    //!menuBURGER
    menuNav.addEventListener('click',() =>{
        if(close==true){
            menuBurger.style.visibility='hidden'
            close=false
    }else{
        menuBurger.style.visibility='visible'
        close=true
    }
    })


