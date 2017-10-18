/*
document.querySelector('#Ok').onclick = function() {
  document.getElementById("Error1").innerHTML = "";
  document.getElementById("Error2").innerHTML = "";
  document.getElementById("Error3").innerHTML = "";
  document.getElementById("Error4").innerHTML = "";

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
  if (document.getElementById("place").value == 0) {
    document.getElementById("Error3").innerHTML = "Укажите, куда";
  }
  if (!document.getElementById("area").value) {
    document.getElementById("Error4").innerHTML = "Отсутствует текст";
  }
}
  //Validator of form (Brouser API)

*/

//Validator of form jQuery

document.querySelector('#Ok').onclick = function() {

  $("#Error1").text("");
  $("#Error2").text("");
  $("#Error3").text("");
  $("#Error4").text("");

  if ($("#name").val() == "") {
    $("#Error1").text("Укажите от кого");
  }

  if ($("#password").val() == "") {
    $("#Error2").text("Укажите пароль");
  }

  if ($("#password").val() != $("#passwordRep").val()) {
    $("#Error2").text("Пароли не совпадают");
  }

  if ($("#place").val() == 0) {
    $("#Error3").text("Укажите, куда");
  }

  if (!$("#area").val()) {
    $("#Error4").text("Отсутствует текст");
  }
}
