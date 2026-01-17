const menu=document.querySelector(".social-menu");
const toggle=document.querySelector(".social-toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})