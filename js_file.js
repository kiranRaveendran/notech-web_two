let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToshow = 3;
// if (document.body.clientWidth < 300) {
//    elementsToshow = 1;
// } else if (document.body.clientWidth < 700) {
//    elementsToshow = 2;
// } else {
//    elementsToshow=3;
// }

let sliderContainerwidth = sliderContainer.clientWidth;
//clientWidth will return the value of the width of the corrently pointing element body.

let cardwidth = sliderContainerwidth / elementsToshow;

slider.style.width = cards.length * cardwidth +'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';


for (let index = 0; index < cards.length; index++){
    const element = cards(index);
    element.style.width = cardwidth+ 'px';
}

function Prev() {
     if(+slider.style.marginLeft.slice(0,-2)!= -cardwidth*(cards.length-elementsToshow)){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardwidth) + 'px';
    }
    
}

function Next() {
    if(+slider.style.marginLeft.slice(0,-2)!=0){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardwidth) + 'px';
    }
}


const infiniteScroll = document.querySelector('.infinite-scroll');

infiniteScroll.addEventListener('scroll', function() {
  if (infiniteScroll.scrollLeft === infiniteScroll.scrollWidth) {
    infiniteScroll.scrollLeft = 0;
  }else{} 
});
