/*function openHeaderNav() {
    let x = document.getElementById("header-main-elements");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function openAside() {
    let x = document.getElementById("header-main-elements");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}*/

$(document).ready(function first () {
    $('.mobileIcon').click(function () {
        $('#header-main-elements').toggleClass('active');
        $("#main").toggleClass('container-notactive');
    })
});

$(document).ready(function second () {
    $('#open-widgets').click(function () {
        $('#widgets').toggleClass('widgets-active');
        $('.margin').toggleClass('margin-active');
        $('#open-widgets>img').toggleClass("img-active");
    })
});