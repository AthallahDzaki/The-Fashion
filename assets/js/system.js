/*
Author       : Athallah Dzaki.
Template Name: The Fashion - eCommerce Bootstrap 5 HTML
Version      : 1.0
*/

window.addEventListener('resize', function (event) {
    console.log("P");
    if (document.documentElement.clientWidth < 575) {
        $("#navbarSection").removeAttr("class")
    } else {
        document.getElementById("navbarSection").classList.add("container-md");
    }
}, true);
// device detection
function detectMob() {
    return ((window.innerWidth <= 800) && (window.innerHeight <= 700));
}
if (detectMob()) {
    document.getElementById("CarouselSell").setAttribute("hidden", true);
    document.getElementById("navbarSection").removeAttribute("class")
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

var darkMode = document.getElementById('darkMode');

var darkLabel = "darkModeLabel";

window.addEventListener('load', function () {
    if (document.documentElement.clientWidth < 575) {
        $("#navbarSection").removeAttr("class")
    }
    $("#onload-popup").modal("show")
    if (darkMode) {
        initTheme();
    }
});

document.getElementById("DarkModeButton").addEventListener("change", (event) => {
    resetTheme();
});

function ChangeImage(type) {
    const x = document.getElementsByClassName("img-product")
    if (type == 1) {
        for (let i = 0; i < x.length; i++) {
            const img = x[i].getAttribute("lightImg");
            if (img === "") continue;
            x[i].src = img;
        }
    } else if (type == 0) {
        for (let i = 0; i < x.length; i++) {
            const img = x[i].getAttribute("darkImg");
            if (img === "") continue;
            x[i].src = img;
        }
    }

}

function initTheme() {
    var darkThemeSelected = localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'dark';
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
    darkThemeSelected ? ChangeImage(1) : ChangeImage(0);
    darkThemeSelected ? document.getElementById("DarkModeButton").checked = false : document.getElementById("DarkModeButton").checked = true;

}

function resetTheme() {
    let checked = document.getElementById("DarkModeButton").checked;
    if (checked == false || checked == null) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'dark');
        document.getElementsByClassName("navbar-toggler-icon").style = "color: white;"

        ChangeImage(1);
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('darkMode');
        document.getElementsByClassName("navbar-toggler-icon").style = "color: black;"
        ChangeImage(0);
    }
}

for (let i = 0; i < document.getElementsByClassName(".background_bg").length; i++) {
    let attr = document.getElementsByClassName(".background_bg")[i].getAttribute("data-img-src");
    if (typeof attr !== typeof undefined && attr !== false) {
        document.getElementsByClassName(".background_bg").style = 'background-image', 'url(' + attr + ')';
    }
}

$('.content-popup').magnificPopup({
    type: 'inline',
    preloader: true,
    mainClass: 'mfp-zoom-in',
});

$('.image_gallery').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true,
        },
    });
});

$('.popup-ajax').magnificPopup({
    type: 'ajax',
    callbacks: {
    }
});

$('.video_popup, .iframe_popup').magnificPopup({
    type: 'iframe',
    removalDelay: 160,
    mainClass: 'mfp-zoom-in',
    preloader: false,
    fixedContentPos: false
});

$.magnificPopup.defaults.callbacks = {
    open: function () {
        $('body').addClass('zoom_image');
    },
    close: function () {
        // Wait until overflow:hidden has been removed from the html tag
        setTimeout(function () {
            $('body').removeClass('zoom_image');
            $('body').removeClass('zoom_gallery_image');
            //$('.zoomContainer:last-child').remove();// remove zoom container from DOM
            $('.zoomContainer').slice(1).remove();
        }, 100);
    }
};

// Set up gallery on click
var galleryZoom = $('#pr_item_gallery');
galleryZoom.magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
    callbacks: {
        elementParse: function (item) {
            item.src = item.el.attr('data-zoom-image');
        }
    }
});

var image = $('#product_img');
//var zoomConfig = {};
var zoomActive = false;

zoomActive = !zoomActive;
if (zoomActive) {
    if ($(image).length > 0) {
        $(image).elevateZoom({
            cursor: "crosshair",
            easing: true,
            gallery: 'pr_item_gallery',
            zoomType: "inner",
            galleryActiveClass: "active"
        });
    }
}
else {
    $.removeData(image, 'elevateZoom');//remove zoom instance from image
    $('.zoomContainer:last-child').remove();// remove zoom container from DOM
}

$.magnificPopup.defaults.callbacks = {
    open: function () {
        $('body').addClass('zoom_image');
    },
    close: function () {
        // Wait until overflow:hidden has been removed from the html tag
        setTimeout(function () {
            $('body').removeClass('zoom_image');
            $('body').removeClass('zoom_gallery_image');
            //$('.zoomContainer:last-child').remove();// remove zoom container from DOM
            $('.zoomContainer').slice(1).remove();
        }, 100);
    }
};

// Set up gallery on click
var galleryZoom = $('#pr_item_gallery');
galleryZoom.magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
    callbacks: {
        elementParse: function (item) {
            item.src = item.el.attr('data-zoom-image');
        }
    }
});

// Zoom image when click on icon
$('.product_img_zoom').on('click', function () {
    var atual = $('#pr_item_gallery a').attr('data-zoom-image');
    $('body').addClass('zoom_gallery_image');
    $('#pr_item_gallery .item').each(function () {
        if (atual == $(this).find('.product_gallery_item').attr('data-zoom-image')) {
            return galleryZoom.magnificPopup('open', $(this).index());
        }
    });
});

function setPhone(number) {
    phoneNumber = number;
    setCookie("phonenumber", number, 365)
    console.log("Number phone has been set to", number);
    console.log("Note: This number is TEMP Number, if you want permanently change goto item.js instead");
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}