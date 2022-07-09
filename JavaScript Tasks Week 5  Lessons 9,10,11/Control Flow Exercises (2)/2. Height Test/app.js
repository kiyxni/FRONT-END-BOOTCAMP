// Control Flow Exercise 2: Height Test

/* 1. To go on the super dooper looper roller coaster your height
has to be equal or above to 150cm. */

/* 2. Use an if/else statement to log "You can go on the ride" if
the variable height is equal or above 150cm or "sorry you're not
tall enough" if the variable height is below 150cm. */

/* 3. Modify your if statement so that if height is not a number
the message "Please enter a number" is logged to the console. */

if (typeof varName !== "number") {
    console.log("Please enter a number!");
}

else if (number >= 150) {
    console.log ("You can go on the ride!");
}

else {
    console.log("Sorry you're not tall enough!");
}
