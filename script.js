document.addEventListener("DOMContentLoaded", function() {
 setTimeout(function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
    window.location.href = "/earthquakes/";
 }, 9000);
});