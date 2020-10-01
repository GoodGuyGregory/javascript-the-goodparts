var empty_object = {};

//  Simple Object
var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};

//  More Complex example with nested properties
var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55" ,
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23",
    city: "Los Angeles"
  }
};

// ACCESSING ELEMENTS IN OBJECTS:
// Retrieval of elements from an object is simple
// logs the value of first name:
console.log(stooge["first-name"]);

// logs the nested value of the return airline
console.log(flight.departure.IATA);

//  undefined will return if there is an attempt to access variables which
// do not exist within the Object
console.log(stooge["middle-name"]);
console.log(flight.status);

// DEFAULT VALUES:
//  to fill in default values of an object
var middle = stooge["midddle-name"] || "(none)";
var status = flight.status || "unknown";


// UPDATING VALUES:
// Changing values of objects
stooge["first-name"] = 'Dave';

//  if the value doesn't exisit in the objec the value is augmented:
stooge['middle-name'] = 'Lester';
