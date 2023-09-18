const sliderItem = document.querySelector(".slider_item"),
      paginationBtn = document.querySelector(".pagination_btn");

let position = 0,
    dotIndex = 0,
    dotsArea = document.getElementsByClassName("pagination"),
    dots = document.querySelectorAll('.pagination_btn');

//FUNCTIONS-------------------------------------------------------------------

const nextSlide = () => { 
    if (position < 5120) {
        position += 1024;
        dotIndex++;
    }        
    document.querySelector(".slider_item").style.left = -position + 'px';
    thisSlide(dotIndex);
    console.log(dotIndex);
}

const prevSlide = () => { 
    if (position > 0) {
        position -= 1024;
        dotIndex--;
        console.log(dotIndex);
    }     
    document.querySelector(".slider_item").style.left = -position + 'px';
    thisSlide(dotIndex);
    console.log(dotIndex);
}

const thisSlide = (index) => {
    for (let pagination_btn of dots) {
        pagination_btn.classList.remove('active_btn');
    }
    dots[index].classList.add('active_btn');
}

//----------------------------------------------------------------------------------------------

//carretRight.addEventListener('click',smallNextSlide)
//carretLeft.addEventListener('click',smallPrevSlide)
//console.log(dotIndex);

dots.forEach((pagination_btn, index) => {
    pagination_btn.addEventListener('click', () => {
        position = 1024 * index;
        sliderItem.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
    })
})

