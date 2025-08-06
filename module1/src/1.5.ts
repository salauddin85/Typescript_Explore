const users: {
  readonly firstName: string,
  middleName?: string,   // optional
  lastName: string,
  age: number
}[] = [
  {
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    age: 30
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
  }
];

console.log(users);
