let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
       search.classList.toggle("active");
}




let header =  Document.querySelector('header')

window.addEventListener('scroll' , () => {
       header.classList.toggle('shadow',window.scrollY > 0);
});