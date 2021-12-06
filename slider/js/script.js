const slides = document.querySelectorAll('.slide'),
    next = document.getElementById('btn-next'),
    prev = document.getElementById('btn-prev'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDots = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const prepereCurrentSlide = () => {
    activeSlide(index);
    activeDots(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepereCurrentSlide(index);
      
    } else {
        index++;
        prepereCurrentSlide(index);
    }
}
const prevtSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepereCurrentSlide(index);
    } else {
        index--;
        prepereCurrentSlide(index);
    }
}
dots.forEach((item, indexDot) => {
    item.addEventListener('click', ()=>{
        index = indexDot;
        prepereCurrentSlide(index);
    })
});
// let timer = setInterval(function () {
//     nextSlide();
// }, 2000)

var timer;
next.addEventListener('click', function () {
  if (timer)
    timer = clearInterval(timer);
  else
    timer = setInterval(nextSlide, 2000);
});
prev.addEventListener('click', function(){
if(timer)
    timer = clearInterval(timer);
    else
    timer = setInterval(prevtSlide,2000);
});
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevtSlide);

