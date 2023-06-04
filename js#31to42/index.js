// Get the current date and time
var currentDate = new Date();

// Convert the date to a string
var dateString = currentDate.toDateString();

// Convert the time to a string
var timeString = currentDate.toLocaleTimeString();

// Display the current date and time in the browser
document.write("Current Date: " + dateString + "<br>");
document.write("Current Time: " + timeString);
// Get the current date
var currentDate = new Date();

// Get the current month as a number (0 - 11)
var currentMonth = currentDate.getMonth();

// Define an array of month names
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Get the month name corresponding to the current month
var currentMonthName = monthNames[currentMonth];

// Alert the current month name
alert("Current Month: " + currentMonthName);
// Get the current date
var currentDate = new Date();

// Define an array of day names
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the current day as a number (0 - 6)
var currentDay = currentDate.getDay();

// Get the first three letters of the current day name
var currentDayLetters = dayNames[currentDay];

// Alert the first three letters of the current day
alert("Current Day: " + currentDayLetters);
// Get the current date
var currentDate = new Date();

// Get the current day as a number (0 - 6)
var currentDay = currentDate.getDay();

// Check if today is Saturday (6) or Sunday (0)
if (currentDay === 6 || currentDay === 0) {
  // Display the "It's Fun day" message if it's Saturday or Sunday
  document.write("It's Fun day");
} else {
  // Display a different message for other days of the week
  document.write("It's not Fun day");
}
// Get the current date
var currentDate = new Date();

// Get the current day of the month
var currentDay = currentDate.getDate();

// Check if the current date is less than 16th of the month
if (currentDay < 16) {
  // Display the "First fifteen days of the month" message
  document.write("First fifteen days of the month");
} else {
  // Display the "Last days of the month" message
  document.write("Last days of the month");
}
// Get the current date and time
var currentDate = new Date();

// Get the number of milliseconds since midnight, Jan. 1, 1970
var millisecondsSince1970 = currentDate.getTime();

// Convert milliseconds to minutes
var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// Assign the minutes since 1970 to a new variable
var minutesSinceMidnight = minutesSince1970;

// Display the minutes since midnight, Jan. 1, 1970
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);
// Get the current date and time
var currentDate = new Date();

// Get the current hour (in 24-hour format)
var currentHour = currentDate.getHours();

// Check if it's before noon (i.e., less than 12)
if (currentHour < 12) {
  // Alert "It's AM" if it's before noon
  alert("It's AM");
} else {
  // Alert "It's PM" if it's noon or after
  alert("It's PM");
}
// Create a Date object for the last day of the last month of 2020
var laterDate = new Date(2020, 11, 31);

// Display the value of laterDate in the browser console
console.log("Later Date:", laterDate);
// Create a Date object for the starting date of Ramadan (June 18, 2016)
var startingDate = new Date(2016, 5, 18); // Months are zero-based (June is month 5)

// Get the current date
var currentDate = new Date();

// Calculate the number of milliseconds between the current date and the starting date of Ramadan
var millisecondsPassed = currentDate - startingDate;

// Convert milliseconds to days
var daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));

// Alert the number of days that have passed since 1st Ramadan
alert("Number of days past since 1st Ramadan: " + daysPassed);
// Set the reference date
var referenceDate = new Date("January 1, 2016");

// Set the beginning of 2016
var beginningOf2016 = new Date("January 1, 2016");

// Set the time to 00:00:00
beginningOf2016.setHours(0, 0, 0, 0);

// Calculate the number of seconds between the reference date and the beginning of 2016
var secondsElapsed = Math.floor((referenceDate - beginningOf2016) / 1000);

// Display the number of seconds elapsed in the browser
document.write("Seconds elapsed since the beginning of 2016: " + secondsElapsed);
// Create a Date object for the current date and time
var currentDate = new Date();

// Extract the hours from the current date
var currentHours = currentDate.getHours();

// Reset the date object one hour ahead
currentDate.setHours(currentHours + 1);

// Display the updated date object in the browser
document.write("Updated Date: " + currentDate);
// Create a Date object for the current date and time
var currentDate = new Date();

// Reset the date object 100 years back
currentDate.setFullYear(currentDate.getFullYear() - 100);

// Display the date in an alert box
alert("Date 100 years back: " + currentDate);
// Prompt the user for customer name and current month
var customerName = prompt("Enter Customer Name:");
var currentMonth = prompt("Enter Current Month:");

// Generate random values for bill components
var unitsConsumed = Math.random() * 200; // Random units consumed between 0 and 200
var unitPrice = Math.random() * 15; // Random unit price between 0 and 15

