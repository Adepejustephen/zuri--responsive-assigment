let toggle = () => {
    const toggleBar = document.querySelector('.hamburger-menu');
    const header = toggleBar.parentElement

    toggleBar.addEventListener('click', () => {
        header.classList.toggle('active')
    });


}

toggle();
window.addEventListener("scroll", function () {
    let scrollHeader = document.querySelector(".nav-bar")
    let allLines = document.querySelectorAll(".line")
    let logo = document.querySelector('.logo')
    scrollHeader.classList.toggle('sticky', window.scrollY > 0)
    allLines.forEach((line) => {
        line.classList.toggle('sticky', window.scrollY > 0);
    })
    logo.classList.toggle('sticky', window.scrollY > 0)
    
})