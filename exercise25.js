//spread opretor
const numbers = [1,2,3]

const allNumbers = [...numbers,  4,5,6,]

console.log(allNumbers)

//rest opretor

function multiplynumbers (...numb) {
return numb.reduce((total,numb) => total * numb,1)
}
console.log(multiplynumbers(4,6,5,10))