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

const orkMap = {
  "Featured Work": "Da Best Workz",
  "About me": "Wot I's About",
  "Gallery": "Da Shootas' Gallery",
  "Contact": "Git In Touch",
  "Chris Paints Stuff": "Chris Paints Da Gitz",
  "Whether you’re looking for a single display model, a fully painted army, or a custom color scheme, I’m always happy to discuss your project. Reach out with your ideas, and let’s bring them to life.":
    "If ya wantz a single model or a whole army painted, I’z happy to chat. Tell me whatcha wantz and we’z make it happen!",
  "For commissions, quotes, or questions, the best way to get in touch is via Instagram direct message:": 
    "For jobs, prices, or yakkin', hit me up on Instagram:",
  "@chris_paints_stuff": "@chris_paints_gitz",  "With over 10 years of painting experience, I bring Warhammer armies to life in any faction and color scheme. Whether it’s a single hero model or a full tabletop-ready force, I deliver clean, detailed work tailored to your vision.": 
  "I'z been paintin' da gitz fer over 10 years! I bringz yer Warhammer armies to life in any color or clan ya wantz. Whether ya need a lone boss or a whole mob, I’z get it lookin’ pro and deadly.",

  "My process combines precision brushwork with airbrushing for smooth, professional finishes — and I work closely with clients to ensure every piece looks exactly as imagined.":
  "I’z use da best brush strokes and airbrushin’ to make da paint job smooth and shiny — an' I work close wif ya to make sure itz exactly how ya wantz it.",
  // Add more pairs as needed
};

const normalMap = {};
for (const key in orkMap) {
  normalMap[orkMap[key]] = key;
}

let isOrk = false;

document.getElementById('ork-toggle').addEventListener('click', () => {
  isOrk = !isOrk;
  document.getElementById('ork-toggle').setAttribute('aria-pressed', isOrk);
  toggleOrk(isOrk);
});

function toggleOrk(toOrk) {
  // Change h1
  const h1 = document.getElementById('title');
  h1.textContent = toOrk ? orkMap[h1.textContent] || h1.textContent : normalMap[h1.textContent] || h1.textContent;

  // Change all h2
  document.querySelectorAll('h2').forEach(h2 => {
    h2.textContent = toOrk ? orkMap[h2.textContent] || h2.textContent : normalMap[h2.textContent] || h2.textContent;
  });

  // Change all paragraphs
  document.querySelectorAll('section p').forEach(p => {
    p.textContent = toOrk ? orkMap[p.textContent] || p.textContent : normalMap[p.textContent] || p.textContent;
  });

  // Change Instagram link text (optional)
  const instaLink = document.querySelector('#contact a');
  if (instaLink) {
    instaLink.textContent = toOrk ? orkMap[instaLink.textContent] || instaLink.textContent : normalMap[instaLink.textContent] || instaLink.textContent;
  }
}