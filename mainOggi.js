// function Ninja(stars){

//   this.stars = stars;

//   this.getStars = function(){
//     return this.stars;
//   };

//   hasSword: true;

//   this.throwStar = function() {
//     if (this.getStars() > 0){
//       console.log("Threw a Star");
//       this.stars--;
//     } else {
//       console.log("No more stars! Vanish!");
//     }
//   };
// }

// var ninja1 = new Ninja(4);
// var ninja2 = new Ninja(1);

// //this will not alter ninja1
// ninja2.hasMask = true;

// //this will alter both ninjas and all future ninjas
// Ninja.prototype.wearsBlack = true;

// function MountedNinja(){
//   this.ridesHorse = true;
// }

// MountedNinja.prototype = new Ninja(4);

// rider = new MountedNinja();



// function Car(brand, wheels)
// {   this.brand = brand;   
//   this.wheels = wheels; } 

// my_car = new Car("toyota", 4);

// Car.prototype.friendly_brand = function()
// {   return "This car's brand is " + this.brand; }
// console.log(my_car.friendly_brand()) 





function Drink(beer, wine){
  this.beer = beer;
  this.wine = wine;
}

var color = new Drink("yellow", "red");
var liquid = new Drink("bubble", "flat");
var alcohol = new Drink("5%", "13%");



Drink.prototype.friendly_reminder = function()
{ return "consumption of alcohol may cause intoxication"; }

console.log(alcohol.friendly_reminder())
























