(function() {

    Bullet = Object.create(new Movable("bullet"));

    Bullet.attack = function() {

        this.setVerticalSpeed(7);
        this.element.style.left = 10 + 'px';
        this.element.style.top = this.getFloatParentHeight() - this.getFloatHeight() + 'px';

        var id = setInterval(moveOn, 5);
        function moveOn() {
            if (Bullet.isOutOfScreen())
            {            
                clearInterval(id);
            } 
            else if (Bullet.isKilledEnemy())
            {
                clearInterval(id);
                Bullet.moveOutOfScreen();
                Enemy.restart();
            }
            else
            {
                Bullet.moveUp();
            }
        };
    };

    Bullet.moveOutOfScreen = function() {
        Bullet.element.style.top = Bullet.getFloatParentHeight() + 'px';
    };

    Bullet.isKilledEnemy = function() {
        return Enemy.getFloatTop() + Enemy.getFloatHeight() >= this.getFloatTop() && this.isInLeftZone() == Enemy.isInLeftZone();
    };

    Bullet.isOutOfScreen = function() {
        return this.getFloatTop() + this.getFloatHeight() <= 0;
    };
})();