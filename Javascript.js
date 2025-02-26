// Step 1: Personalized Greeting (3 Marks)
// Prompt the user to enter their first name
let userName = prompt("Please enter your first name:");

// If the input is empty, assign "Guest" as the default name
if (!userName) {
    userName = "Guest";
}


alert(`Welcome to EatNow cafe, ${userName}!`);

// Step 3: Display Menu Items in Console (5 Marks)
// Create an array containing five unique menu items
let menuItems = ["Grilled Chicken", "Pasta Carbonara", "Caesar Salad", "Margherita Pizza", "Chocolate Cake"];

// Use a loop to print the menu items in the console
console.log("Menu:");
menuItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// Step 4: Adding a New Dish (3 Marks)
// Ask the user to suggest a new dish
let newDish = prompt("Suggest a new dish to add to the menu:");

// Validate the input and add the new dish if valid
if (newDish) {
    menuItems.push(newDish);
    console.log("Updated Menu:");
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    console.log("No new dish added. Please enter a valid dish name.");
}
