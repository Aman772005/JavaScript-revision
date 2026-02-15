// /*
// Q1️⃣ Print your name, age, and course in one line

// Output example:
// Aman | 20 | BCA 

// */

// console.log("Aman,20,BCA")

// /*

// Q2️⃣ Print the result of:

// 10 + 20
// 50 - 30
// 5 * 4
// 20 / 2

// */

// console.log(10 + 20)
// console.log(50 - 30)
// console.log(5 * 4)
// console.log(20 / 2)

// /* 

// Q3️⃣ Write a program to display:
// JavaScript
// is
// easy

// */

// console.log("JavaScript")
// console.log("is")
// console.log("easy")

// /* 

// Q4️⃣ Store your name in a variable and print its data type

// */

// let name = "Aman Singh Tomar"
// console.log(typeof name)

// /* 
// Q5️⃣ Store two numbers and:

// Print sum
// Print difference
// Print product

// */

// let a = 5;
// let b = 6;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)

// /*

// Q6️⃣ Convert string "100" into number and add 50

//  */

// let ab = "100"
// let num = parseInt(ab)
// console.log(num + 50)

// /*

// Q7️⃣ Declare a variable but don’t assign value. Print it.

//  */

// let abc;
// console.log(abc)

// /*

// Q8️⃣ Check if two numbers are equal using:

// ==
// === 

// */

// let num1 = 2
// let num2 = 7

// console.log(num1 == num2)
// console.log(num1 === num2)

// /*

// Q9️⃣ Check if a number is:

// Greater than 10
// Less than 100
// (use logical operators) 

// */

// let num3 = 120

// console.log(num3 > 10 && num3 < 100)

// /**

//  Q🔟 Check if a number is positive, negative, or zero

//  */

// let num4 = 5

// if (num4 > 0) {
//     console.log("positive")
// }
// else if (num4 < 0) {
//     console.log("negative")
// }
// else {
//     console.log("zero")
// }

// /*

// Q1️⃣1️⃣ Use ternary operator to check:

// Pass if marks ≥ 40
// Fail otherwise

// */

// let marks = 30
// let result = marks >= 40 ? "pass" : "fail";
// console.log(result)

// /*

// Q1️⃣2️⃣ Check whether a person is:

// Child (< 18)
// Adult (18–60)
// Senior (> 60) 

// */

// let age = 77;

// if (age < 18) {
//     console.log("Child")
// } else if (age < 60 && age > 18) {
//     console.log("adult")
// } else {
//     console.log("senior")
// }

// /*

//  Q1️⃣3️⃣ Print grade based on marks:

// ≥ 90 → A
// ≥ 75 → B
// ≥ 50 → C
// Else → Fail

//  */

// let marks1 = 15;
// if (marks1 >= 90) {
//     console.log("A")
// } else if (marks1 >= 75) {
//     console.log("B")
// } else if (marks1 >= 50) {
//     console.log("C")
// } else {
//     console.log("Fail")
// }

// /*

// Q1️⃣4️⃣ Check if a number is even or odd

//  */
// let number = 90;

// if (number % 2 == 0) {
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

// /**
//  Q1️⃣5️⃣ Print day name using switch

// 1 → Monday
// 2 → Tuesday
// …
// 7 → Sunday

//  */

// let days = 59

// switch (days) {

//     case 1:
//         console.log("monday")
//         break;

//     case 2:
//         console.log("tuesday")
//         break;

//     case 3:
//         console.log("wednesday")
//         break;

//     case 4:
//         console.log("thrusday")
//         break;

//     case 5:
//         console.log("friday")
//         break;

//     case 6:
//         console.log("saturady")
//         break;

//     case 7:
//         console.log("sunday")
//         break;

//     default:
//         console.log("error")

// }

// /**
//  * 
//  Q1️⃣6️⃣ Simple Calculator (using switch)

// Input:
// two numbers
// operator (+, -, *, /)
// Output result

//  */

// let num5 = 6
// let num6 = 7

// let oper = "divi"

// switch (oper) {

//     case "sum":
//         console.log(num5 + num6)
//         break;

//     case "diff":
//         console.log(num5 - num6)
//         break;

//     case "mult":
//         console.log(num5 * num6)
//         break;

//     case "divi":
//         console.log(num5 / num6)
//         break;

// }

// /**

//   *** Q1️⃣7️⃣ Check if a year is a leap year

//  */

// let year = 2028

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log("leap year")
// } else {
//     console.log("not a leap year")
// }

