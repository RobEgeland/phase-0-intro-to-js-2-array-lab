const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let copyCats = [...cats, name];

    return copyCats;
}

function prependCat(name) {
    let copyofCats = [name, ...cats];
    return copyofCats;
}

function removeLastCat() {
    let copyCats = cats.slice(0, 2); 
    return copyCats;
}

function removeFirstCat() {
    let copyCats = cats.slice(1);
    return copyCats
} 
