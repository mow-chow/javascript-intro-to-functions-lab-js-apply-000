function shout(string) {
  return string.toUpperCase()
}
//function recieves a string and returns the string in uppercase characters using the toUpperCase js method
function whisper(string) {
  return string.toLowerCase()
}
//function recieves a string and returns the string in lowercase characters using the toLowerCase js method
function logShout(string) {
console.log(string.toUpperCase())
}
//function recieves a string and prints it in uppercase characters using the toUpperCase js method
function logWhisper(string) {
  console.log(string.toLowerCase());
}
//function recieves a string and prints it in lowercase characters using the toLowerCase js method
function sayHiToGrandma(string) {
  if (string == string.toLowerCase()) {
    return "I can\'t hear you!"
  }
  //function recieves a string and checks it accross three conditions:
  // if the conditions are true, stops running and returns "I can't hear you!"
    else if (string == string.toUpperCase()) {
    return "YES INDEED!"
  }//if above statement is false and this one is true, stops running and returns "YES INDEED!"
  else if (string == "I love you, Grandma.") {
    return "I love you, too."
    //if both statements are false, returns "I love you, too."
  }
}