// /**

//  *** Q1️⃣8️⃣ Find the largest of three numbers

//  */

// let num7 = 6776
// let num8 = 747
// let num9 = 5461

// if (num7 > num8) {
//     if (num7 > num9) {
//         console.log("num7 is the greatest")
//     }
// } else if (num8 > num9) {
//     console.log("num8 is greatest")
// }
// else {
//     console.log("num9 is greatest")
// }

// /**
//  * 
// ***  Q1️⃣9️⃣ Check whether a character is:

// Alphabet
// Digit
// Special character

//  */

// let ch = "@";

// if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//     console.log("Alphabet");
// } 
// else if (ch >= '0' && ch <= '9') {
//     console.log("Digit");
// } 
// else {
//     console.log("Special Character");
// }


// /**

// *** Q2️⃣0️⃣ Check if a number is divisible by 5 and 11

//  */

// let number1 = "1211";

// // ---- check divisible by 5 ----
// let lastDigit = Number(number1[number1.length - 1]);
// let div5 = (lastDigit === 0 || lastDigit === 5);

// // ---- check divisible by 11 ----
// let odd = 0;
// let even = 0;

// for (let i = 0; i < number1.length; i++) {
//     let digit = Number(number1[number1.length - 1 - i]);

//     if (i % 2 === 0) {
//         odd += digit;
//     } else {
//         even += digit;
//     }
// }

// let diff = Math.abs(odd - even);
// let div11 = (diff === 0 || diff % 11 === 0);

// // ---- final result ----
// if (div5 && div11) {
//     console.log("divisible by 5 and 11");
// } else {
//     console.log("not divisible by 5 and 11");
// }

// // 🔵 BASIC LOOP CONTROL

// // Q1️⃣ Print numbers from 1 to 10

// for(i=1;i<=10;i++){
//     console.log(i)
// }

// // Q2️⃣ Print numbers from 10 to 1 (reverse)

// for(i=10;i>=1;i--){
//     console.log(i)
// }

// // Q3️⃣ Print all even numbers between 1 and 50

// for(i=0;i<=50;i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

// // Q4️⃣ Print all odd numbers between 1 and 50

// for(i=1;i<=50;i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }

// // Q5️⃣ Print table of 5

// for(i=1;i<=10;i++){
//     console.log(`5*${i} =`,5*i)
// }

// // 🔵 LOOP + CONDITIONS

// // Q6️⃣ Count how many numbers between 1 and 100 are divisible by 3

// for(i=1;i<=100;i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

// // *** Q7️⃣ Find the sum of numbers from 1 to 100

//  let sum = 0; 

// for(i=1;i<=100;i++){
//     sum += i   
// }
// console.log(sum)

// // Q8️⃣ Find the sum of only even numbers from 1 to 50

// let sume = 0;

// for(i=1;i<=50;i++){
//     if(i%2==0){
//         sume += i
//     }
// }

// console.log(sume)

// // Q9️⃣ Print numbers from 1 to 50 Skip numbers divisible by 5


// for(i=1;i<=50;i++){
//     if(i%5===0){
//         continue ;
//     }
//     console.log(i)
// }

// // Q🔟 Stop loop when number reaches 7

// for(i=1;i>0;i++){
//     if(i===8){
//         break;
//     }
//     console.log(i)
// }

// // 🔵 LOGIC INTENSIVE (IMPORTANT)


// // *** Q1️⃣1️⃣ Check if a number is prime or not


// let num12 = 15 ;

// let prime = num12 > 1;

// for(i= 2;i< num12&&prime; i++){
//     if(num12%i===0){
//         prime=false
//     }else{
//         prime=true
//     }
// }

// console.log(prime)

// console.log(prime?"prime":"not prime")


// // *** Q1️⃣2️⃣ Find factorial of a number



// let abcd = 1

// for(i=1;i<=8;i++){ 
//     abcd = abcd*i 
// }

// console.log(abcd)

// // *** Q1️⃣3️⃣ Reverse a number

// let org = 1234;

// let rev = 0;

// while(org>0){

//     let digit = org % 10 ;  // get last ditit
//     rev = rev * 10 + digit ; // build reverse
//     org = Math.floor(org/10); //remove last digit
// }

// console.log(rev)

// // *** Q1️⃣4️⃣ Count number of digits in a number

// let numa = 12345 ;

// let count = 0;

