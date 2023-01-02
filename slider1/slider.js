let nextbtn = document.getElementById("next-slide");
let previousbtn = document.getElementById("previous-slide");
let slide = document.getElementById("slide");
let slide_shadow = document.getElementById("slide-shadow");
let slide_title = document.getElementById("slide-title");

let imagenumber = 0;

// let sliders_url = [
//     './newimages/01.jpg',
//     './newimages/02.jpg',
//     './newimages/03.jpg',
//     './newimages/04.jpg',
//     './newimages/05.jpg',
// ]

let option_slide = {
    sliders_url: [
        './newimages/01.jpg',
        './newimages/02.jpg',
        './newimages/03.jpg',
        './newimages/04.jpg',
        './newimages/05.jpg',
    ],
    title: [
        "title1",
        "title2",
        "title3",
        "title4",
        "title5",
    ]

}
slide.setAttribute("src", option_slide.sliders_url[0]);
slide_shadow.setAttribute("src", option_slide.sliders_url[0]);
slide_title.innerText = option_slide.title[0];
function next() {
    imagenumber++;

    if (imagenumber > option_slide.sliders_url.length - 1) {
        imagenumber = 0;
    }
    // console.log(imagenumber)
    slide.setAttribute("src", option_slide.sliders_url[imagenumber])
    slide_shadow.setAttribute("src", option_slide.sliders_url[imagenumber])
    slide_title.innerText = option_slide.title[imagenumber];
}
function previous() {
    imagenumber--;
    if (imagenumber < 0) {
        imagenumber = option_slide.sliders_url.length - 1;
    }
    // console.log(imagenumber)
    slide.setAttribute("src", option_slide.sliders_url[imagenumber])
    slide_shadow.setAttribute("src", option_slide.sliders_url[imagenumber])
    slide_title.innerText = option_slide.title[imagenumber];
}

nextbtn.addEventListener("click", next)
previousbtn.addEventListener("click", previous)