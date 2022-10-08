// image hide

window.onscroll = function()
{
    myFunction();
}

function myFunction(){
    var naving = document.getElementById("jpg");
    var navbar = document.getElementById("pnav");
    var picky = navbar.offsetTop;

    if(window.pageYOffset >= picky){
        naving.style.display = "none";
        document.getElementById("cname").style.display="block";
    }
    else{
        naving.style.display = "block";
        document.getElementById("cname").style.display="none";
    }
}


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