// while(numa>0){
//     numa = Math.floor(numa/10) ;
//     count++ ;
// }

// console.log(count)

// // *** Q1️⃣5️⃣ Check if a number is palindrome

// let numbb = 1229 ;
// let temp = numbb ;
// let reva = 0;

// while(numbb>0){
//     let digit = numbb%10 ;
//     reva = reva*10 + digit;
//     numbb = Math.floor(numbb/10);
// }

// console.log(reva)

// if(reva === temp){
//     console.log("number is palindrome")
// }else{
//     console.log("number is not palindrome")
// }



// // 🔵 PATTERN THINKING (DO NOT SKIP)

// // *** Q1️⃣6️⃣ Print pattern:
// // *
// // **
// // ***
// // ****
// // *****

// let numbar = 6;

// for(i=1;i<=numbar;i++){
//     let row =""
//     for(j=1;j<=i;j++){
//         row = row+"*"
//     }
//     console.log(row)
// }

// // *** Q1️⃣7️⃣ Print pattern:
// // 1
// // 12
// // 123
// // 1234

// let numbra1 = 5

// for(i=1;i<=5;i++){
//     let row1 = ""
//     for(j=1;j<=i;j++){
//       row1+= j ;
//     }
//     console.log(row1)
// }

// // *** Q1️⃣8️⃣ Print pattern:

// // *****
// // ****
// // ***
// // **
// // *

// let n = 5;

// for(i=n;i>=1;i--){
//     let rown = ""
//     for(j=1;j<=i;j++){
//         rown += "*"
//     }
//     console.log(rown)
// }

// // 🔥 CHALLENGE (NO EXCUSES)

// // *** Q1️⃣9️⃣ Find the largest digit in a number

// // Input: 58392
// // Output: 9

// let no = "58392"
// let greatest = no[0]

// for(i=0;i<=no.length;i++){

//    if (no[i]>greatest){
//     greatest = no[i]
//    }  
// }
// console.log(greatest)

// // Q2️⃣0️⃣ Find sum of digits of a number

// // Input: 456
// // Output: 15


// let no1 = "456"
// let sum1 = 0;

// for(i=0;i<no1.length;i++){
//     sum1 += Number(no1[i])
// }

// console.log(sum1)


//   🔵 FUNCTION BASICS


// Q1 Print your details

// Function to print your name, age, course in one line

const details = (name, age, cource) => console.log(name, age, cource);
details("Aman Singh Tomar", 20, "BCA")



// Q2 Add two numbers

// Function that takes two numbers as parameters and returns sum

function add(a, b) {
    return a + b;
}

let result = add(3, 2)
console.log(result)

// Q3 Check even or odd

// Function that takes a number and returns "Even" or "Odd"


const evenodd = (a) => { a % 2 === 0 ? "even" : "odd" };

let result1 = evenodd(81);
console.log(result1);

// Q4 Square of a number

// Function that returns the square of input number

const square = (a) => a * a;

const result2 = square(32);
console.log(result2);

// Q5 Positive, Negative, or Zero

// Function that checks if a number is positive, negative, or zero



function PNZ(n) {
    if (n > 0) {
        return "positive"
    } else if (n < 0) {
        return "negative"
    } else {
        return "Zero"
    }
}

console.log(PNZ(9));



// 🔵 FUNCTIONS + LOOPS



// Q6 Numbers from 1 to n

// Function with parameter n prints numbers from 1 to n


const num = (n) => { for (let i = 1; i <= n; i++) { console.log(i) } }

num(5);

// Q7 Factorial

// Function to calculate factorial using loop

// Input: 5 → Output: 120

const factorial = (n) => {

    let multiply = 1

    for (let i = 1; i <= n; i++) {

        multiply = multiply * i
    }

    return multiply
}

console.log(factorial(5));

// Q8 *** Prime check

// Function that returns true if number is prime, false otherwise

const prime = (a) => {


    if (a <= 1) return false;


    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false
        }
    }
    return "true"

}

console.log(prime(17));

// Q9 *** Reverse number

// Function that reverses a number without converting it to string


const reverse = (a) => {

    let sign = a > 0 ? 1 : -1

    a = Math.abs(a)


    let rev = 0

    while (a > 0) {
        let digit = a % 10
        rev = rev * 10 + digit
        a = Math.floor(a / 10)
    }

    return rev * sign
}

console.log(reverse(-12345));

// *** Q10 Count digits

// Function that counts the number of digits in a number

