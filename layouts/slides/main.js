//Dependencies: jQuery

function scrollpage(str) {
    $('html,body').animate({
            scrollTop: $(str).offset().top
        },
        'slow'
    );
}

let slides = $('.slides').children();
let dots = $('.dots').children();
let slidePointer = 0;
let isKeyPressed = false;

document.onkeydown = (event) => {
    let key = event.which;
    // console.log(key);
    if (!isKeyPressed && (key == 40)) {
        if (slidePointer == slides.length - 1)
            return;
        scrollpage(slides[++slidePointer]);
        // console.log("key down"+slidePointer);
        isKeyPressed = true;
    }
    if (!isKeyPressed && (key == 38)) {
        if (slidePointer == 0)
            slidePointer++;
        scrollpage(slides[--slidePointer]);
        // console.log("key down"+slidePointer);
        isKeyPressed = true;
    } 
    updateDots();
    console.log(slidePointer);
}

document.onkeyup = () => {
    // console.log("key up");
    isKeyPressed = false;
}


function updateDots(){
	for(var i=0; i<dots.length; i++){
		$(dots[i]).removeClass('active');
	}
	$(dots[slidePointer]).addClass('active');
}