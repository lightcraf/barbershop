document.getElementById("showMap").addEventListener("click", function () {
    modalMap = document.getElementsByClassName("modal-map")[0].style.display = "block";
});

document.getElementById("closeMap").addEventListener("click", function () {
    modalMap = document.getElementsByClassName("modal-map")[0].style.display = "none";
});

document.getElementById("showForm").addEventListener("click", function () {
    document.getElementsByClassName("modal-form-box")[0].style.display = "block";
});

document.getElementById("closeForm").addEventListener("click", function () {
    document.getElementsByClassName("modal-form-box")[0].style.display = "none";
});

document.getElementsByClassName("top-menu-icon")[0].addEventListener("click", function () {
    document.getElementById("show-top-nav").classList.toggle("top-nav-list");
});