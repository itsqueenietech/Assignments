let sentence: string = "Java programming is fun and challenging";
//Count the total number of words in the sentence.

let word :string[]= sentence.split(" ");
console.log(word.length);

//Print the sentence words in reverse order.
let reverseSentence: string = "";

for (let i = word.length - 1; i >= 0; i--) {
  reverseSentence += word[i] + " ";
}

console.log(reverseSentence);

//Convert the first character of each word to uppercase and print original sentence
let upperCaseSentence :string = "";
for(let wor of word){
  upperCaseSentence = upperCaseSentence + wor.substring(0,1).toUpperCase() +wor.substring(1)+" ";
 
}

 console.log(upperCaseSentence.trim());