// Calculate total amount
var totalAmount = unitsConsumed * unitPrice;

// Round off amounts to 2 decimal places
unitsConsumed = unitsConsumed.toFixed(2);
unitPrice = unitPrice.toFixed(2);
totalAmount = totalAmount.toFixed(2);

// Display the bill in the browser
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name: </strong>" + customerName + "</p>");
document.write("<p><strong>Current Month: </strong>" + currentMonth + "</p>");
document.write("<p><strong>Units Consumed: </strong>" + unitsConsumed + "</p>");
document.write("<p><strong>Unit Price: </strong>" + unitPrice + "</p>");
document.write("<p><strong>Total Amount: </strong>" + totalAmount + "</p>");
// Prompt the user for customer name and current month
var customerName = prompt("Enter Customer Name:");
var currentMonth = prompt("Enter Current Month:");

// Generate random values for bill components
var unitsConsumed = Math.random() * 200; // Random units consumed between 0 and 200
var unitPrice = Math.random() * 15; // Random unit price between 0 and 15
var dueDate = new Date().toLocaleDateString(); // Current date as the due date
var latePaymentSurcharge = totalAmount * 0.1; // Late payment surcharge as 10% of total amount
var netAmountPayable = totalAmount; // Net amount payable is the same as total amount
var grossAmountPayable = totalAmount + latePaymentSurcharge; // Gross amount payable includes late payment surcharge

// Round off amounts to 2 decimal places
unitsConsumed = unitsConsumed.toFixed(2);
unitPrice = unitPrice.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

