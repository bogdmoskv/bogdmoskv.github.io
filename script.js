var first = document.querySelector('.imgSlide1');
var second = document.querySelector('.imgSlide2');
var third = document.querySelector('.imgSlide3');
let scrWidth = $(window).width();
setImage(scrWidth);

function setImage(scrWidth){
    if(scrWidth < 1200){
        first.src="images/phone_slide1.png"
        second.src="images/phone_slide1.png"
        third.src="images/phone_slide1.png"
    }
    if(scrWidth > 1200){
        first.src="images/slide_1.png"
        second.src="images/slide_2.png"
        third.src="images/slide_3.png"
    }
};
   


  $(window).resize(function() {
    var scrWidth = $(window).width();
    setImage(scrWidth);
});