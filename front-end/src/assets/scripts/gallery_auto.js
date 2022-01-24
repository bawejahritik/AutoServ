var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 8) {
        counter = 1;
    }
}, 4000);