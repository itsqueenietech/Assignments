let customerName: string = "John Doe";
let credit: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRat = 35.0;

function checkLoanEligibility() {
  if (credit >= 750) {
    console.log("loan is approved");
  } else if (credit >= 650 && credit <= 750) {
    console.log("check additional requirements");
    if (income >= 50000) {
      console.log(" check if employed");
      if (isEmployed == true) {
        console.log("check DTI ratio");
        if (debtToIncomeRat <= 40) {
          console.log("loan approved");
        } else {
          console.log("loan denied");
        }
      } else {
        console.log("loan denied");
      }
    }
  } else {
    console.log("loan is denied");
  }
}

checkLoanEligibility();
