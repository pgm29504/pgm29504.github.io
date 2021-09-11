// c1
let firstName = "Phạm";
let surName = "Gia";
let lastName = "Minh";
console.log(firstName + " " + surName + " " + lastName)
alert(firstName + " " + surName + " " + lastName)

// c2
var n1 = prompt("Nhập");
var n2 = prompt("");
if (n1>n2){
    alert(n1 % n2);
    console.log(n1 % n2)
}else{
    alert("")
}

// c3
// var theString = "This is a string.";
// console.log(theString.split("is").length - 1);
var temp = "abc";
var count = (temp.match(/is/g) || []).length;
console.log(count);