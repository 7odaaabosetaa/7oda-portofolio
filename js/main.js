let icon =  document.querySelector(".header-i");
let nav = document.querySelector("nav");
icon.onclick = function (){
    nav.classList.toggle("active");
}
let scrooll = document.getElementsByClassName("arrow")[0];

window.onscroll= ()=>{
    if (window.scrollY >= 1031){
    scrooll.style.display="block";
}else{
    scrooll.style.display="none";
}
}
scrooll.onclick= ()=>{
    window.scrollTo({
        top:0
    });
}