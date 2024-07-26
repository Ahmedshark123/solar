const slides = document.querySelectorAll(".slide");

let counter = 0;


slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`

    }
)


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            slide.style.transistion = '0.3s all ease'
        }
    )
}




const goPrev = () => {
    counter--;
    slideImage();
}

const goNext = () => {
    counter++;
    slideImage();
}








