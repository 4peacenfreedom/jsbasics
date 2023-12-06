const firstName = 'William';
const lastName = 'Queen';
let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = firstName;
val += ' ';
val += lastName;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Changing case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// Get chat at certain index
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt(4);
val = firstName[5]; // Not common
val = firstName.charAt(firstName.length - 1); // Get last chart


// Substring
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0, 4);
val = firstName.slice(-3); // Start counting from the last chart

// Split string into array based on a separator
val = ('Hello guys I\'m Byron').split(' ');

// replace()
val = firstName.replace('William', 'Oliver');

// includes
val = firstName.includes('William'); // False because now it's Oliver
console.log(val);

