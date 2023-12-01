
// hamburger

let lara = document.getElementById('ham1');
    lara.addEventListener('click', funct);
let mnavi = document.getElementById('mnav1');

function funct(){
    mnavi.style.display == "block"  ? mnavi.style.display = "none"  : mnavi.style.display = "block" ;
}


// scroll padding

const navigationHeight = document.querySelector('.navi').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',navigationHeight + "px");
//offsetheight must be in last


// jQuery for hide image

$(document).ready(()=>{
    $(window).scroll(()=>{
        let scroll=$(window).scrollTop()
      
        if(scroll>500){
          $("#jpg").hide()
          $("#cname").show()
        }
        else{
          $("#jpg").show()
          $("#cname").hide()
        }
      }) 
})