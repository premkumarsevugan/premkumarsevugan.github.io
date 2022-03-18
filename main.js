document.getElementById("toggle").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("rn").style.display = "flex";
}
document.getElementById("close").addEventListener("click", myFunction2);

function myFunction2() {
  document.getElementById("rn").style.display = "none";
}