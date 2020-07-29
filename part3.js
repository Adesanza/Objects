//number 1
function myName() {
    let name = 'John Odia';
    return name;
}
console.log(myName());



//number 2
let favoriteFoods = ['pizza', 'ice cream']
function randomFoods() {
    let randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0) {
        console.log(favoriteFoods[0])
    }
    else {
        console.log(favoriteFoods[1]);
    }
}
randomFoods() 




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //to be used for the following exercises


//number 3
function displayOddNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            console.log(numbers[i])
        }
    }
}
displayOddNumbers()



//number 4
function displayEvenNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i])
        }
    }
}
displayEvenNumbers()


//number 5
const returnFirstOddNumber = array => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0){
            console.log(numbers[i])
            break;
        }
    }
 }
 returnFirstOddNumber();



//number 6
const returnFirstEvenNumber = () => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0){
            console.log(numbers[i])
            break;
        }
    }
 }
 returnFirstEvenNumber();



//number 7
function returnFirstHalf() {
    let splitArray = numbers.length / 2
    let arrayFirstHalf = numbers.slice(0, splitArray);
    console.log(arrayFirstHalf)
}
returnFirstHalf();



//number 8
function returnSecondHalf() {
    let splitArray = numbers.length / 2
    let arraySecondHalf = numbers.slice(splitArray,numbers.length);
    console.log(arraySecondHalf)
}
returnSecondHalf()
