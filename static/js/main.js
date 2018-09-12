function navToggle() {
  var navBar = document.getElementById("navbar");
  if (navBar.className === "navbar") {
    navBar.className += " responsive";
  } else {
    navBar.className = "navbar";
  }
}
