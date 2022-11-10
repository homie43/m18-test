"useStrict";

const wholeSlider = document.querySelector(".slider__wrapper"),
    slides = document.querySelectorAll(".slider__item"),
    prev = document.querySelector(".slider__btn-left"),
    next = document.querySelector(".slider__btn-rigth");

prev.addEventListener("click", function () {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("slider__item-active") && i !== 0) {
            slides[i].classList.remove("slider__item-active");
            slides[i].previousElementSibling.classList.add(
                "slider__item-active"
            );

            if (i === 1) {
                wholeSlider.style.transform = "translate(0px)";
            } else {
                wholeSlider.style.transform = "translate(-25%)";
            }
        }
    }
});

next.addEventListener("click", function () {
    for (let k = slides.length - 1; k >= 0; k--) {
        if (slides[k].classList.contains("slider__item-active") && k !== 2) {
            slides[k].classList.remove("slider__item-active");
            slides[k].nextElementSibling.classList.add("slider__item-active");

            if (k === 1) {
                wholeSlider.style.transform = "translate(-50%)";
            } else {
                wholeSlider.style.transform = "translate(-25%)";
            }
        }
    }
});
