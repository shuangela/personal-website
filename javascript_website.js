console.log("Hello, world!");

function changeHeaderText() {
  var header = document.getElementById("firstHeading");
  if (header.innerHTML == "Example page heading") {
      header.innerHTML = "Changed page heading";
    } else {
      header.innerHTML = "Example page heading";
    }
  }


  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
  }

  function buttonFunction() {
    alert("You've been alerted!");
  }
