//Function Exercise 3: Welcome Message

/* 1. Create function called welcome. It should take two parameters: firstName and lastName 
+ 2. The function should return the string `Hello firstName lastName, how can i help you?` */

function welcome(firstName, lastName) {
return `Hello ${firstName} ${lastName}, how can i help you?`; 
}

// 3. Try console logging the function with your name as a parameter //

console.log(welcome("Waqar", "Kiyani"));
    //<<returns: Hello Waqar Kiyani, how can i help you?>>//

// 4. Modify the function so that the firstName is in lower case but the lastName is all caps //

function welcome(firstName, lastName) {
return `Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}, how can i help you?`; 
}
    //<<after adding console log again, returns: Hello waqar KIYANI, how can i help you?//