const numcount = (a) => {

    a = Math.abs(a);

    if (a === 0) return 1;

    let count = 0
    while (a > 0) {
        a = Math.floor(a / 10)
        count++
    }
    return count
}

console.log(numcount(0));

// Q11 Largest of 3 numbers

// Function that returns largest among three numbers

// this is direct way of solving

const largest = (a, b, c) => {

    return Math.max(a, b, c);

    // this is by logic or you can say by if,else 

    //    if (a>b && a>c) return a;
    //    if(b>a && b>c) return b;
    //    return c;

}

console.log(largest(133, 873, 43873));

// Q12 Leap year

// Function that returns true if a year is leap, false otherwise

// Hint: divisible by 4, but refine for full leap logic

const leapyear = (a) => {
    if ((a % 4 === 0 && a % 100 != 0) || a % 400 === 0) return true;
    return false;
}

console.log(leapyear(2020));

// Q13 Sum of digits

// Function that returns sum of digits of a number

const numsum = (a) => {
    a = Math.abs(Math.floor((a)));

    let sum = 0;

    while (a > 0) {
        let digit = a % 10;
        sum = sum + digit;
        a = Math.floor(a / 10)
    }

    return sum;

}

console.log(numsum(-12.34));

// Q14 Check palindrome number

// Function that returns true if number is palindrome

const palindrome = (a) => {

    let num = a ;

    let rev = 0 ;

    num = Math.abs(num);

    while(num>0){
        let digit = num % 10 ;
        rev = rev * 10 +digit ;
        num = Math.floor(num/10) ;
    }

    if (rev === a ) return true ;
    return false ;
    
}

console.log(palindrome(12211)) ;

// Q15 Table of a number

// Function that prints multiplication table of given number

const tables = (a,b)  => {
    for(let i=1;i<=b;i++){
        console.log(`${a} * ${i} = ${a*i} `)
    }
}

tables(5,15);

// 🔵 FUNCTION + ARRAYS (PREPARE FOR NEXT STEP)

// Q16 Sum of array

// Function takes array and returns sum of all elements


function arrsum(arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        sum += arr[i]  
    }
    return sum ;
}

console.log(arrsum([10,20,30]));

// Q17 Largest element in array

// Function takes array and returns largest element

function largestarr(arr){

    let digit = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>digit) {
            digit = arr[i]
        } 
    }

    return digit ;

}

console.log(largestarr([2,3,4,5,6,7,8]));


// Q18 Count even and odd in array

// Function takes array and returns object like {even: 3, odd: 2}

const EvenOdd = (arr) => {
    let Even = 0 ;
    let Odd = 0 ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            Even ++
        }else{
            Odd ++
        }
    }
    return {Even,Odd};
}

console.log(EvenOdd([1,2,3,4,5,6]))

// Q19 Reverse an array

// Function that reverses array without using reverse()

const Reverse = (arr) => {
    
    let rev = []
    
    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i]);
    }
    return rev ;
}

console.log(Reverse([1,2,3,4,5])) ;

// Q20 Remove duplicates

// Function that returns array with duplicates removed

const duplicates = (arr) => {
    let unique = [...new Set(arr)]
    return unique ; 
}

console.log(duplicates([1,2,4,4,5,6,6,7,6]))



// 🔵 BASIC ARRAY CONTROL

// Q1 Create an array of 5 numbers and print all elements

// let arr = [10,20,30,40,50]

// console.log(arr) ;

// Q2 Print array elements in reverse order (without reverse())


// let arr = [1,2,3,4,5,6,7]
// by with out any function 'new is for creating a new thing' and 'Array' tells as that we need to build a new array 
// let rev = new Array(arr.length)

// for(i=0;i<arr.length;i++){
//in this line rev value for index:i(0,1,2,3,4,5,6) is going to equal with last value of arr by using index 'arr.length-1-i' this tells us that the arr.length is 7-1-0 which is 6 that index value is gooing to be rev value now thats how loop gona work till i = 8 
//     rev[i] = arr[arr.length-1-i]
// }

// console.log(rev)

// function 

// const arr=(a)=>{
//     let rev = new Array(a.length)
//     for(i=0;i<a.length;i++){
//         rev[i]=a[a.length-1-i]
//     }
//     return rev ;
// }

// console.log(arr([1,2,3,4,5]))

// Q3 Find sum of all elements

// let arr = [10,20,30]
// let sum = 0

// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
// }

// console.log(sum)

