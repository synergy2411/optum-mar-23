const x = "hello";

const obj = {
    name: ""
}


let userA = {
    name: "A",
    age: 32
}

let { name, age } = userA;

let context = {
    db: ["Hi", "Hello"]
}

let { db } = context;

console.log(db)


let friends = ["foo", "bar", "bam"];

let [f1, f2, f3] = friends;

console.log(f1);            // "bar"