

var BirthYear;
var CurrentYear;

calc(2018,1990)

function calc(CurrentYear,BirthYear){

var age = CurrentYear - BirthYear;
if (age > 21){

document.write( "you are " + age + " years of age, drink up dude")
console.log( "you are " + age + " years of age, drink up dude")
}else {
  document.getElementById("ch11").innerHTML="You can not drink at your age";
  document.write("you are only " + age + " Sorry you can not drink" )
  console.log("you are only " + age + " Sorry you can not drink" )
}

}
