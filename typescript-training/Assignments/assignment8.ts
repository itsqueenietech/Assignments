let  paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
//1. Find total number of occurrences
let count: number = 0;

let index: number = paragraph.indexOf("Java");

while (index != -1) {

    console.log("Java found at index: " + index);

    count++;

    index = paragraph.indexOf("Java", index + 1);

}

console.log("Total Java count: " + count);