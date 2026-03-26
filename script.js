let sun = document.getElementById("sun");
let html = document.documentElement;
function toggleMode(x){
    let currentTheme = html.getAttribute("data-bs-theme");
    if (currentTheme && localStorage.getItem("theme") == "light"){
        html.setAttribute("data-bs-theme","dark")
        localStorage.setItem("theme","dark")
        sun.setAttribute("class","bi bi-moon-fill")
    }else if(currentTheme&& localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme","light")
        html.setAttribute('data-bs-theme', 'light');
        sun.setAttribute("class","bi bi-sun-fill")
    }
}
if(localStorage.getItem("theme") == "dark"){
    html.setAttribute("data-bs-theme","dark")
    sun.setAttribute("class","bi bi-moon-fill")
}else{
    html.setAttribute('data-bs-theme', 'light');
    localStorage.setItem("theme","light")
    sun.setAttribute("class","bi bi-sun-fill")
}
const filterButtons = document.querySelectorAll('.show-c .btn-s');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('selected-filter'));
        
        this.classList.add('selected-filter');
    });
});
filterButtons[0].classList.add('selected-filter');
const modal = document.getElementById("imageModal");
const fullImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.card').forEach(card => {
    const zoomBtn = card.querySelector('.fa-magnifying-glass').parentElement;
    
    zoomBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = card.querySelector('img').src;
        modal.style.display = "flex";
        fullImg.src = imgSrc;
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }