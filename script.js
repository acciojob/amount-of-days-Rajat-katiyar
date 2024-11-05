
function daysOfAYear(year) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; 
    } else {
        return 365; 
    }
}


console.log(daysOfAYear(2022)); // Output: 365
console.log(daysOfAYear(2024)); // Output: 366
console.log(daysOfAYear(1900)); // Output: 365
console.log(daysOfAYear(2000)); // Output: 366
