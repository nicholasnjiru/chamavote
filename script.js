function generateNumbers() {
    const numbersContainer = document.getElementById("numbers");
    numbersContainer.innerHTML = ""; // Clear previous numbers

    const numberCount = document.getElementById("numberCount").value;
    if (!numberCount || numberCount <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    // Generate numbers
    const numbers = [];
    for (let i = 1; i <= numberCount; i++) {
        numbers.push(i);
    }

    // Shuffle numbers
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Create buttons with hidden numbers
    numbers.forEach(number => {
        const button = document.createElement("button");
        button.classList.add("number-button");
        button.textContent = "?";
        button.onclick = function() {
            askForNameAndRevealNumber(button, number);
        };
        numbersContainer.appendChild(button);
    });
}

function askForNameAndRevealNumber(button, number) {
    const voterName = prompt("Please enter your name:");
    if (voterName && voterName.trim()) {
        button.textContent = `${voterName.trim()}: ${number}`;
        button.classList.add("revealed");
        button.disabled = true;
    } else {
        alert("Name cannot be empty.");
    }
}
