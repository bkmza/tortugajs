(function() {
    var htmlElement = document.getElementsByTagName("html")[0];
    console.log(htmlElement.onkeydown);
    htmlElement.onkeydown = function(e) {
        var tortuga = document.getElementById("tortuga");
        switch(e.keyCode) {
            case 37: // left
                tortuga.style.left = parseInt(tortuga.style.left) - 5 + 'px';
            break;
            case 39: // right
                tortuga.style.left = parseInt(tortuga.style.left) + 5 + '%';
            break;
            case 38: // up
                tortuga.style.top=parseInt(tortuga.style.top) - 5 + 'px';
            break;
            case 40: // down
            tortuga.style.top=parseInt(tortuga.style.top)+ 5 + 'px';
            break;
            default:
                console.log("Not supported action.");
        }
    };
})();