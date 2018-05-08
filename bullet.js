(function() {

    Bullet = Object.create(new Movable("bullet"));

    Bullet.animationInterval;
    Bullet.frags = 0;

    Bullet.attack = function() {

        if(Bullet.animationInterval != undefined) {
            return;
        }
        
        this.setVerticalSpeed(7);

        this.element.style.left = Tortuga.isInLeftZone() ? 10 : 210 + 'px';
        this.element.style.top = this.getFloatParentHeight() - this.getFloatHeight() + 'px';

        this.animationInterval = setInterval(moveBullet, 5);
        function moveBullet() {
            if (Bullet.isOutOfScreen())
            {            
                clearInterval(Bullet.animationInterval);
                Bullet.animationInterval = undefined;
            } 
            else if (Bullet.isKilledEnemy())
            {
                clearInterval(Bullet.animationInterval);
                Bullet.animationInterval = undefined;
                Bullet.moveOutOfScreen();
                Bullet.frags += 1;
                document.getElementById("enemyFrags").innerHTML = Bullet.frags;
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