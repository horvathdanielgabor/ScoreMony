//header
function myFunction(selected) {
    var x = document.getElementById(selected);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}