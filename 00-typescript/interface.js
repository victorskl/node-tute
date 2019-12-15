// Interfaces #
// Here we use an interface that describes objects that have a firstName and lastName field.
// In TypeScript, two types are compatible if their internal structure is compatible.
// This allows us to implement an interface just by having the shape the interface requires,
// without an explicit implements clause.
// @ts-ignore
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// @ts-ignore
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.textContent = greeter(user);
