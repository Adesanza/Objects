//PRINT DAY
const printDay = (day) => {
    if (day == 1){
      console.log('Sunday');
    }
    else if (day === 2) {
      console.log('Monday')
    }
    else if (day === 3) {
      console.log('Tuesday')
    }
    else if (day === 4) {
      console.log('Wednesday')
    }
    else if (day === 5) {
      console.log('Thursday')
    }
    else if (day === 6) {
      console.log('Friday')
    }
    else if (day === 7) {
      console.log('Saturday')
    }
    else{
      console.log('undefined')
    }
}
console.log(printDay(1))





//LAST ELEMENT
const lastElement = (array) => {
    return array. slice(-1)[0]
  }
  
  console.log(lastElement([1,2,3,4]))





  //NUMBER COMPARE
  const numberCompare = (num1,num2) => {
      if (num1 > num2){
          return 'First is greater';
      }
      else if (num1 < num2){
          return 'Second is greater';
      }
      else {
          return 'Numbers are equal';
      }
  }
  numberCompare(1,1)






  //SINGLE LETTER COUNT
  const singleLetterCount = (word,letter) => {
    let lowerCaseWord = word.toLowerCase();
    let lowerCaseLetter = letter.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerCaseWord.length; i++){
      if (lowerCaseWord[i] === lowerCaseLetter){
        count++
      }
    }
    console.log(count)
  }
  singleLetterCount('amazing','A')






  //MULTIPLE LETTER COUNT
  const multipleLetterCount = (string) => {
    let obj = {};
 
    for (let i = 0; i < string.length; i++){
       obj[string[i]] = ((obj[string[i]]) ? obj[string[i]] : 0) + 1;
}
return obj;
}
console.log( multipleLetterCount('banana'))







  //ARRAY MANIPILATION
  const arrayManipulation = (array,param1,param2,param3) => {
    if (param1 === 'add' && param2 === 'beginning'){
      array.unshift(param3);
      console.log(array)
    }
    else if (param1 === 'add' && param2 === 'end') {
      array.push(param3);
      console.log(array)
    }
    else if (param1 === 'remove' && param2 === 'beginning') {
      console.log(array.shift());
    }
    else if (param1 === 'remove' && param2 === 'end'){
      console.log(array.pop());
    }
    else {
      console.log(`invalid entry`);
    }
  }
  console.log(arrayManipulation([1,2,3],'remove','end'))







  

  //IS PALINDROME
  const isPalindrome = string => {
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
        console.log(reversed)
    }
    if (string === reversed) {
        return true;
    }
    else {
        return false;
    }
    return reversed;
}
console.log(isPalindrome('hannah'))
