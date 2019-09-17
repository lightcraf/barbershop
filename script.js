(function () {
    var modalMap = document.getElementsByClassName("modal-map")[0];
    var signIn = document.getElementsByClassName("modal-form-box")[0];

    document.getElementById("showMap").addEventListener("click", function () {
        modalMap.style.display = "block";
    });

    document.getElementById("closeMap").addEventListener("click", function () {
        modalMap.style.display = "none";
    });

    document.getElementById("showForm").addEventListener("click", function () {
        signIn.style.display = "block";
    });

    document.getElementById("closeForm").addEventListener("click", function () {
        signIn.style.display = "none";
    });

    document.getElementsByClassName("top-menu-icon")[0].addEventListener("click", function () {
        document.getElementById("show-top-nav").classList.toggle("top-nav-list");
    });
})();

(function () {
    if (document.getElementsByClassName("slides").length > 0) {
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
    }

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

(function () {
    var largeImg = document.getElementById("largeImg");
    var thumbs = document.getElementById("thumbs");

    if (thumbs !== null && largeImg !== null) {
        thumbs.addEventListener("click", function (event) {
            event.preventDefault();
            var target = event.target;
            if (target.parentNode.nodeName == "A") {
                showThumbnail(target.parentNode.href, target.parentNode.title);
            }
        });
    }

    function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
    }
})();
