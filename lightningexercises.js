/* Lightning Exercise 1: Write a factory function that creates an object that represents 
a doctor. The function should accept three arguments.
Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice
*/

// const createCustomRing = (style, carets, metal) => {
//     return {
//         style: style.style,
//         carets: carets.carets,
//         metal: metal.metal,
//         price: metal.price + style.price + carets.price
//     }
// }


const newDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

/* Lightning Exercise 2: Write a factory function that creates an object that represents a 
pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored 
in a variable named BowWowKennels  */

const myPet = (name, breed) => {
    return {
        name: name,
        breed: breed,
    }
}

const BowWowKennels = [];

const nellie = myPet("nellie", "goldendoodle")
BowWowKennels.push(nellie)

const gus = myPet("gus", "blue heeler")
BowWowKennels.push(gus)

const simba = myPet("simba", "black lab")
BowWowKennels.push(simba)

console.log(BowWowKennels);

/* Music Row: Your job is to sign each of these promising young music stars to the 
appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
Then invoke the appropriate function for each of the following artists and place the 
resulting object in the corresponding label array. */

const JumpStopRecords = []
const ChattenRecords = []
const PolarRecords = []

const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age,
    }
}

const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age,
    }
}

const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age,
    }
}

const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age,
    }
}

const createBluegrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age,
    }
}

const artist1 = createFunkArtist("Dre Funkz", "Funk", 25)
JumpStopRecords.push(artist1)
console.log(JumpStopRecords);

const artist2 = createRapArtist("Dusta Grimes", "Rap", 21)
JumpStopRecords.push(artist2)
console.log(JumpStopRecords);

const artist3 = createCountryArtist("Bruce Atkins", "Coutry", 23)
ChattenRecords.push(artist3)
console.log(ChattenRecords);

const artist4 = createPopArtist("Jensen Brown", "Pop", 20)
PolarRecords.push(artist3)
console.log(PolarRecords);

const artist5 = createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23)
ChattenRecords.push(artist5)
console.log(ChattenRecords);

const artist6 = createCountryArtist("Avilee Davis", "Coutry", 19)
ChattenRecords.push(artist6)
console.log(ChattenRecords);

const artist7 = createPopArtist("Austin Kinkaid", "Pop", 22)
PolarRecords.push(artist7)
console.log(PolarRecords);

const artist8 = createRapArtist("Loyoncé Branis", "Rap", 27)
JumpStopRecords.push(artist8)
console.log(JumpStopRecords);


JumpStopRecords.forEach(element => {
    console.log(`${element.name} is a ${element.genre} artist and is ${element.age} years old`)
});

