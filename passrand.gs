let letterArr = "abcdefghijklmnopqrstuvwxyz";
let upperCase = letterArr.toUpperCase().split("");
let lowerCase = letterArr.toLowerCase().split(""); 
let numbers = "1234567890".split("");
let specialChars = "~`!@#$%^&*()-_+='\"{}[]|<>?/".split("");

// Params: int, bool, bool, bool, bool
function passRand(passLength, isNumbers, isUpper, isLower, isSpecial) {
  var pass = "";
  while (pass.length < passLength) {
    if (isNumbers) {
      pass += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (isUpper) {
      pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (isLower) {
      pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (isSpecial) {
      pass += specialChars[Math.floor(Math.random() * specialChars.length)];
    }
  }
  return pass.shuffle();
}

/*
  Shuffle function by Andy E: 
  https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
  Inspired by:
  https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*/
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

//Probably would add security to just shuffle, works though
// function testRand() {
//   var newpass = passRand(8,true,true,true,true)
//   Logger.log(newpass);
//   Logger.log(newpass.shuffle());
// }
