// A list (array) of tips
const tips = [
  "Tip 48: Remember, you need air to live.",
  "Tip 21: If something has more than one head, it probably wants to kill you.",
  "Tip 88: It's usually best to have somebody with actual navigation skills to fly a airplane.",
    "Tip 39: Bandits usually do not expect being robbed. You can use this to your advantage.",
    "Tip 4: Empty hallways make for great traps. Just make sure you're the one setting it.",
    "Tip 17: If the cave is too quiet, something is definitely breathing in there.",
    "Tip 34: Dont trust a glowing mushroom. Or do. Your call.",
    "Tip 91: If your sword breaks, scream confidently. They might just run.",
    "Tip 12: Maps lie. Trails lie. Your feet wont.",
    "Tip 57: A locked chest in the middle of nowhere is always a trap.",
    "Tip 73: Loot first, ask questions never.",
    "Tip 22: If a guild offers free cookies, its a cult.",
    "Tip 66: Check your backpack. Then check it again. You still forgot something.",
    "Tip 9: Just because its labeled “abandoned” doesnt mean its empty.",
    "Tip 42: Potions taste bad. If it tastes good, it's poison.",
    "Tip 29: Fire solves most problems. Including the ones you didnt mean to solve.",
    "Tip 77: Dont follow voices in the dark. Unless they owe you money.",
    "Tip 86: Skeletons dont need sleep. You do. Thats their advantage.",
    "Tip 23: Never accept a quest from someone smiling too much.",

];

const tipdisplay = document.getElementById("tip-display");
const button = document.querySelector("#tip-generator button");

button.addEventListener("click", ()=> {
    const randomindex = Math.floor(Math.random() * tips.length)
    const randomTip = tips[randomindex]
    tipdisplay.textContent = randomTip
})