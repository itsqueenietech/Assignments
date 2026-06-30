let student:string[] = ["Suresh","Mahesh","Naresh"];
let marks:number[] = [75,80,82];
let updatedMarks:number[] = [];
let total: number = 0;

for(let i:number =0;i< marks.length;i++){
   updatedMarks[i] = marks[i]! + 10;
    total += updatedMarks[i]!;
    console.log(`${student[i]}: ${updatedMarks[i]}`);
}

const average: number = total / updatedMarks.length;
console.log(`Average Marks: ${average}`);