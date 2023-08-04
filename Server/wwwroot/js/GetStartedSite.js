// page thumbnails
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((item) => {
    fireAnimation(
        () => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        },
        item,
        0.3
    );
});

// feature section header
const bottomHeader = document.querySelector(".bottom__header");
fireAnimation(() => {
    bottomHeader.style.transform = "translateY(0)";
    bottomHeader.style.opacity = "1";
}, bottomHeader);

// laptop image
const laptop = document.querySelector(".laptop");
fireAnimation(() => {
    laptop.style.transform = "scale(1)";
}, laptop);

const laptopWrapper = document.querySelector(".laptop-wrapper");
// laptop left
const laptopLeft = document.querySelector(".laptop-left");
fireAnimation(() => {
    laptopLeft.style.transform = "translateX(0)";
    laptopLeft.style.opacity = "1";
}, laptopWrapper);

// laptop riht
const laptopRight = document.querySelector(".laptop-right");
fireAnimation(() => {
    laptopRight.style.transform = "translateX(0)";
    laptopRight.style.opacity = "1";
}, laptopWrapper);

// top__title
const topTitle = document.querySelector(".top__title");
fireAnimation(() => {
    topTitle.style.transform = "translateY(0)";
    topTitle.style.opacity = "1";
}, topTitle);

const topLabel = document.querySelector(".top__label");
fireAnimation(() => {
    topLabel.style.transform = "translateY(0)";
    topLabel.style.opacity = "1";
}, topLabel);

// core header
const coreHeader = document.querySelector(".core__header");
fireAnimation(() => {
    coreHeader.style.transform = "translateY(0)";
    coreHeader.style.opacity = "1";
}, coreHeader);

// features div
const coreItems = document.querySelectorAll(".core__items");
coreItems.forEach((item) => {
    fireAnimation(() => {
        item.style.transform = "scale(1)";
        item.style.opacity = "1";
    }, item);
});

// text writter
let charIndex = 0;
const textWritter = document.querySelector(".text-writter");
const content = "Megabot is a template for an AI chatbot landing page with conversing user interface pages.";
async function writeTotal() {
    textWritter.innerHTML += content.charAt(charIndex++);
    await new Promise((resolve) => setTimeout(resolve, 50));
    if (charIndex < content.length) writeTotal();
}

setTimeout(writeTotal, 1000);
