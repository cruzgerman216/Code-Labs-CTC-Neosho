let users = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Amy",
    age: 21,
  },
];

for (let i = 0; i < users.length; i++) {
  // Executing a function
  addUserToView(users[i]);
}

// Defining a function
function addUserToView(user) {
  // Step 1: Create element
  let userElement = document.createElement("div");
  // Step 2: fulfil data to the element (name, age)
  userElement.innerHTML = `${user.name}, ${user.age}`;
  // Step 3: Append element onto the body
  let bodyElement = document.body;
  bodyElement.appendChild(userElement);
}
