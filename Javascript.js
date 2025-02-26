let userName = "Guest"; // Default name
let menuItems = ["Grilled Chicken", "Pasta Carbonara", "Caesar Salad", "Margherita Pizza", "Chocolate Cake"];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("greetButton").addEventListener("click", greetUser);
    document.getElementById("menuButton").addEventListener("click", showMenu);
    document.getElementById("addDishButton").addEventListener("click", addDish);
});

function greetUser() {
    let nameInput = prompt("Please enter your first name:");
    
    // If the input is empty, assign "Guest" as the default name
    if (!nameInput) {
        userName = "Guest";
    } else {
        userName = nameInput;
    }

    alert(`Welcome to EatNow cafe, ${userName}!`);
}

function showMenu() {
    console.clear(); // Clears the console before displaying the menu
    console.log("Menu:");
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

function addDish() {
    let newDish = prompt("Suggest a new dish to add to the menu:");

    if (newDish && newDish.trim() !== "") {
        menuItems.push(newDish);
        console.clear();
        console.log("Updated Menu:");
        menuItems.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    } else {
        console.log("No new dish added. Please enter a valid dish name.");
    }
}
