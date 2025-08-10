// Selecting Elements
document.getElementById("id");          // Single element by ID
document.querySelector(".class");       // First matching element
document.querySelectorAll("div");       // NodeList (like an array)

// Changing Content
element.innerText = "Hello";            // Text only
element.textContent = "Hi";             // Similar to innerText, ignores CSS
element.innerHTML = "<b>Bold</b>";      // Can insert HTML tags

// Changing Styles
element.style.color = "red";
element.style.backgroundColor = "#333";

// Attributes
element.getAttribute("type");           // Get value
element.setAttribute("type", "text");   // Set value

// Events
element.addEventListener("click", () => {
  console.log("Clicked!");
});

// Creating Elements
const newEl = document.createElement("div");
newEl.innerText = "I’m new here!";
parentEl.appendChild(newEl);

// Removing Elements
element.remove();

// Timing
setInterval(() => { /* runs every x ms */ }, 1000);
setTimeout(() => { /* runs once after x ms */ }, 2000);

// Random number from 0 to length-1
Math.floor(Math.random() * arr.length);