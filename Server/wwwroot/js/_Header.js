const dropBlock = document.querySelector(".ul-pages");
const linkDrop = document.querySelector(".link-drop");
let timeLeave;
linkDrop.onmouseenter = () => {
    clearTimeout(timeLeave);
    dropBlock.style.display = "block";
    setTimeout(() => {
        dropBlock.style.transform = "translateY(0)";
        dropBlock.style.opacity = "1";
    }, 10);
};
linkDrop.onmouseleave = () => {
    dropBlock.style.transform = "translateY(-24px)";
    dropBlock.style.opacity = "0";
    timeLeave = setTimeout(() => {
        dropBlock.style.display = "none";
    }, 500);
};

const sublinkToggle = document.querySelector(".sublink-toggle");
const modelSublink = document.querySelector(".model__sublink");
sublinkToggle.onclick = () => {
    if (window.getComputedStyle(modelSublink).display == "none") {
        modelSublink.style.display = "block";
    } else {
        modelSublink.style.display = "none";
    }
};

function closeModel() {
    const model = document.querySelector(".model");
    const cover = document.querySelector(".cover");
    document.body.style.overflow = "auto";
    cover.style.opacity = 0;
    setTimeout(() => {
        cover.style.display = "none";
    }, 500);
    setTimeout(() => {
        model.style.transform = "translateX(-100%)";
    }, 250);
}
function openModel() {
    const model = document.querySelector(".model");
    document.body.style.overflow = "hidden";
    const cover = document.querySelector(".cover");
    cover.style.display = "block";
    setTimeout(() => {
        cover.style.opacity = 1;
    }, 10);
    setTimeout(() => {
        model.style.transform = "translateX(0)";
    }, 250);
}
document.querySelector(".cover").onclick = closeModel;
document.querySelector(".close-btn").onclick = closeModel;
document.querySelector(".nav-drop").onclick = openModel;
