//= require jquery3
//= require popper
//= require bootstrap-sprockets

var initialAnim = 1000

var headline = {
    distance: '20%',
    origin: 'bottom',
    opacity: 0,
    duration: initialAnim,
    easing: 'ease-out'
};

var marketingBoxes = {
  delay: initialAnim, 
  interval: 250, 
  opacity: 0,
  duration: 500,
  easing: 'ease-in'
};

var venue = {
  delay: initialAnim, 
  opacity: 0,
  duration: 500,
  easing: 'ease-in'
}

var speaker = {
  interval: 250,
  opacity: 0,
  duration: 350,
  easing: 'ease-in'
}

ScrollReveal().reveal('.headline', headline);
// ScrollReveal().reveal('.headline', { duration: 2000 });
ScrollReveal().reveal('.marketing-box', marketingBoxes);
ScrollReveal().reveal('.venue', venue);
ScrollReveal().reveal('.speaker', speaker);

// var node = document.querySelector('#cake');
// var nodeList = document.querySelectorAll('.cookies');
// var nodeArray = [
//     document.querySelector('#pie'),
//     document.querySelector('#spoon'),
//     document.querySelector('#ice-cream')
// ];

// ScrollReveal().reveal(node);
// ScrollReveal().reveal(nodeList);
// ScrollReveal().reveal(nodeArray);


// ScrollReveal().reveal('.item', { delay: 250 });
// ScrollReveal().reveal('.item', { duration: 500 });
// ScrollReveal().reveal('.item', { delay: 375, reset: true });

// // Is the same as...

// ScrollReveal().reveal('.item', {
//     delay: 375,
//     duration: 500,
//     reset: true
// });