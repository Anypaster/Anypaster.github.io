/////////////////LOGIN//////////////
function login() {
  let login = prompt("Enter name: ", "admin");
  while (login != "admin") {
    alert("Login not found");
    login = prompt("Enter name: ", "admin");
  }
  login = prompt("Enter password: ", "admin");
  while (login != "admin") {
    alert("incorect password");
    login = prompt("Enter password: ", "admin");
  }
}
/////////////////////////RECURSION///////////////////////////
function recursion() {
  let list = {
    name: "andry",
    obg: {
      lalka: "piisss"
    }
  };

  let cloneList = {};

  cloneObg(list, cloneList);
  console.log(cloneList);

  function cloneObg(original, clone) {
    for (let prop in original) {
      if (typeof original[prop] == "object" && original[prop] != null) {
        clone[prop] = {};
        cloneObg(original[prop], clone[prop]);
      }
      clone[prop] = original[prop];
    }
  }
}
////////////////////////////////////////////////////////////////
