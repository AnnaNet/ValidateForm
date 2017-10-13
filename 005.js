
document.querySelector('#Ok').onclick = function() {
  document.getElementById("Error1").innerHTML = "";
  document.getElementById("Error2").innerHTML = "";
  if (document.getElementById("name").value == "") {
    document.getElementById("Error1").innerHTML = "Укажите от кого";
  }
  if (document.getElementById("password").value == "") {
    document.getElementById("Error2").innerHTML = "Укажите пароль";
  }
  if (document.getElementById("passwordRep").value !=
  document.getElementById("password").value) {
    document.getElementById("Error2").innerHTML = "Пароли не совпадают";
  }

}
  //Validator of form
