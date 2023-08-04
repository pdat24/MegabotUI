let on = true;
const groupToggleBtn = document.querySelectorAll(".ft-group__toggle");
groupToggleBtn.forEach(item => {
    item.onclick = () => {
        if (parseFloat(window.innerWidth) < 576) {
            item.nextElementSibling.style.display = on ? "block" : "none";
            on = !on;
        }
    }
})