// Display the bill in the browser
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name: </strong>" + customerName + "</p>");
document.write("<p><strong>Current Month: </strong>" + currentMonth + "</p>");
document.write("<p><strong>Number of Units: </strong>" + unitsConsumed + "</p>");
document.write("<p><strong>Charges per Unit: </strong>" + unitPrice + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date): </strong>" + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge: </strong>" + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date): </strong>" + grossAmountPayable + "</p>");
function displayCurrentDateTime() {
    // Create a Date object for the current date and time
    var currentDate = new Date();
    
    // Get the current date and time as a string
    var dateTimeString = currentDate.toLocaleString();
    
    // Display the current date and time in the browser
    document.write("<h2>Current Date & Time</h2>");
    document.write("<p>" + dateTimeString + "</p>");
  }
  
  // Call the function to display the current date and time
  displayCurrentDateTime();
  function greetUser(firstName, lastName) {
    // Concatenate the first and last name to form the full name
    var fullName = firstName + " " + lastName;
    
    // Display the greeting message with the full name in the browser
    document.write("<h2>Welcome, " + fullName + "!</h2>");
  }
  
  // Prompt the user for first and last name
  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  
  // Call the function to greet the user using their full name
  greetUser(firstName, lastName);
  function calculate(num1, num2, operator) {
    var result;
    
    // Perform the desired operation based on the operator
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        document.write("<p>Invalid operator!</p>");
        return; // Exit the function if operator is invalid
    }
    
    // Display the result in the browser
    document.write("<h2>Calculation Result</h2>");
    document.write("<p>" + num1 + " " + operator + " " + num2 + " = " + result + "</p>");
    
    return result;
  }
  
  // Prompt the user for the first number, second number, and operator
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var operator = prompt("Enter the operator (+, -, *, /):");
  
  // Call the function to perform the desired operation and display the result
  var result = calculate(num1, num2, operator);
  function countNumbers(start, end) {
    // Display the counting in the browser
    document.write("<h2>Counting</h2>");
    
    // Perform the counting from start to end
    for (var i = start; i <= end; i++) {
      document.write("<p>" + i + "</p>");
    }
  }
  
  // Prompt the user for the start number and end number
  var start = parseInt(prompt("Enter the start number:"));
  var end = parseInt(prompt("Enter the end number:"));
  
  // Call the function to display the counting
  countNumbers(start, end);
  function calculateHypotenuse(base, perpendicular) {
    // Nested function to calculate square of a number
    function square(number) {
      return number * number;
    }
    
    // Calculate the hypotenuse using the Pythagorean theorem
    var baseSquare = square(base);
    var perpendicularSquare = square(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    
    // Return the calculated hypotenuse
    return hypotenuse;
  }
  
  // Prompt the user for the base and perpendicular values
  var base = parseFloat(prompt("Enter the base value:"));
  var perpendicular = parseFloat(prompt("Enter the perpendicular value:"));
  
  // Call the function to calculate the hypotenuse
  var hypotenuse = calculateHypotenuse(base, perpendicular);
  
  // Display the calculated hypotenuse in the browser
  document.write("<h2>Computed Hypotenuse</h2>");
  document.write("<p>Base: " + base + "</p>");
  document.write("<p>Perpendicular: " + perpendicular + "</p>");
  document.write("<p>Hypotenuse: " + hypotenuse + "</p>");
  // Calculate area of a rectangle using value arguments
function calculateAreaWithValueArguments(width, height) {
    var area = width * height;
    return area;
  }
  
  // Calculate area of a rectangle using variable arguments
  function calculateAreaWithVariableArguments() {
    var width = arguments[0];
    var height = arguments[1];
    var area = width * height;
    return area;
  }
  
  // Calculate area using value arguments
  var areaWithValueArguments = calculateAreaWithValueArguments(5, 10);
  document.write("<h2>Area using value arguments</h2>");
  document.write("<p>Width: 5</p>");
  document.write("<p>Height: 10</p>");
  document.write("<p>Area: " + areaWithValueArguments + "</p>");
  
  // Calculate area using variable arguments
  var width = 7;
  var height = 12;
  var areaWithVariableArguments = calculateAreaWithVariableArguments(width, height);
  document.write("<h2>Area using variable arguments</h2>");
  document.write("<p>Width: " + width + "</p>");
  document.write("<p>Height: " + height + "</p>");
  document.write("<p>Area: " + areaWithVariableArguments + "</p>");
  function checkPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    var sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the sanitized string
    var reversedStr = sanitizedStr.split('').reverse().join('');
  
    // Check if the reversed string is equal to the sanitized string
    if (sanitizedStr === reversedStr) {
      return true;
    } else {
      return false;
    }
  }
  
  // Prompt the user to enter a string
  var userInput = prompt("Enter a string:");
  
  // Call the checkPalindrome function and display the result
  var isPalindrome = checkPalindrome(userInput);
  
  if (isPalindrome) {
    document.write("<h2>" + userInput + " is a palindrome!</h2>");
  } else {
    document.write("<h2>" + userInput + " is not a palindrome.</h2>");
  }
  function capitalizeWords(str) {
    var words = str.split(" ");
    var capitalizedWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    var capitalizedString = capitalizedWords.join(" ");
    return capitalizedString;
  }
  
  // Test the function
  var inputString = "the quick brown fox";
  var capitalizedString = capitalizeWords(inputString);
  
  document.write("<h2>Original String:</h2>");
  document.write("<p>" + inputString + "</p>");
  
  document.write("<h2>Capitalized String:</h2>");
  document.write("<p>" + capitalizedString + "</p>");
  function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Test the function
  var inputString = "Web Development Tutorial";
  var longestWord = findLongestWord(inputString);
  
  document.write("<h2>Original String:</h2>");
  document.write("<p>" + inputString + "</p>");
  
  document.write("<h2>Longest Word:</h2>");
  document.write("<p>" + longestWord + "</p>");
  function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    return count;
  }
  
  // Test the function
  var inputString = 'JSResourceS.com';
  var targetLetter = 'o';
  
  var occurrences = countOccurrences(inputString, targetLetter);
  
  document.write("<h2>Original String:</h2>");
  document.write("<p>" + inputString + "</p>");
  
  document.write("<h2>Occurrences of '" + targetLetter + "':</h2>");
  document.write("<p>" + occurrences + "</p>");
  // Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference);
  }
  
  // Function to calculate the area of a circle
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area);
  }
  
  // Test the functions
  var radius = 5;
  
  document.write("<h2>Circle Properties:</h2>");
  
  document.write("<h3>Circumference:</h3>");
  calcCircumference(radius);
  
  document.write("<h3>Area:</h3>");
  calcArea(radius);
  function power(a, b) {
    var result = Math.pow(a, b);
    return result;
  }
  
  // Test the function
  var base = 2;
  var exponent = 3;
  
  var powerValue = power(base, exponent);
  
  document.write("<h2>Power Calculation:</h2>");
  document.write("<p>" + base + " raised to the power " + exponent + " is " + powerValue + "</p>");
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the function
  var inputYear = prompt("Enter a year:");
  
  if (isLeapYear(inputYear)) {
    document.write("<p>" + inputYear + " is a leap year.</p>");
  } else {
    document.write("<p>" + inputYear + " is not a leap year.</p>");
  }
  function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  // Test the function
  var sideA = 5;
  var sideB = 6;
  var sideC = 7;
  
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  
  document.write("<h2>Triangle Area Calculation:</h2>");
  document.write("<p>The area of the triangle with sides " + sideA + ", " + sideB + ", " + sideC + " is " + triangleArea + "</p>");
  function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
  }
  
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalMarksPossible = 300; // Assuming each subject has a maximum of 100 marks
    var percentage = (totalMarks / totalMarksPossible) * 100;
    return percentage;
  }
  
  function mainFunction() {
    var subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
    var subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
    var subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
  
    var average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    var percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  
    document.write("<h2>Student Marks Calculation:</h2>");
    document.write("<p>Subject 1 Marks: " + subject1Marks + "</p>");
    document.write("<p>Subject 2 Marks: " + subject2Marks + "</p>");
    document.write("<p>Subject 3 Marks: " + subject3Marks + "</p>");
    document.write("<p>Average Marks: " + average.toFixed(2) + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
  }
  
  // Call the main function
  mainFunction();
  function customIndexOf(string, searchChar) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1; // Character not found
  }
  
  // Testing the customIndexOf() function
  var word = "Hello";
  var searchChar = "o";
  var index = customIndexOf(word, searchChar);
  
  if (index !== -1) {
    document.write("Character '" + searchChar + "' found at index " + index + " in the word '" + word + "'.");
  } else {
    document.write("Character '" + searchChar + "' not found in the word '" + word + "'.");
  }
  function removeVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newSentence = '';
  
    for (var i = 0; i < sentence.length; i++) {
      var currentChar = sentence[i].toLowerCase();
      if (vowels.indexOf(currentChar) === -1) {
        newSentence += sentence[i];
      }
    }
  
    return newSentence;
  }
  
  // Testing the removeVowels() function
  var sentence = "Hello, how are you today?";
  var result = removeVowels(sentence);
  
  document.write("Original sentence: " + sentence + "<br>");
  document.write("Sentence without vowels: " + result);
  function countSuccessiveVowels(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
  
    // Convert the text to lowercase for case-insensitive matching
    text = text.toLowerCase();
  
    for (var i = 0; i < text.length - 1; i++) {
      var currentChar = text[i];
      var nextChar = text[i + 1];
  
      // Check if the current and next characters are both vowels
      if (vowels.indexOf(currentChar) !== -1 && vowels.indexOf(nextChar) !== -1) {
        // Increment the count if a successive pair of vowels is found
        count++;
      }
    }
  
    return count;
  }
  
  // Testing the countSuccessiveVowels() function
  var sentence = "Pleases read this application and give me gratuity";
  var result = countSuccessiveVowels(sentence);
  
  document.write("Number of occurrences of successive vowels: " + result);
  // Function to convert kilometers to meters
