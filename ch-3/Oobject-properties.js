//  REFLECTION: Looking at the objects properties to determine what types
 // are held within an objects

 let person = {
   "firstname" = 'Dave',
   "lastname" = 'Thomas',
   "occupation" = 'Founder of Wendy\'s'
 }

//  using reflection to determine object's property
typeof person.firstname //string

//  hasOwnProperty('<property');
// used to determine if an object has a speciific property
person.hasOwnProperty('occupation') //true
