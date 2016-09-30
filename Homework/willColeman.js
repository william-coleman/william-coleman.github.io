// Will Coleman, Under Eagle Brosi, Saturday. September 17, 2016

// Problem 1:

var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var peaches = numArray.indexOf(27);
console.log(peaches);

// Problem 2:

console.log(numArray.reduce((a,b) => a+b));

// Problem 3:

var newArray = [1,2,3,4,5,6,7,8,9,10];
newArray.splice(9,1);
console.log(newArray);

// Problem 4:

function addition(x,y){
    var sum = (x+y);
    console.log(sum);
  if(sum <= 25){
      console.log("This is small enough");
  } else {
      console.log("False, too large");
  }
}

addition(4,5);

// Problem 5:

function stringTheory(phrase1,phrase2){
    var both = (phrase1 + " " + phrase2);
  if(both.length > 12){
      console.log("Error, string too long.");
  } else {
      console.log(both);
  }
}

stringTheory("Hey","there");
stringTheory("butter butter", "Hey pretty lady");

// Problem 6:

var num = 0;
do {
    if(num <= 5) {
        console.log("Very Low Number " + num);
    } else if(num <= 10) {
        console.log("Low Number " + num);
    } else if(num <= 15) {
        console.log("High Number " + num);
    } else {
        console.log("Very High Number " + num);
    }
    num++;
} while(num <= 20);

