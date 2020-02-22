/*
  Instructions:
  Using the data from the data.js file, use map, filter,
  and reduce methods to compelte the following tasks.

  For reference, the data object's name is "data", and it's 
  structure looks like:
  data = [
    {
      name: STRING,
      age: NUMBER,
      employed: BOOL,
      degree: STRING,
      siblings: ARRAY of STRINGS
    }
  ]
*/

// Example Task 0
// Map through the data and get only the names.
data.map(d => (d.name))
console.log(data);
// Could also be written
// console.log(data.map(d => (d.name)));


// Task 1
// Map through the data object, and return the name and employment status
// of each person.


// Task 2
// Map through the data object and return the name, and the age being doubled for each person.


// Task 3
// Map through the data object, adding onto the data object and additional property
// called "taxable". If the user is employed, set their taxable status to "true", 
// otherwise set it to "false"


// Task 4
// Filter through the data object, returning only users with "Bachelors" degrees.


// Task 5
// Filter through the data object, returning only users who are employed, and over 40 years old


// Task 6
// Reduce the data object, adding up the combined age of all users


// Task 7
// Reduce the data object, adding up the combined amount of all siblings each employed person has


// Task 8
// 





