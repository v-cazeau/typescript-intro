let age: number = 30; 
let firstName: string = "Véronie"; 
let isTall: boolean = false;
let childrenNames: string[] = ['Bob','Bill','Billy Bob']

// console.log(`${firstName} is ${age} years old`); 

// if (isTall) {
//     console.log('and so tall')
// } else {
//     console.log('and so pretty')
// }

// for(let i = 0; i < childrenNames.length; i++ ) {
//     console.log(childrenNames[i])
// }



enum taxForm {
    standardTaxForm = "1040", 
    childTaxForm = "641", 
    cryptTaxForm = "420z"
}

// console.log("the crypt one is:", taxForm.cryptTaxForm)
// console.log("the crypt one is:", taxForm.cryptTaxForm)
// console.log("the crypt one is:", taxForm.cryptTaxForm)
// console.log("the crypt one is:", taxForm.childTaxForm)

// let zipCode: string | number = 12345; 
// zipCode = "ABCDE"; 
// zipCode = null

// console.log(zipCode)


function sum(x: number, y: number) {
    return x+y
}

let total: number = sum(5,3)
console.log(total)

// console.log(sum(4,5))

sum(3,2)