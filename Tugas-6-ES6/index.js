// Soal 1
const myFunction = (panjang,lebar) => {
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    return [luas,keliling];
}

let [luas,keliling] = myFunction(5,4);
console.log(luas)
console.log(keliling)

// Soal 2
const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 
// const firstName = 'William'
// const lastName = 'Imoh'
// const fullName = {firstName, lastName}
// console.log(fullName) 

// Soal 3

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }

const {firstName, lastName, address, hobby} = newObject
  // Driver code
console.log(firstName, lastName, address, hobby)

//Soal 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

//Soal 5

const planet = "earth" 
const view = "glass" 
const before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet
console.log(before)