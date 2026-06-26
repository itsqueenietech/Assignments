let count:number[]=[45,67,89,7];
let fruits:string[] = ["mango","banana","apple"];

//push()- Push method helps you add more values at the end of an array. 

count.push(45,78);
console.log("After push",count);

//pop= This method helps to remove values at the end of an array. 
count.pop();
console.log("after pop ",count);

//We can get the remote value by storing the count.pop()  to a variable. 
//Shift () method helps to remove a value from the beginning of an array. 
count.shift();
console.log("after shift",count);