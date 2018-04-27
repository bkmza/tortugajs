(function() {

    console.log("ruling.js is defining...");

    var htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.onkeydown = function(e) {
        switch(e.keyCode) {
            case 37:
                Tortuga.moveLeft();
            break;
            case 39:
                Tortuga.moveRight();
            break;
            case 38:
                Tortuga.moveUp();
            break;
            case 40:
                Tortuga.moveDown();
            break;
            default:
                console.log("Not supported action.");
        }
    };
})();