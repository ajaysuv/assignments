let countries:string[]=["India","Russia","japan","Canada"];
let capitals:string[]=["delhi","Moscow","Tokyo","Ottawa"];

//1.add the data at the end of the Array
console.log("add the data at the end of the Array");
countries.push("Nepal");
console.log(countries);

//2.delete the data at the end of the array
console.log("delete the data at the end of the array");
capitals.pop("Ottawa");
console.log(capitals);

//3.add the data at first in the array list
console.log("add the data at first in the array list");
countries.unshift("United Kingdom");
console.log(countries);

//4.delete the data at the first of the Array
console.log("delete the data at the first of the Array");
countries.shift("United Kingdom");
console.log(countries);

//5.identify the index of the particular value in the array
console.log("identify the index of the particular value in the array");
countries.indexOf("japan");
console.log(countries.indexOf("japan"));

//6.check if value exists 
console.log("check if value exists");
let verify :boolean=countries.includes("India");
console.log(verify);

//7.length of the array
 console.log(capitals.length);

 //8.Get part of an array
 console.log("Get part of an array");
 console.log(countries.slice(1,3));
 

 //8.Add/remove elements from the array
 console.log("Add/remove elements from the array");
 capitals.splice(1,2);
 console.log(capitals);

//9.sort the array
let marks:number[]=[20,67,32,98];
marks.sort((a,b)=>a-b);
console.log(marks);

//10.reverse the array
console.log("reverse the array");
countries.reverse();
console.log(countries);

//11. merge two arrays
console.log("merge two arrays");
countries.concat(marks);
console.log(countries.concat(marks));

let merged =[...countries,...marks];
console.log(merged);


//12. Iterate values from the array. 
console.log("11. Iterate values from the array.");
for(let country of countries){
    console.log(country);
}