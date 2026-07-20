//need to print left angle triangle star pattern
let rows: number = 5;

//outer loop controls  the number of rows
for(let i:number =1;i<=rows;i++ ){
    //intial empty line
    let line:string ="";

    //inner loop to print spaces before stars in each row
    for(let j:number = i;j<rows;j++){
        line+=" ";
    }
    //inner loop to print the stars
    for(let j:number=1;j<=i;j++){
        line +="*";
    }
    console.log(line);
}