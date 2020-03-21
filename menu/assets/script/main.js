let login = prompt("enter login");
if (login == "admin") {
  let password = prompt("enter password");
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
