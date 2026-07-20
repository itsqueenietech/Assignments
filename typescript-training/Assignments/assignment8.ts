let  paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
//1. Find total number of occurrences of java word 

let words:string[] = paragraph.split(" ");
let count: number = 0;

for(let i:number = 0; i<words.length;i++){
    if(words[i].toLowerCase()==="java"){
        console.log("Java word is present within the array in the index: "+ i);
        count++;
    }

}
console.log("Total Java count: " + count);
