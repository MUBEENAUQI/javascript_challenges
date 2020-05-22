function name() {
  var n = prompt("what is your name?......good friend");

  var h2 = document.createElement("h2");
  var ans = document.createTextNode(
    "Hello " + n + " !!!!  Click the below box to start the challenges"
  );
  h2.setAttribute("id", "name");
  h2.appendChild(ans);
  document.getElementById("final").appendChild(h2);
  document.getElementById("buttons").remove();
  document.getElementById("challenge1").style.display = "block";
}
