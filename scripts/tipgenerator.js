// A list (array) of tips  
    const maybetips = [
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

const tips = [
 "Tip 19: Never accept side quests from passerby's that involve visiting their stall",
 "Tip 28: The barter skill is important in India",
 "Tip 37: Thai prostitute's are known for having a third leg",
 "Tip 46: Remember, you need air to live",
 "Tip 55: Instant raman gives you +5 intelligence",
 "Tip 63: You can't fast travel when emotionally constioated",
 "Tip 73: Eating street food in india has a 60% chance to lower your constitution for several days",
 "Tip 82: Stealth isn't just for sneaking past shady merchants, its for avoiding tuk-tuk drivers",
 "Tip 18: Australia is reserved for experienced adventures, or criminals",
 "Tip 27: In India, cows have right of way. Especially on the motorway",
 "Tip 36: High dexterity is advised when crossing streets in Hanoi, Bangkok and Delhi",
 "Tip 45: 7-Eleven Ham and Cheese Toasties increase all skills by 10 for 30 minutes",
 "Tip 54: Not all prices are fixed. Use Insight to tell if the vendor made that number up after seeing your camera and flip-flops",
 "Tip 63: Disguise yourself if you want to pay local prices. Hawaiian shirts, sunburn and go-pros grant disadvantage",
 "Tip 72: Australian sun deals 1d12 radiant damage per hour. Sunscream is advised",
 "Tip 81: Avoid side quests by locals that involve buying powdered milk",
];

const tipdisplay = document.getElementById("tip-display");
const button = document.querySelector("#tip-generator button");

button.addEventListener("click", ()=> {
    const randomindex = Math.floor(Math.random() * tips.length)
    const randomTip = tips[randomindex]
    tipdisplay.textContent = randomTip
})