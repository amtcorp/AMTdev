window.onload = function () {
document.querySelector('.container1').classList.add('animate');
 setTimeout(() => {
document.querySelector('header').classList.remove('reduce');
    }, 500);
 setTimeout(() => {
document.querySelector('#bottommsg').classList.add('animate');
    }, 700);
}


  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

 setTimeout(() => {
        entry.target.classList.add('animate'); // Ajoutez une classe CSS pour l'animation
document.querySelector('.container1').style.backdropFilter = "blur(3px)";
document.querySelector('.container1').style['-webkit-backdrop-filter'] = "blur(3px)";
    }, 300);

      }
    });
  }

  const observer = new IntersectionObserver(callback);

  const container2 = document.querySelector('.container2');

  observer.observe(container2);

document.querySelector('section').addEventListener('scroll', function() {
BottomMsg = document.querySelector('#bottommsg');
if (BottomMsg.classList.contains('animate')) {
document.querySelector('#bottommsg img').classList.add('animate');
BottomMsg.classList.remove('animate');
} else {

}
header = document.querySelector('header');
header.classList.add('reduce');
if (header.classList.contains('extand')) {
header.classList.remove('reduce');
} else {
header.classList.add('reduce');
}
});

header = document.querySelector('header');
navbaropenbtn = document.querySelector('header #logo');
navbaropenbtn.addEventListener('click', () => {
if (header.classList.contains('reduce')) {
header.classList.remove('reduce');
} else {
header.classList.add('reduce');
}

});

  function callback1(entries, observer2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {


      } else {


}
    });
  }

  const observer2 = new IntersectionObserver(callback1);

  const container3 = document.querySelector('.container3 #text2');

  observer2.observe(container3);