// const arr = (a) => {
//     let sum = 0
//     for(let i=0;i<a.length;i++){
//         sum += a[i]
//     }
//     return sum ;
// }

// console.log(arr([10,20,30,40,50]))

// let arr = [1,2,3,4,15]
// let sum = 0

// for(let digit of arr){
//     sum += digit
// }

// console.log(sum)



// Q4 Find average of elements

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0 


// for(let i = 0 ;i<arr.length;i++){
//     sum += arr[i]
  
// }

//  let avg = sum/arr.length

// console.log(avg)

// Q5 Find largest element

// let arr = [1,2,3,4,5,6,7,8,9]

// let digit = arr[0]

// for(let i = 0; i<arr.length;i++){
//     if(arr[i]>digit){
//     digit = arr[i] 
//     }
   
// }
// console.log(digit) 

// Q6 Find smallest element

// let arr = [1,2,3,4,5,6,7,8,9]

// let digit = arr[0]

// for(let i = 0; i<arr.length;i++){
//     if(arr[i]<digit){
//     digit = arr[i] 
//     }
   
// }
// console.log(digit)


// 🔵 COUNTING + CONDITIONS


// Q7 Count even and odd numbers

// Output:
// { even: 3, odd: 2 }

// let arr = [1,2,3,4,5]
// let even = 0;
// let odd = 0;

// for(const num of arr){
//     if(num%2===0){
//         even++;
//     }else{
//         odd++;
//     }
// }
// console.log(`{even:${even},odd:${odd}}`)

// Q8 Count how many numbers are positive, negative, zero


// let arr = [1,2,3,4,-6,0,4,345,0]
// let positive = 0;
// let negative = 0;
// let zero = 0;

// for(const num of arr){
//     if(num>0){
//         positive++;
//     }else if(num<0){
//         negative++;
//     }else{
//         zero++;
//     }
// }
// console.log(positive,negative,zero)


// Q9 Count how many times a specific number appears

// Input:
// [1,2,3,2,4,2], find 2
// Output: 3

// let arr = [1,2,3,2,4,2]
// let a = 2 ;
// let counta = 0;

// for(const num of arr){
//     if(a===num){
//         counta++;
//     }
// }
// console.log(counta)

// Q10 Print only numbers divisible by 3

// let arr = [1,2,3,4,5,6]

// // arr.filter(n=>n%3===0).forEach(n=>console.log(n))
// arr.forEach( n=>{
//    if(n%3===0){
//     console.log(n)
//    }
// })



// for(const num of arr){
//     if(num%3===0){
//         console.log(num)
//     }
// }

// 🔵 SEARCHING LOGIC


// Q11 Linear search

// Return index of a given element
// Return -1 if not found

// const search = (arr,b) =>{
//     for(let i = 0;i<arr.length;i++){
//         if(b===arr[i]){
//             return i
//         }
//     }
//     return -1
// }
// console.log(search(([1,2,3,4,5,6]),6))

// Q12 Check if array is sorted decending

// Return true or false


// const decending = (arr) =>{
//     for (i= 0;i<arr.length;i++){
//         if(arr[i]<arr[i+1]){
//             return false      
//         }
//     }
//     return  true
// }

// console.log(decending([8,7,6]))



// Q13 Find second largest element (no sort)

// Hard. Think carefully.

// let arr = [10,20,40,50,5,7]

// let larg = -Infinity;
// let second = -Infinity;

// for(let num of arr){
//     if(num>larg){
//         second=larg;
//         larg=num;
//     }else if(num>second && num!==larg){
//         num = second;
//     }
// }
// console.log(second)

// // Q14 Find second smallest element (no sort)

// let arr = [10,20,30,50,3,5]

// let smallest = Infinity;
// let second = Infinity;

// for(let num of arr){
//     if(num<smallest){
//         second = smallest;
//         smallest = num;
//     }else if(num<second && num!==smallest){
//         second = num;
//     }
// }
// console.log(second)
// console.log(smallest)

// Q15 Remove duplicates manually (no Set)
// Input:
// [1,2,2,3,1,4]
// Output:
// [1,2,3,4]

// let arr = [1,2,2,3,1,4]

// for(let num of arr){
//     for(let i = 0;i<arr.length;i++){
//         if(num === arr[i]){
//             arr.splice(i)
//         }
//     }
// }



// 🔵 ARRAY TRANSFORMATION
// Q16 Reverse array manually and store in new array
// Q17 Copy one array into another














