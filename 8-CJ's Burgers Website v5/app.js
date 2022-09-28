
//SLIDESHOW JS


let slideIndex= 1;
showSlides (slideIndex);

//Next/previous controls 
function plusSlides (n) {
    showSlides (slideIndex +=n);
}

//thumbnail image controls
function currentSlide (n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    let i;
    let slides= document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");

    if (n> slides.length) {slideIndex=1}
    if (n<1) {slideIndex = slides.length}

    for (i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    
    //the dot class name is replaced with active when interacted with
    for (i=0; i < dots.length; i++){
        dots [i].className = dots[i].className.replace("active","");
    }

 
    slides[slideIndex-1].style.display = "block";

    //when the user goes back a slide, dot class name changes to active
    //dots(slideIndex-1).className += "active";


}
