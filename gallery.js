(function () {
    var slideIndex = 1;
    showSlides(slideIndex);
    document.getElementsByClassName("prev-slide")[0].addEventListener("click", function (event) {
        event.preventDefault();
        showSlides(slideIndex += -1);
    });
    document.getElementsByClassName("next-slide")[0].addEventListener("click", function (event) {
        event.preventDefault();
        showSlides(slideIndex += 1);
    });

    function showSlides(n) {
        var slides = document.getElementsByClassName("slides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
})();