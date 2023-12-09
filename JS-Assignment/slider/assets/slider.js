let slides = document.querySelectorAll('.slide');
let flag = 0;
slideImageright();
function leftright(i) {
    flag += i;
    if (flag > slides.length - 1) {
        flag = 0;
    }
    if(flag < 0){
        flag = slides.length - 1;
    }

    if(i == 1){
        slideImageright();
        for (const slide of slides) {
            if (slide.classList.contains('deactive') == true) {
                slide.style.transform = 'translateX(980px)';
            }else{
                slide.style.transform = '';
            }
        }
    }
    if(i == -1){
        slideImageleft();
        for (const slide of slides) {
            if (slide.classList.contains('deactive') == true) {
                slide.style.transform = '';
            }else{
                slide.style.transform = '';
            }
        }
    }
}
function slideImageright() {
    adddective();
    slides[flag].classList.remove('deactive');
    slides[flag].classList.add('active3');
    if (flag == 0) {
        slides[slides.length - 2].classList.remove('deactive');
        slides[slides.length - 2].classList.add('active1');
        slides[slides.length - 1].classList.remove('deactive');
        slides[slides.length - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[flag + 2].classList.remove('deactive');
        slides[flag + 2].classList.add('active5');
    } else if (flag == 1) {
        slides[slides.length - 1].classList.remove('deactive');
        slides[slides.length - 1].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[flag + 2].classList.remove('deactive');
        slides[flag + 2].classList.add('active5');
    } else if (flag == slides.length - 2) {
        slides[flag - 2].classList.remove('deactive');
        slides[flag - 2].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[0].classList.remove('deactive');
        slides[0].classList.add('active5');
    } else if (flag == slides.length - 1) {
        slides[flag - 2].classList.remove('deactive');
        slides[flag - 2].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[0].classList.remove('deactive');
        slides[0].classList.add('active4');
        slides[1].classList.remove('deactive');
        slides[1].classList.add('active5');
    } else {
        slides[flag - 2].classList.remove('deactive');
        slides[flag - 2].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[flag + 2].classList.remove('deactive');
        slides[flag + 2].classList.add('active5');
    }
}
function slideImageleft() {
    adddective();
    slides[flag].classList.remove('deactive');
    slides[flag].classList.add('active3');
    console.log(flag)
    // debugger;
    if (flag == slides.length - 1) {
        slides[flag - 2].classList.remove('deactive');
        slides[flag - 2].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[0].classList.remove('deactive');
        slides[0].classList.add('active4');
        slides[1].classList.remove('deactive');
        slides[1].classList.add('active5');
    }else if(flag == slides.length - 2){
        // debugger
        slides[flag - 2].classList.remove('deactive');
        slides[flag - 2].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[slides.length - 1].classList.remove('deactive');
        slides[slides.length - 1].classList.add('active4');
        slides[1].classList.remove('deactive');
        slides[1].classList.add('active5');
    }if (flag == 1) {
        slides[slides.length - 1].classList.remove('deactive');
        slides[slides.length - 1].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[flag + 2].classList.remove('deactive');
        slides[flag + 2].classList.add('active5');
    }else if(flag == 0){
        slides[slides.length - 2].classList.remove('deactive');
        slides[slides.length - 2].classList.add('active1');
        slides[slides.length - 1].classList.remove('deactive');
        slides[slides.length - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[flag + 2].classList.remove('deactive');
        slides[flag + 2].classList.add('active5');
    }else {
        slides[flag - 2].classList.remove('deactive');
        slides[flag - 2].classList.add('active1');
        slides[flag - 1].classList.remove('deactive');
        slides[flag - 1].classList.add('active2');
        slides[flag + 1].classList.remove('deactive');
        slides[flag + 1].classList.add('active4');
        slides[flag + 2].classList.remove('deactive');
        slides[flag + 2].classList.add('active5');
    } 
}

function adddective(num) {
    for (const i of slides) {
        i.classList.add('deactive');
        if (i.classList.contains('active1') == true) { i.classList.remove('active1') }
        if (i.classList.contains('active2') == true) { i.classList.remove('active2') }
        if (i.classList.contains('active3') == true) { i.classList.remove('active3') }
        if (i.classList.contains('active4') == true) { i.classList.remove('active4') }
        if (i.classList.contains('active5') == true) { i.classList.remove('active5') }
    }
}