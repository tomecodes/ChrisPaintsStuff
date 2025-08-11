const images = [
    'images/Troll1.jpg',
    'images/Knight.jpg',
    'images/Lizardmen.jpg',
    'images/Slaanesh1.jpg',
    'images/Tree1.jpg',
    'images/Belakor.jpg'
];

let currentIndex = 0;

function changeImage() {
  
  slideshow.classList.add('fade-out');


  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
    slideshow.classList.remove('fade-out');
  }, 500); 
}


setInterval(changeImage, 4000);