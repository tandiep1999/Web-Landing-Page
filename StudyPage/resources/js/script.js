$(document).ready(function() {

    $('textarea').keypress(function(event) {

        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
});