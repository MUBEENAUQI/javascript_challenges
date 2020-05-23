function generate() {
  var image = document.createElement("img");
  var div = document.getElementById("flex1");
  image.src = "challenge2_pic.jpg";
  div.appendChild(image);
  document.getElementById("challenge3").style.display = "block";
}
