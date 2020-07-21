<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objects and Functions</title>
    </head>
<body>




    
    <script>
        // PART 3
            function myName(){
            var myName = "Adeshina Badmus";
            return myName;
        }
        console.log( myName() );
    
            // PART 3b
            function randomFood () {
            var favouriteFoods = ['pizza', 'ice cream'];
	        return favouriteFoods[Math.floor(Math.random() * favouriteFoods.length)];
        }
        console.log( randomFood());
                // PART 3c
            var numbers = [1,2,3,4,5,6,7,8,9,10];
            function displayOddNumbers(){
                for(var i = 0; i < numbers.length; i++){
                    if(numbers[i] % 2 !== 0)
                    console.log(numbers[i]);
                }
            }
            displayOddNumbers();
                    // PART 3d
            var numbers = [1,2,3,4,5,6,7,8,9,10];
            function displayEvenNumbers(){
                for(var i = 0; i < numbers.length; i++){
                    if(numbers[i] % 2 === 0)
                    console.log(numbers[i]);
                 }
            }
            displayEvenNumbers();
                        // PART 3e
            var numbers = [1,2,3,4,5,6,7,8,9,10];
            function returnFirstOddNumber(){
                 for(var i = 0; i < numbers.length; i++){
                    if(numbers[i] % 2 !== 0){
                        return numbers [i];
                    }
                }
            }
             console.log(returnFirstOddNumber());
                        // PART 3f
            var numbers = [1,2,3,4,5,6,7,8,9,10];
            function returnFirstEvenNumber(){
                for(var i = 0; i < numbers.length; i++){
                    if(numbers[i] % 2 === 0){
                        return numbers [i];
                    }
                }
            }
            console.log(returnFirstEvenNumber());
                        // PART 3g
            var numbers = [1,2,3,4,5,6,7,8,9,10];
            function returnFirstHalf(){
                return numbers.slice(0,numbers.length/2);
            }
             console.log(returnFirstHalf());
                        // PART 3h
             var numbers = [1,2,3,4,5,6,7,8,9,10];
            function returnSecondHalf(){
                return numbers.slice(numbers.length/2);
            }
            console.log(returnSecondHalf());
                        // PART 4a
            function add(number1, number2){
                 return number1 + number2;
            }
            var number1 = 2;
            var number2 = 2;
            add(number1, number2); 
            console.log(add(number1, number2));

            function subtract(number1, number2){
                return number1 - number2;
            }
            var number1 = 2;
            var number2 = 2;
            subtract(number1, number2); 
            console.log(subtract(number1, number2));

            function multiply(number1, number2){
                return number1 * number2;
            }
            var number1 = 2;
            var number2 = 2;
            multiply(number1, number2); 
            console.log(multiply(number1, number2));

            function divide(number1, number2){
                return number1 / number2;
            }
            var number1 = 2;
            var number2 = 2;
            divide(number1, number2); 
            console.log(divide(number1, number2));
                    // PART 4b
            var myFirstName = "Adeshina"
            function sayHello(str){
                if (str === myFirstName){
                    return "Hello Boss";
                }
                    return "Hello" + str;
            }
            sayHello("Tim");
            sayHello("Bolaji");
            sayHello("Adeshina");
            console.log(sayHello(myFirstName));
                    // PART 4c
            var arr = [1,2,3,4,5,5,7,8,9,10];
            function average(arr){
                var total = 0;
                    for(var i = 0; i < arr.length; i++){
                        total += arr[i];
                    }
                return total / arr.length;
            }
            console.log(average(arr));
                    // PART 4d
            var obj = {
                firstName: "Adeshina",
                lastName: "Badmus"
            }
            function createStudent(firstName, lastName) {
                return{
                    firstName: firstName,
                    lastName: lastName
                }
            }
            console.log(createStudent("Adeshina", "Badmus"));
                    //    PART 4e
            var Adeshina = createStudent("Adeshina", "Badmus");
            var matt = createStudent("Matt", "Lane");
            var elie = createStudent("Elie", "Schoppik");
            var students = [Adeshina, matt, elie];
            
                            // PART 4f
                function findStudentByFirstName(name){
                    var lowerCasedName = name.toLowerCase();
                        for(var i = 0; i < students.length; i++){
                             if(students[i].firstName.toLowerCase() === lowerCasedName){
                                return true;
                            }
                        }
                            return false;
                }
                console.log(findStudentByFirstName("Adeshina"));
                console.log(findStudentByFirstName("bolaji"));
                                // PART 4g
                var arr = [1,2,3,4];
                var arr = [2,3,4,6,7];
                var arr = ["Adeshina", "bolaji", "emmanuel", "john"];
                function extractEveryThird(arr){
                    var newArr = [];
                        for(var i = 2; i < arr.length; i += 3){
                            newArr.push(arr[i]);
                        }
                        return newArr;
                }
                console.log(extractEveryThird([2,3,4,6,7]));
                                // PART 4h
                function countEvensAndOdds(arr){
                    var countObj = {
                        oddCount: 0,
                        evenCount: 0
                    }
                    for(var i = 0; i < arr.length; i++){
                        if(arr[i] % 2 === 0){
                            countObj.evenCount++;
                        } else {
                            countObj.oddCount++;
                        }
                    }
                    return countObj;
                }
                countEvensAndOdds([1,2,3,4]);
                countEvensAndOdds([1,2,3,4,5,6,7]);
                console.log(countEvensAndOdds([1,2,3,4]));
                console.log(countEvensAndOdds([1,2,3,4,5,6,7]));
                                // PART 4i
                var myVar = "Hello from global";
                function scopePractice() {
                     var myVar = "Hello from function scope";
                }
                    scopePractice();
                    console.log(myVar);

                    var tricky = "Hello from global";
                    function trickyScopePractice() {
                        tricky = "Hello from function scope";
                    }
                    console.log(tricky);
                                // PART 5a
                    (function displayFullName(firstName, lastName){
                        return firstName + " " + lastName;
                    })("Adeshina", "Badmus")
                    console.log("Adeshina", "Badmus");
                                    // PART 5b
                    var calc = createCalculator();
                    calc.add(3, 6);
                    calc.subtract(4, 2);
                    calc.multiply(5, 2);
                    calc.divide(12, 4);
                    function createCalculator(){
                        return{
                            add: function(a, b){
                                return a + b;
                            },
                            subtract: function(a, b){
                                return a - b;
                            },
                            multiply: function(a, b){
                                return a * b;
                            },
                            divide: function(a, b){
                                return a / b;
                            }
                        }
                    }
                    console.log(add(3, 6), subtract(4,2), multiply(5, 2), divide(12, 4));

                        // PART 6a
                    var firstName = 'Elie';

                    function displayFirstName(){
                        var firstName = 'Tim';
                        return firstName;
                    }
                    console.log(displayFirstName());

                    // PART 6b
                    function displayFirstName(){
                        var firstName = 'Tim';
                        return firstName;
                    }       
                    //  'Tim' is returned because the name variable is defined in the function scope.
                     

                    //  PART 6c
                    console.log(firstName) 
                    firstName = "Elie"
                    // undefined is output because the var firstName; is hoisted to the top of the code 

                    //PART 6d 
                    console.log(firstName) 
                    firstName = 'Elie'

                    // PART 6e

                    function sayHi(){
                        return 'Hi ' + firstName;
                        var firstName = 'Elie'
                    }
                    // console.log(sayHi()); Hi undefined is the output because the var firstName is undefined.

                    // PART 6f
                    function sayHi(){
                        return 'Hi ' + firstName; 
                        firstName = 'Elie'
                    }
                    // console.log(sayHi()); 

                    // PART 6g
                    sayHi() // ?

                function sayHi(){
                    return 'Hi!';
                }
                console.log(sayHi());

                // PART 6h
                sayHi() // ?

                var sayHi = function(){
                    return 'Hi!';
                }
                console.log(sayHi());
                    // Hi will be the output because function declaration is always hoisted
                // PART 7a
                function printDay(num){
                    var dates = {
                        1: "Sunday",
                        2: "Monday",
                        3: "Tuesday",
                        4: "Wednesday",
                        5: "Thursday",
                        6: "Friday",
                        7: "Saturday",
                    };
                    return dates[num];
                }
                console.log(printDay(1));
                console.log(printDay(4));

                // PART 7b
                function lastElement(arr){
                    return arr[arr.length-1];
                }
                console.log(lastElement([1,2,3,4,5]));

                // PART 7c
                function numberCompare(a, b){
                    if(a === b){
                        return 'Numbers are equal';
                    }else if(a > b){
                        return 'First is greater';
                    }
                        return 'Second is greater'
                    }
                    console.log(numberCompare(3,2));
                    console.log(numberCompare(2,9));

                    // PART 7d
                    function singleLetterCount(str1, letter){
                        var finalCount = 0;
                        for(var i=0; i< str1.length; i++){
                            if(str1[i].toLowerCase() === letter.toLowerCase()){
                                finalCount++;
                            }
                        }
                        return finalCount;
                    }
                    console.log(singleLetterCount("Hapiness", "s"));

                    // PART 7e
                    function multipleLetterCount(str){
                        var finalObj = {};
                        for(var i =0; i< str.length; i++){
                            if (!(str[i] in finalObj)){
                                finalObj[str[i]] = 1;
                            } else {
                                finalObj[str[i]]++;
                            }
                        }
                        return finalObj;
                    }
                    console.log(multipleLetterCount("Success"));

                    // PART 7f
                    function arrayManipulation(arr, command, position, val){
                        if(command === 'remove'){
                            if(position === 'end'){
                                return arr.pop();
                            }
                            return arr.shift();
                        }
                        else if(command === 'add'){
                            if(position === 'end'){
                                arr.push(val)
                                return arr;
                            }
                            arr.unshift(val)
                            return arr;
                        }
                    };
                    console.log(arrayManipulation([2,4,6,8], "remove", "end"));
                    console.log(arrayManipulation([3,6,9], "add", "beginning", 1));

                    // PART 7g
                    function isPalindrome(str){
                        return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
                        for(var i =0; i<str.length/2; i++){
                            if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
                                return false;
                            }
                        }
                        return true;
                    }
                    console.log(isPalindrome("faith"));
                    console.log(isPalindrome("tacocat"));
    </script>
</body>
</html>
