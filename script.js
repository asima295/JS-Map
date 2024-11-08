//Map.groupBy() Method
const fruits = [
    {name:"apple",price:150},
    {name:"orange",price:250},
    {name:"mango",price:350},
    {name:"banana",price:450},
    {name:"grape",price:550},
    {name:"guava",price:650},
    {name:"pinapple",price:750},
    {name:"melon",price:850},
    {name:"pear",price:950}
];

function myfunction({ price }) {
return price > 450 ? "ok" : "low";
}

const result = Map.groupBy(fruits, myfunction);

let text ="These fruits are low: <br>";
for (let x of result.get("low")) {
text += x.name + " " + x.price + "<br>";
}
text += "<br>These fruits are ok: <br>";
for (let x of result.get("ok")) {
text += x.name + " " + x.price + "<br>";
}
document.getElementById("p1").innerHTML = text;


//Map.forEach()
const person = new Map([
    ["pinapple", 100],
    ["guava", 200],
    ["oranges", 300]
  ]); 
let txt = "";
person.forEach (function(value, key) {
txt += key + ' = ' + value + "<br>"
  })
document.getElementById("p2").innerHTML = txt;



//Map.entries() Method
const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["pinapple", 100],
    ["guava", 200],
    ["grape", 400],
    ["melon", 600],
    ["pear", 700],
    ["mango", 800],
    ["oranges", 900]
]);
let text1 = "";
for (const x of fruits1.entries()) {
text1 += x + "<br>";
}  
document.getElementById("p3").innerHTML = text1;



//Map.keys()  Method
const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["pinapple", 100],
    ["guava", 200],
    ["grape", 400],
    ["melon", 600],
    ["pear", 700],
    ["mango", 800],
    ["oranges", 900]
]);
let text2 = "";
for (const x of fruits2.keys()) {
text2 += x + "<br>";
}
document.getElementById("p4").innerHTML = text2;



//Map.value()  Method
const fruits3 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["pinapple", 100],
    ["guava", 200],
    ["grape", 400],
    ["melon", 600],
    ["pear", 700],
    ["mango", 800],
    ["oranges", 900]
]);
let text3 = "";
for (const x of fruits3.values()) {
text3 += x + "<br>";
}
document.getElementById("p5").innerHTML = text3;


//New Map Method()
const fruits4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
let nub = fruits4.get("bananas");
document.getElementById("p6").innerHTML =nub ;


//set() Method
const fruits5 = new Map();
fruits5.set("apples", 300);
fruits5.set("bananas", 500);
fruits5.set("oranges", 200);
let nub1 = fruits5.get("bananas");
document.getElementById("p7").innerHTML =nub1 ;


// Typeof Maps
const fruits6 = new Map([
    ["apples", 400],
    ["melon", 300],
    ["oranges", 200]
]);
document.getElementById("p8").innerHTML = typeof fruits6;



//instanceof Map
const fruits7 = new Map([
    ["apples", 400],
    ["pear", 300],
    ["orange", 200]
]);
document.getElementById("p9").innerHTML = fruits7 instanceof Map;



//New Set() Method
const letters = new Set(["a","b","c"]);
document.getElementById("p10").innerHTML=letters.size;


//add() Method
const letters1 = new Set(["a","b","c"]);
letters1.add("d");
letters1.add("e");
document.getElementById("p11").innerHTML=letters1.size;


//has() Method
const letters2 = new Set(["a","b","c"]);
answer = letters2.has("d");
document.getElementById("p12").innerHTML=answer;

const letters3 = new Set(["a","b","c"]);
answer1 = letters3.has("b");
document.getElementById("p13").innerHTML=answer1;

const letters4 = new Set(["a","b","c"]);
letters4.add("d");
letters4.add("e");
answer2 = letters4.has("d");
document.getElementById("p14").innerHTML= answer2;


