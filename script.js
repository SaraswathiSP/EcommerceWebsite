const bar= document.getElementById("bar");
const nav= document.getElementById("navbar");

const  close= document.getElementById("close");



if (bar) {
    bar.addEventListener("click", function() {
        nav.classList.add("active1");
    })
}
if (close) {
    close.addEventListener("click", function() {
        nav.classList.remove("active1");
    })
}

