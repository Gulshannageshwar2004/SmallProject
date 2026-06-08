// Scroll left - right
const container = document.getElementById("artistContainer");

function scrollLeft() {
    container.scrollBy({
        left: -container.clientWidth * 0.8,
        behavior: "smooth"
    });
}

function scrollRight() {
    container.scrollBy({
        left: container.clientWidth * 0.8,
        behavior: "smooth"
    });
}