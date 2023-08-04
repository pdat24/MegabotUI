// scroll to top button action
(() => {
    const toTopBtn = document.querySelector(".to-top-btn");
    window.onscroll = () => {
        toTopBtn.style.transform = window.scrollY > 1000 ? "scale(1)" : "scale(0)";
    };
    toTopBtn.onclick = () => {
        window.scrollTo(0, 0);
    };
})();

(() => {
    let on = false;
    const menu = document.querySelector(".menu-btn");
    const menuDropdown = document.querySelector(".menu-dropdown");
    if (menu && menuDropdown) {
        menu.onclick = () => {
            menuDropdown.style.display = on ? "none" : "block";
            on = !on;
        };
    }
})();

// pointer effect
// (() => {
//     const ptrEffect = document.getElementById("pointer-effect");
//     const circleEffect = document.getElementById("ptr-effect-circle");
//     window.addEventListener("mousemove", (e) => {
//         // inner circle
//         ptrEffect.style.top = `${e.clientY - 5}px`;
//         ptrEffect.style.left = `${e.clientX - 5}px`;
//         // outter circle
//         circleEffect.style.top = `${e.clientY - 16}px`;
//         circleEffect.style.left = `${e.clientX - 16}px`;
//     })
// })()
