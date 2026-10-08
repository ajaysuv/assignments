//1.Storing a string inside the variable 
console.log("Storing a string inside the variable");
let originalString: string = " User name : Admin | Password : admin123 ";
console.log(originalString);

//2.Method to calculate the total number of characters available inside the string 
console.log("Method to calculate the total characters available inside the string");
let totalCharacters:number=originalString.length;
console.log(totalCharacters);

//3.//3.Method to Get a specific character by using an index of the string. 
console.log("Method to Get a specific character by using an index of the string.");
let charAtIndex15:string=originalString.charAt(5);
console.log(charAtIndex15);

//4. Method to eliminate unwanted spaces added in the string  (Spaces added at the beginning and end. )
console.log(" Method to eliminate unwanted spaces added in the string ");
console.log(`original '${originalString}'`);
console.log(`trimmed '${originalString.trim()}'`);

//5.Reverse the string. 
let reverseString:string="";
for(let x:number=originalString.length-1;x>=0;x--)
{
    reverseString=reverseString+originalString.charAt(x);
}
console.log(reverseString);

//6.Method to Remove all the spaces from the string.
console.log(" Method to Remove all the spaces from the string. ");
console.log(originalString.replace(/ /g, ""));

//7. Method to Remove all the 'a' s from the string. 
console.log("Method to Remove all the 'a' s from the string. ");
console.log(originalString.replace(/a/g,""));

//8. Method to Remove all the alphabets from the string.
console.log("Method to Remove all the alphabets from the string. ");
console.log(originalString.replace(/[A-Z a-z]/g,""));

//9.Method to Remove all the numbers from the string. 
console.log("Method to Remove all the numbers from the string. ");
console.log(originalString.replace(/[0-9]/g,""));

//10.Method to Remove all the special chars from the string.
console.log("Method to Remove all the special chars from the string.");
console.log(originalString.replace(/[^0-9 A-z a-z]/g, ""));

//11.Method to convert all the characters of the string into uppercase 
console.log("Method to convert all the characters of the string into uppercase ");
console.log(originalString.toUpperCase());

//12.Method to convert all the characters of the string into lowercase
console.log("Method to convert all the characters of the string into lowercase ");
console.log(originalString.toLowerCase());