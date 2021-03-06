(function() {

    console.log("enemy.js is defining...");

    Enemy = Object.create(new Movable("enemy"));
    Enemy.animationInterval;
    Enemy.number = 0;
    Enemy.level = 0;

    Enemy.init = function() {
        
        console.log("Enemy initialization...");

        var xCoordinate = new Date().getMilliseconds() % 2 == 1 ? 10 : 210 + 'px';
        this.element.style.left = xCoordinate;
        this.element.style.top = 10 + 'px';
    };

    Enemy.restart = function() {

        if(Enemy.animationInterval != undefined) {
            clearInterval(this.animationInterval);
        }

        this.number += 1;
        if(this.number % 10 == 0) {
            this.level += 1;
        }
        document.getElementById("enemy-number").innerHTML = this.number;
        document.getElementById("enemy-level").innerHTML = this.level;

        this.init();
        this.setVerticalSpeed(this.getCurrentSpeed());
        this.run();
    };

    Enemy.run = function() {
        this.animationInterval = setInterval(moveEnemy, 10);
        function moveEnemy() {
            if (Enemy.isOutOfScreen())
            {            
                clearInterval(Enemy.animationInterval);
                Enemy.restart();
            } 
            else if (Enemy.isSmashedTortuga())
            {
                clearInterval(Enemy.animationInterval);
                alert("Enemy crashed you!");
            }
            else
            {
                Enemy.moveDown();
            }
        };
    };

    Enemy.getCurrentSpeed = function() {
        return getRandomInt(3, 8) + this.level;
    };

    Enemy.isOutOfScreen = function() {
        return this.getFloatTop() + this.getFloatHeight() >= this.getFloatParentHeight();
    };

    Enemy.isSmashedTortuga = function() {
        return this.getFloatTop() + this.getFloatHeight() >= Tortuga.getFloatTop() && this.isInLeftZone() == Tortuga.isInLeftZone();
    };
})();