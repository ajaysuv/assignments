
function LoanEligibility(
 customerName : string,
 creditScore : number,
 income : number,
 isEmployed : boolean,
 DTIratio : number,
 ):void
 {

if(creditScore>750)
{
console.log("loan is automatically approved");
}
 else if (creditScore >= 650 && creditScore <= 750)
 {
console.log("additional checks are performed");
 }
 if(income<50000)
 {
    console.log(`${customerName} The loan to be considered`);
 }
 else if(!isEmployed)
 {
    console.log("Loan is denied");
 }
 else if(DTIratio<40)
 {
    console.log(`${customerName} eligible for loan`);
 }
 else if(DTIratio>40)
 {
    console.log(`${customerName} not eligible for loan`)
 }
 else
    {
    console.log("The loan is denied");
 }

}
   
 let customerName = "John Doe";
 let creditScore = 720;
 let income = 55000.0;
 let isEmployed = true;
 let debtToIncomeRatio = 35.0;

 LoanEligibility(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);