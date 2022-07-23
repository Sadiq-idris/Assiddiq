let iconMenu = document.querySelector(".hamburger");
let closes = document.querySelector(".close");
let nav = document.querySelector(".menu");


iconMenu.addEventListener("click",hamburger);
closes.addEventListener("click",hamburger);



function hamburger(){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    
    if(menu.classList[1]){
        iconMenu.style.visibility = "hidden";
        
    }else{
        iconMenu.style.visibility = "visible";
    }
}

nav.addEventListener("click",link);

function link(){
    nav.classList.remove("show");
    iconMenu.style.visibility ="visible";
}

//  SHOW MORE BUTTON 
let show = document.querySelector("#show-more");
let box = document.querySelectorAll(".box-4");
let less = document.querySelector(".show-less");

show.addEventListener("click",showMore);
less.addEventListener("click",showLess);

function showMore(){
    less.style.display = "block";
    show.style.display = "none"; 
    
    for(i=0;i<box.length;i++){
        box[i].style.display = "block";
    }
}

function showLess(){
    less.style.display = "none";
    show.style.display = "block";
    
    for(i=0;i<box.length;i++){
        box[i].style.display = "none";
    }
}
