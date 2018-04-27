(function() {

    console.log("enemy.js is defining...");

    Enemy = Object.create(new Movable("enemy"));

    Enemy.element.style.left = 10 + 'px';
    Enemy.element.style.top = 10 + 'px';

    Enemy.run = function() {
        var id = setInterval(moveOn, 10);
        function moveOn() {
            // console.log(Enemy.getFloatTop());
            // console.log(Tortuga.getFloatTop());
            console.log("Tortuga left coordinates: " + Tortuga.element.style.left);
            if (Enemy.getFloatTop() >= Enemy.getFloatParentHeight())
            {            
                clearInterval(id);
                console.log("Enemy finished");
            } 
            else if (Enemy.getFloatTop() + Enemy.getFloatHeight() >= Tortuga.getFloatTop() && Enemy.isInLeftZone() == Tortuga.isInLeftZone())
            {
                clearInterval(id);
                console.log("Enemy crashed you");
            }
            else
            {
                Enemy.moveDown();
            }
        }
    };


})();