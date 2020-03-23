/////////////////LOGIN//////////////
function login() {
  let login = prompt("Enter login");
  if (login == "admin") {
    let password = prompt("Enter password");
    if (password == "admin") {
      alert("Welcome !");
    } else if (password == null) {
      alert("cancel");
    } else {
      alert("incorected password");
    }
  } else if (login == null) {
    alert("cancel");
  } else {
    alert("login not found");
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
