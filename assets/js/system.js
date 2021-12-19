$(document).ready(function () {
    if (document.documentElement.clientWidth < 575) {
        $("#navbarSection").removeAttr("class")
    }
})
$(window).resize(function () {
    // Do something more useful
    if ($(window).height()) {
        location.reload();
    };
});
// device detection
function detectMob() {
    return ((window.innerWidth <= 800) && (window.innerHeight <= 700));
}
if (detectMob()) {
    $("#CarouselSell").attr("hidden", true);
    $("#navbarSection").removeAttr("class")
}
var darkMode = document.getElementById('darkMode');

var darkLabel = "darkModeLabel";
var clicked = false;

window.addEventListener('load', function () {
    if (darkMode) {
        initTheme();
    }
});

$(document).ready(function() {
    alert("Ini Website Belom Jadi\n WA Intergrate Belum Ada, Product Masih Kurang");
})

document.getElementById("DarkModeButton").addEventListener("change", (event) => {
    resetTheme();
});

function ChangeImage(type) {
    const x = document.getElementsByClassName("Produk");
    if (type == 0) {
        for (let i = 0; i < document.getElementsByClassName("Produk").length; i++) {
            x[i].src = `assets/img/light/product_img${i + 1}.jpg`;
        }
    } else if (type == 1) {
        for (let i = 0; i < document.getElementsByClassName("Produk").length; i++) {
            x[i].src = `assets/img/dark/product_img${i + 1}.jpg`;
        }
    }

}

function initTheme() {
    var darkThemeSelected = localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'dark';
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
    darkThemeSelected ? ChangeImage(1) : ChangeImage(0);
}

function resetTheme() {
    if (clicked == false) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'dark');
        ChangeImage(1);
        clicked = true;
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('darkMode');
        ChangeImage(0);
        clicked = false;
    }
}