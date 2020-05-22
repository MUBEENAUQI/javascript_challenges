function indays() {
  var year = prompt("what year were you born in?......good friend");
  var days = (2020 - year) * 365;
  var h1 = document.createElement("h1");
  var ans = document.createTextNode("You are " + days + " old");
  h1.setAttribute("id", "indays");
  h1.appendChild(ans);
  document.getElementById("result").appendChild(h1);
  document.getElementById("challenge2").style.display = "block";
}
function reset() {
  document.getElementById("indays").remove();
  document.getElementById("challenge2").style.display = "block";
}
