const images = [
    'images/Troll1.jpg',
    'images/Knight.jpg',
    'images/Lizardmen.jpg',
    'images/Slaanesh1.jpg',
    'images/Tree1.jpg',
    'images/Belakor.jpg'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');

function changeImage(){
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

setInterval(changeImage, 5000);