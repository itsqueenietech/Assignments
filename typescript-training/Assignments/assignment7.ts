let sentence: string = "Java programming is fun and challenging";
//Count the total number of words in the sentence.

let word = sentence.split(" ");
console.log(word.length);

//Print the sentence words in reverse order.
let reverseSentence: string = "";

for (let i = word.length - 1; i >= 0; i--) {
  reverseSentence += word[i] + " ";
}

console.log(reverseSentence);

//Convert the first character of each word to uppercase and print original sentence
