class UniqueUsernames {
  constructor() {
    this.users = new Set();
  }

  addUser(username) {
    this.users.add(username);
  }

  exists(username) {
    return this.users.has(username);
  }

  count() {
    return this.users.size;
  }
}

export { UniqueUsernames };

const uniqueUsernames = new UniqueUsernames();
uniqueUsernames.addUser("john_doe");
uniqueUsernames.addUser("jane_doe");
uniqueUsernames.addUser("john_doe");

console.log(uniqueUsernames.exists("john_doe"));
console.log(uniqueUsernames.count());
