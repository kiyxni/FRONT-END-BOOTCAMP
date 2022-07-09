// Function Exercise 4: Temperature Converter

/* 1. Create a function called temperatureConverter 
+ 2. The function should take in one parameter called Fahrenheit */

function temperatureConverter(fahrenheit) 

/* 3. The function should return the temperature in celsius using the following formula:
Celsius = (Fahrenheit - 32) x 5/9 */

function temperatureConverter(fahrenheit) {
return (fahrenheit - 32) * 5/9;
}

// 4. Try console logging function with different numbers as the parameter 
console.log(temperatureConverter(100));
    //<< returns: 37.7777777 >>//

console.log(temperatureConverter(85));
    //<< returns: 29.4444444 >>//

console.log(temperatureConverter(400));
    //<< returns: 204.444444 >>//