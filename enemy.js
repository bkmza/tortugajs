(function() {

    console.log("enemy.js is defining...");

    Enemy = Object.create(new Movable("enemy"));

    Enemy.restart = function() {

        var xCoordinate = new Date().getMilliseconds() % 2 == 1 ? 10 : 210 + 'px';
        Enemy.element.style.left = xCoordinate;
        Enemy.element.style.top = 10 + 'px';

        Enemy.run();
    };

    Enemy.run = function() {
        var id = setInterval(moveOn, 10);
        function moveOn() {
            // console.log(Enemy.getFloatTop());
            // console.log(Tortuga.getFloatTop());
            // console.log("Tortuga left coordinates: " + Tortuga.element.style.left);
            if (Enemy.getFloatTop() >= Enemy.getFloatParentHeight())
            {            
                clearInterval(id);
                Enemy.restart();
            } 
            else if (Enemy.getFloatTop() + Enemy.getFloatHeight() >= Tortuga.getFloatTop() && Enemy.isInLeftZone() == Tortuga.isInLeftZone())
            {
                clearInterval(id);
                alert("Enemy crashed you!");
            }
            else
            {
                Enemy.moveDown();
            }
        }
    };


})();