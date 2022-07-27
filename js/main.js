

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',(e) => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// consulting sevices
var splide = new Splide('.cons-services .splide', {
    type: 'loop',
    perPage: 3,
    rewind: true,
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            height: '12rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '12rem',
        },
    },
});
splide.mount();


var splide = new Splide('.partener .splide', {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: false,
    speed: 500,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    type: 'loop',
    perPage: 1,
    rewind: true,
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            height: '12rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '12rem',
        },
    },
});
splide.mount();

// go to top arrow

//Get the button
var mybutton = document.getElementById("Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}