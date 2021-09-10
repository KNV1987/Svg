const mainBtn = document.querySelector(".main_btn");
const modalBtnClose = document.querySelector(".modal__close");
const modalWindow = document.querySelector(".modal");
const svgHome = document.querySelectorAll(".main__home path");
const floatText = document.querySelector(".float_text");
const btnFloatUp = document.querySelector(".float_up")
const btnFloatDown = document.querySelector(".float_down")
const svgFloat = document.querySelectorAll(".float-svg path");
const floatItem = document.querySelectorAll(".modal__room-nav li");



mainBtn.addEventListener("click", addClose);
modalBtnClose.addEventListener("click", addClose);

svgHome.forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.opacity = 1;
        if (el.dataset.float < 10) floatText.innerHTML = "0" + el.dataset.float;
        else floatText.innerHTML = el.dataset.float;
    });
    el.addEventListener("mouseout", () => {
        el.style.opacity = 0;
    });
    el.addEventListener("click", addClose);
});

btnFloatUp.addEventListener("click", () => floatCount(true));
btnFloatDown.addEventListener("click", () => floatCount(false));

floatItem.forEach(item => {
    styleOpacity(item, svgFloat[item.dataset.room])
})
svgFloat.forEach(item => { 
    styleOpacity(item, item)
})

function addClose() {
    modalWindow.classList.toggle("close");
};

function floatCount(flag) {
    let count = floatText.innerHTML;
    if (flag) count++;
    else count--;
    svgHome.forEach(el => {
        el.style.opacity = 0;
        if (el.dataset.float == count) {
            el.style.opacity = 1;
        }
    })
    if (count < 2) count = floatText.innerHTML;
    else if (count < 10) floatText.innerHTML = "0" + count;
    else if (count > 18) count = floatText.innerHTML;
    else floatText.innerHTML = count;
}

function styleOpacity(item, teg){
    item.addEventListener("mouseover", () => {
        teg.style.opacity = 1;
    });
    item.addEventListener("mouseout", () => {
        teg.style.opacity = 0;
    });
}