function convertToMeters(kilometers) {
    return kilometers * 1000;
  }
  
  // Function to convert kilometers to feet
  function convertToFeet(kilometers) {
    return kilometers * 3280.84;
  }
  
  // Function to convert kilometers to inches
  function convertToInches(kilometers) {
    return kilometers * 39370.08;
  }
  
  // Function to convert kilometers to centimeters
  function convertToCentimeters(kilometers) {
    return kilometers * 100000;
  }
  
  // Function to display the converted distances
  function printDistances(kilometers) {
    var meters = convertToMeters(kilometers);
    var feet = convertToFeet(kilometers);
    var inches = convertToInches(kilometers);
    var centimeters = convertToCentimeters(kilometers);
  
    console.log("Distance in meters: " + meters + " m");
    console.log("Distance in feet: " + feet + " ft");
    console.log("Distance in inches: " + inches + " in");
    console.log("Distance in centimeters: " + centimeters + " cm");
  }
  
  // Example usage
  var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  printDistances(distanceInKilometers);
  function calculateOvertimePay(hoursWorked) {
    var normalHours = 40;
    var overtimeRate = 12.00;
    var overtimeHours = hoursWorked - normalHours;
    var overtimePay = 0;
  
    if (overtimeHours > 0) {
      overtimePay = overtimeHours * overtimeRate;
    }
  
    return overtimePay;
  }
  
  // Example usage
  var hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee:"));
  var overtimePay = calculateOvertimePay(hoursWorked);
  console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
  function calculateCurrencyNotes(amount) {
    var denomination100 = Math.floor(amount / 100);
    var denomination50 = Math.floor((amount % 100) / 50);
    var denomination10 = Math.floor(((amount % 100) % 50) / 10);
  
    console.log("Number of 100 rupee notes: " + denomination100);
    console.log("Number of 50 rupee notes: " + denomination50);
    console.log("Number of 10 rupee notes: " + denomination10);
  }
  
  // Example usage
  var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
  calculateCurrencyNotes(amount);
  