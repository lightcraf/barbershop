window.addEventListener("load", function () {
    var largeImg = document.getElementById('largeImg');
    var thumbs = document.getElementById('thumbs');

    thumbs.onclick = function(event) {
        var target = event.target;
        while (target != this) {
            if (target.nodeName == 'A') {
                showThumbnail(target.href, target.title);
                return false;
            }
            target = target.parentNode;
        }
    }

    function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
    }
});
