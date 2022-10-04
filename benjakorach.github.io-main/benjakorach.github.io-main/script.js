function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
    var element2 = document.querySelector("table");
    element2.classList.toggle("darkmode");
    var header = document.querySelector("header nav");
    header.classList.remove("bg-light");
    header.classList.remove("navbar-light");
    header.classList.toggle("bg-dark");
    header.classList.toggle("navbar-dark");
    var footer = document.querySelector("footer");
    footer.classList.remove("bg-light");
    footer.classList.toggle("bg-dark");
}

