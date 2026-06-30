let transactions: number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

let creditCount: number = 0;
let debitCount: number = 0;

let totalCredit: number = 0;
let totalDebit: number = 0;

let balance: number = 0;

let suspiciousCount: number = 0;

for (let i: number = 0; i < transactions.length; i++) {

    if (transactions[i] > 0) {
        creditCount++;
        totalCredit += transactions[i];
    }
    else {
        debitCount++;
        totalDebit += transactions[i];
    }

    balance += transactions[i];

    if (transactions[i] >= 10000 || transactions[i] <= -10000) {
        console.log(`Suspicious Transaction Amount: ${transactions[i]}`);
        suspiciousCount++;
    }
}

console.log("--------------------------------");

console.log(`Total Credit Transactions: ${creditCount}`);
console.log(`Total Debit Transactions: ${debitCount}`);

console.log(`Total Credit Amount: ${totalCredit}`);
console.log(`Total Debit Amount: ${totalDebit}`);

console.log(`Remaining Balance: ${balance}`);

console.log(`Total Suspicious Transactions: ${suspiciousCount}`);