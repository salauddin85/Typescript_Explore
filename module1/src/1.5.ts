const users: {
  readonly firstName: string,
  middleName?: string,   // optional
  lastName: string,
  age: number,
  company?: string
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
    age: 25,
    company: "ABC Inc."
  }
];

console.log(users);
