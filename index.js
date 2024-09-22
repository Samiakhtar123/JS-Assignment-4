//Question 1 

const S = "AAbDaDd"; // Sample input
let counts = [0, 0]; // Array to store counts of A and D

for (let char of S) {
    if (char === 'A') {
        counts[0]++;
    } else if (char === 'D') {
        counts[1]++;
    }
}
console.log(counts); 


//Question 2

let str = "prepbytes";
let countObj = {};

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (!countObj[char]) {
        countObj[char] = 0;
    }
    countObj[char] += 1;
}
let result = '';
for (let char in countObj) {
    if (countObj[char] > 1) {
        result += `${char}${countObj[char]}`; 
    }
}

console.log(result); 

//Question 3


let str1 = "My Name Is Sami Akhtar";

let regexForVowel = /[aeiouAEIOU]/g;

console.log(`vowel count: ${str1.match(regexForVowel).length}`);

//Question 4

let string1 = "Sami";
let string2 =" Akhtar";

console.log(string1.concat(string2));


//Question 5

let string_length = "Hello Sami";
console.log(string_length.length);


//Question 6

let str_1 = "ADDDAAADDA"

let count_A = 0
let count_D = 0

for(let win in str1){
    if(str_1[win] ==="A") {
        count_A++;
    }
    else if(str_1[win]==="D") {
        count_D++;
    }
}
if(count_A > count_D){
    console.log("Aditya");
    
}
else if(count_A < count_D){
    console.log("Danish");
    
}
else {
    console.log("Draw");
    
}


//Question 7

let sample1="Prepbytes";
let sample2="Technology";

console.log(sample1.concat(sample2));

//Question 8

let String = "racecar";
let reversed_str="";

for(let i=String.length-1; i>=0;i--){
    reversed_str += String[i]
}

if(String === reversed_str){
    console.log("Palindrome");
    
}
else{
    console.log("Not Palindrome");
    
}

//Question 9

function reverseString(str){
    
    const str_rev = str.split("").reverse().join("");
    console.log(str_rev);
    
}
reverseString("Hello");


//Question 10

let Match_str1 = "Sami Akhtar";
let Match_str2 = "Sami Akhtar";

if(Match_str1 == Match_str2){
    console.log("Match");
    
}
else{
    console.log("Not Match");
    
}

//Question 11

let str_rep = "My Name is Sami Akhtar";

console.log(str_rep.replace("Sami","Arbab"));


//Question 12

function Split_the_String(){
    let str = "Just a new begining";
  return str.split(" ");
  
  }
  
  let S2= Split_the_String();
  console.log(S2);


  //Question 13


  let str5 = "Hello World!"; 
  let vowelsCount = 0;
  let consonantsCount = 0;
  const vowels = 'aeiou';
  
  for (let char of str.toLowerCase()) { 
      if (char >= 'a' && char <= 'z') { 
          if (vowels.includes(char)) {
              vowelsCount++; 
          } else {
              consonantsCount++; 
          }
      }
  }
  
  console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`); 
  
  



