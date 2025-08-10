const emojiEl = document.getElementById('emoji');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

const emojis = [
    "😀","😅","😂","🤣","😊","😍","😘",
      "🤩","😎","🤔","😴","😬","😇","🤯",
      "🥳","😡","🤢","🤠","👻","🎃","🦄",
      "🌞","🌈","🔥","💧","🍕","🍩","🍓",
      "⚽️","🎧","🎵","🚀","🏝️","🌋","🌙"
];

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const showRandomEmoji = () => {
    const idx = getRandomIndex(emojis);
    emojiEl.innerText = emojis[idx]; 
};
 generateBtn.addEventListener('click', showRandomEmoji);