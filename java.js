var number=99;

for(number>2; number--;) {
  console.log(number + " bottles of beer on the wall " + number + " bottles of beer, take one down pass it around " + (number-1) + " bottles of beer on the wall.");

}
if (number==1){
  console.log(number + " bottle of beer on the wall " + number + " bottle of beer, take one down pass it around " + (number-1) + " bottle of beer on the wall");

}

while (number >= 2) {
  console.log(number + " bottles of beer on the wall " + number + " bottles of beer, take one down pass it around " + (number-1) + " bottles of beer on the wall.");
  number--;
}
if (number==1){
  console.log(number + " bottle of beer on the wall " + number + " bottle of beer, take one down pass it around " + (number-1) + " bottle of beer on the wall");

} 
