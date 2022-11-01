// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph") ;
}
function destructivelyPrependCat() {
    cats.unshift("Bob") ;
}
function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
   cats.shift(); 
}
// const copyOfCats = [...cats];
function appendCat() {
    const newCats =[...cats];
    newCats.push("Broom") ;
    return newCats
}
function prependCat() {
    const newCats=[...cats];
    newCats.unshift("Arnold");
    return newCats;
}

function removeLastCat() {
    const newCats=[...cats]; 
    newCats.pop();
    return newCats;
}
function removeFirstCat() {
    const newCats=[...cats];
    newCats.shift();
    return newCats;
}