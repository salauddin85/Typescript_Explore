// function in typescript 

// Normal function 
// Arrow function 

function add(num1:number,num2:number):number{
    return num1+num2;
}

console.log(add(10,12))

const addArrow = (num1:number,num2: string): string=> num1+num2;
console.log(addArrow(10,"12"))

// object --> function --> method

const poorUser = {
    name: "Rahul",
    age: 23,
    isMarried: false,
    balance:50,
    // getAge: function(){
    //     console.log(this.age)
    // }
    addBalance(balance:number){
        this.balance += balance;
        return this.balance;
    },
   

}
console.log(poorUser.addBalance(100));
