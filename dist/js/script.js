"useStrict";

window.addEventListener("DOMContentLoaded", () => {
    const wholeSlider = document.querySelector(".slider__wrapper"),
        slides = document.querySelectorAll(".slider__item"),
        prev = document.querySelector(".slider__btn-left"),
        next = document.querySelector(".slider__btn-rigth"),
        form = document.querySelector("form"),
        submitWindow = document.querySelector(".submit");

    const mediaMin = window.matchMedia("(max-width: 1440px)");

    const mySlider = () => {
        prev.addEventListener("click", () => {
            for (let i = 0; i < slides.length; i++) {
                if (slides[i].classList.contains("slider__item-active") && i !== 0) {
                    slides[i].classList.remove("slider__item-active");
                    slides[i].previousElementSibling.classList.add("slider__item-active");

                    if (i === 1) {
                        wholeSlider.style.transform = "translate(0%)";
                    } else {
                        wholeSlider.style.transform = "translate(-25%)";
                    }

                    if (mediaMin.matches) {
                        if (i === 1) {
                            wholeSlider.style.transform = "translate(-4%)";
                        } else {
                            wholeSlider.style.transform = "translate(-32%)";
                        }
                    }
                }
            }
        });

        next.addEventListener("click", () => {
            for (let k = slides.length - 1; k >= 0; k--) {
                if (slides[k].classList.contains("slider__item-active") && k !== 2) {
                    slides[k].classList.remove("slider__item-active");
                    slides[k].nextElementSibling.classList.add("slider__item-active");

                    if (k === 1) {
                        wholeSlider.style.transform = "translate(-50%)";
                    } else {
                        wholeSlider.style.transform = "translate(-25%)";
                    }

                    if (mediaMin.matches) {
                        if (k === 1) {
                            wholeSlider.style.transform = "translate(-61%)";
                        } else {
                            wholeSlider.style.transform = "translate(-32%)";
                        }
                    }
                }
            }
        });
    };

    const postData = () => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            submitWindow.style.display = "block";
        });
    };

    mySlider();
    postData();
});
