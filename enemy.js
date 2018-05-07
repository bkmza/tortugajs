(function() {

    console.log("enemy.js is defining...");

    Enemy = Object.create(new Movable("enemy"));

    Enemy.init = function() {
        
        console.log("Enemy initialization...");

        var xCoordinate = new Date().getMilliseconds() % 2 == 1 ? 10 : 210 + 'px';
        Enemy.element.style.left = xCoordinate;
        Enemy.element.style.top = 10 + 'px';
    };

    Enemy.restart = function() {
        Enemy.init();
        Enemy.setVerticalSpeed(getRandomInt(1,10));
        Enemy.run();
    };

    Enemy.run = function() {
        var id = setInterval(moveOn, 10);
        function moveOn() {
            if (Enemy.isOutOfScreen())
            {            
                clearInterval(id);
                Enemy.restart();
            } 
            else if (Enemy.isSmashedTortuga())
            {
                clearInterval(id);
                alert("Enemy crashed you!");
            }
            else
            {
                Enemy.moveDown();
            }
        };
    };

    Enemy.isOutOfScreen = function() {
        return Enemy.getFloatTop() + Enemy.getFloatHeight() >= Enemy.getFloatParentHeight();
    };

    Enemy.isSmashedTortuga = function() {
        return Enemy.getFloatTop() + Enemy.getFloatHeight() >= Tortuga.getFloatTop() && Enemy.isInLeftZone() == Tortuga.isInLeftZone();
    }
})();