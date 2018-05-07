(function() {

    console.log("tortuga.js is defining...");

    Tortuga = Object.create(new Movable("tortuga"));
    Tortuga.moveUp = function(){};
    Tortuga.moveDown = function(){};
    Tortuga.init = function() {
        
        console.log("Tortuga initialization...");
        // console.log("Tortuga height = " + Tortuga.getFloatHeight());

        Tortuga.element.style.left = 10 + 'px';
        Tortuga.element.style.top = Tortuga.getFloatParentHeight() - Tortuga.getFloatHeight() + 'px';
    };

    window.addEventListener("keydown", function(e) {
        switch(e.keyCode) {
            case 37:
                if(!Tortuga.isInLeftZone()) {
                    Tortuga.moveLeft();
                }
            break;
            case 39:
                if(Tortuga.isInLeftZone()) {
                    Tortuga.moveRight();
                }                
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
    });

    getRandomInt = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
})();