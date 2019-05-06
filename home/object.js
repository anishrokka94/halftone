var cars = {
  name: 'Bugatti',
  origin: 'US',
  model: 2016,
  isMoreThanLakh: true
}

var bikes = {
  name: 'RS 200',
  origin: 'India',
  model: 2016,
  isMoreThanLakh: true
}

// saving objects to array 
var automobiles = [cars, bikes];

// while sending data to server use stringify

// syntax: JSON.stringify(obj);
var carStringified = JSON.stringify(cars);
var bikeStringified = JSON.stringify(bikes);
var automobilesStringified = JSON.stringify(automobiles);

document.getElementById('demo').innerHTML = automobilesStringified;

// receiving data from server use parse 
 // syntax: JSON.parse('{ "name":"John", "age":30, "city":"New York"}');




 // Merging two or more objects in one 

 var mensSummerWear = {
   name: 'shirt',
   origin: 'india',
   brand: 'John Players',
   price: 1000,
   isExpensive: true,
   isFullSleeves: true,
   availableCountry: 'Nepal'
 };

 var mensWinterWear = {
   name: 'Sweater',
   origin: 'England',
   brand: 'Peter England',
   price: 2000,
   isExpensive: true,
   isFullSleeves: true
 };

 // Note: object is non-primitive so while merging same keys dublicates previous one 

 //1. method first to merge objects using rest spread operator 
  // var mensWear = {...mensSummerWear, ...mensWinterWear};

  // we can add other propertis in mensWear object if we want 
    // eg: var mensWear = {...mensSummerWear, ...mensWinterWear, isTooExpensive: false}
//2. method second to merge objects using object assign

  var mensWear = Object.assign(mensSummerWear, mensWinterWear);



  // destructuring object 

  let {price, isExpensive} = mensWear;

  // filtering only price and isExpensive 

  var mensWear = [mensWear];
  var mensWearFiltered = mensWear.filter(function(value) {
    if(value[0] == 'price' && value[0] == 'isExpensive') {
      return true;
    } else {
      return false;
    }
  })



