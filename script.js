document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 3000);
});
