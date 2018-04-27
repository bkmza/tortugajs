(function() {

    console.log("ruling.js is defining...");

    var htmlElement = document.getElementsByTagName("html")[0];
    var tortugaElement = document.getElementById("tortuga");
    var movable = new Movable(tortugaElement);
    htmlElement.onkeydown = function(e) {
        var tortuga = document.getElementById("tortuga");
        switch(e.keyCode) {
            case 37:
                movable.moveLeft();
            break;
            case 39:
                movable.moveRight();
            break;
            case 38:
                movable.moveUp();
            break;
            case 40:
                movable.moveDown();
            break;
            default:
                console.log("Not supported action.");
        }
    };
})();