document.getElementById('mobileMenuBtn').addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('mobile-menu-active');
})

// ARROW BACK TO HEADER
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

document.getElementById('scrollTopBtn').addEventListener("click", function () {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
});