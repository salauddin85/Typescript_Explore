{
   
// spread operator
    let arr1:number[] = [1,2,3];
    let arr2:number[] = [4,5,6];
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);
    // arr1.push(...arr2)
    const mentors1 ={
        name:"sdk",
        age:23,
        skills:["c","c++"]
    }
    const mentors2 ={
        name2:"sdk",
        age2:23,
        skills2:["c","c++"]
    }
    const mentors3 = {...mentors1,...mentors2}
    console.log(mentors3);
    // destructuring
    let {name,age,skills} = mentors1;
    // console.log(name,age,skills);
    // destructuring in array
    


    // rest operator

    const greetFriends = (...friends:string[])=>{
        friends.forEach(friend=>{
            console.log("hello",friend);
        })
    
        }
    greetFriends("rahim","karim","labib","samiullah")
}