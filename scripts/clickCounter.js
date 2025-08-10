const countEl = document.getElementById("count");
const incrementbtn = document.getElementById("increment");
const resetbtn = document.getElementById("reset");
let count = 0;

incrementbtn.addEventListener("click", ()=> {
    count++;
    countEl.innerText = count;

});

resetbtn.addEventListener("click", () => {
    count= 0;
    countEl.innerText =count;
});
