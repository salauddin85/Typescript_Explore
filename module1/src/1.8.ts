{
// object destructuring
const user = {
    id: 434,
    names: {
       rahim:{
        firstName: 'Rahim',
        lastName: 'Rahman'
       },
       karim:{
        firstName: 'Karim',
        lastName: 'Karim'
    },
    age: 34,
    contactNo: '095349'

}
}

const {id,names:{rahim:{firstName,lastName}}} = user;
console.log(firstName,lastName);

// array destructuring
const [,,third,...others] = [1,2,3,4,5,6,7];
console.log(third,others);

}