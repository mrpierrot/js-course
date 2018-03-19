console.log("Exercice 1 -------------");

function getKeys(obj){
    var keys = [];
    for(var key in obj){
        keys.push(key);
    }
    return keys;
}

var phones = {
    "Philippe Candeloro": "0607080809",
    "Calimero": "09",
    "El Diablo": "6666666666",
    "Univers": "42"
}


var keys = getKeys(phones);

console.log(keys);
// affiche ["Philippe Candeloro","Calimero","El Diablo","Univers"]

console.log("Exercice 2 -------------");

function getValues(obj){
    var values = [];
    for(var key in obj){
        values.push(obj[key]);
    }
    return values;
}

var values = getValues(phones);

console.log(values);
// affiche [0607080809,09,6666666666,42]

console.log("Exercice 3 -------------");

function repeat(text,n){
    var ret = "";
    while(n > 0){
        ret += text
        n--;
    }
    return ret;
}

var result = repeat("Ah",3);

console.log(result);
// affiche "AhAhAh"

console.log("Exercice 4 -------------");

function each(list,callback){
    for(var i=0,c=list.length;i<c;i++){
        callback(list[i]);
    }
}

var persons = ["Valentine","Eric","Yvelise","Alex"];

function expressiveDisplay(text){
    console.log(text+"!!!");
}

each(persons,expressiveDisplay);

/*
  devrait afficher :

    Valentine!!!
    Eric!!!
    Yvelise!!!
    Alex!!!
*/

console.log("Exercice 5 -------------");

function map(list,callback){
    var result = [];
    for(var i=0,c=list.length;i<c;i++){
        result[i] = callback(list[i]);
    }
    return result;
}

var numbers = [5,6,7,8];

// fonction qui ajoute 1 à une valeur
function increment(x){
    return x +1;
}

var result = map(numbers,increment);

console.log(numbers);
// affiche [5,6,7,8]
console.log(result);
// afficher [6,7,8,9]
