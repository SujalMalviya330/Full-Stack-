
// At or charAt
const str = "Anand Kumar";
console.log();

console.log(str.charAt(3));
console.log(str.at(3));

// const arr = [10,24,32,53,46,76,89];
// console.log(arr.charAt(3));
// console.log(arr.at(3));
const str2 = str.slice(2,6);

console.log(str2);

const str3 = str.substring(2,6);

console.log(str3);

// slice-
const text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.slice(4, 10));
console.log(text.slice(4));
console.log(text.slice(-6));

// substring
const text2 = "JavaScript";

console.log(text2.substring(0, 4));
console.log(text2.substring(4, 10));
console.log(text2.substring(4));


// Searching and checking strings

//1 indexOf

const text3 = "Learn JavaScript";

console.log(text3.indexOf("Java"));
console.log(text3.indexOf("Script"));
console.log(text3.indexOf("Python"));

//2 lastIndexOf
const text4 = "hello hello";

console.log(text4.lastIndexOf("hello"));
console.log(text4.lastIndexOf("l"));

// 3includes
const email = "student@example.com";

console.log(email.includes("@"));
console.log(email.includes("gmail"));

// startsWith() and endsWith()
const filename = "assignment.pdf";

console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));


// Replacing and changing text

//1 replace
const message = "HTML is useful. HTML is popular.";

console.log(message.replace("HTML", "JavaScript"));

//2 replaceAll
console.log(message.replaceAll("HTML", "JavaScript"));

//3 toUpperCase
const text5 = "JavaScript Methods";
console.log(text5.toUpperCase());

//4 toLowerCase
console.log(text5.toLowerCase());


// Removing whitespace and combining strings

// trim
const name = "   Rahul Sharma   ";
console.log(name.trim());

// trimStart
const text7 = "   Hello   ";
console.log(text7.trimStart());
// trimEnd
console.log(text7.trimEnd());