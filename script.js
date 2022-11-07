let c = 1;

document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    c++;
    if (c > 5)
    {
        c = 1;
    }
    document.getElementById("radio"+c).checked = true;
}

