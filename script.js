window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top-btn").style.display = "block";
    } else {
        document.getElementById("scroll-to-top-btn").style.display = "none";
    }
}

// Quan es fa clic a l'icona, torna a la part superior de la pàgina
document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Per a navegadors Chrome, Safari, Opera
    document.documentElement.scrollTop = 0; // Per a navegadors Firefox, IE, Edge
});
