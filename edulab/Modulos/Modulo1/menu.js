function toggleNav() {
    var bar = document.getElementById("bar");
    var close = document.getElementById("close");
    var navDesktop = document.querySelector(".nav-desktop");
  
    if (bar.style.display === "none") {
      bar.style.display = "block";
      close.style.display = "none";
      navDesktop.style.display = "none";
    } else {
      bar.style.display = "none";
      close.style.display = "block";
      navDesktop.style.display = "block";
    }
  }
  