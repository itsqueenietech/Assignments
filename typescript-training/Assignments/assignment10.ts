//array for stock prices for each day
const prices:number[] = [7,1,5,3,6,4];

//intial max profit is zero 
let maxProfit:number = 0 ;

//intial buy and sell day will be zero 
let buyDay :number= 0;
let sellDay:number = 0; 

//outer loop: this will check each day if it has potential for buying 
for(let i:number =0;i<prices.length-1;i++){
    //here we loop until 5th day because we wont buy on 6th day 

    //inner loop:check each day for the selling potential
for(let j:number = i+1;j<prices.length;j++){

    //calculate the profit if we buy on day i and sell on day j 
    const profit:number = prices[j]-prices[i];

    //if the above profit is grater than current max profit 
    if(profit>maxProfit){
        //update maxProfit with new profit value 
        maxProfit= profit;

        //update buy and sell day 
        buyDay = i + 1;
        sellDay = j+ 1;
    }   

}
}

//print result
if(maxProfit>0){
    console.log("max Profit is " + maxProfit);
    console.log("Buy the share on day " +buyDay);
    console.log("sell the share on day " +sellDay);
}else{
    console.log("dont buy this share");
}
