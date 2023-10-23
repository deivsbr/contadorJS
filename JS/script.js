const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;

function updateCount() {
    countElement.textContent = count;
    console.log(count);
}

incrementButton.addEventListener("click", function () {
    count++;
    updateCount();
});

decrementButton.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateCount();
    }
});

updateCount();
