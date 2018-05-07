(function() {

    console.log("tortuga.js is defining...");

    Tortuga = Object.create(new Movable("tortuga"));
    Tortuga.moveUp = function(){};
    Tortuga.moveDown = function(){};
    Tortuga.init = function() {
        
        console.log("Tortuga initialization...");

        Tortuga.element.style.left = 10 + 'px';
        Tortuga.element.style.top = Tortuga.getFloatParentHeight() - Tortuga.getFloatHeight() + 'px';
    };
})();