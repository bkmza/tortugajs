(function() {

    console.log("movable.js is defining...");

    Movable = function(movableElement) {
        var element = movableElement,
        
        moveLeft = function() {
            element.style.left = parseInt(element.style.left) - 200 + 'px';
            console.log("--->>> Movable.moveLeft called <<<---");
        },
        moveRight = function() {
            element.style.left = parseInt(element.style.left) + 200 + 'px';
            console.log("--->>> Movable.moveRight called <<<---");
        },
        moveUp = function() {
            element.style.top = parseInt(element.style.top) - 200 + 'px';
            console.log("--->>> Movable.moveUp called <<<---");
        },
        moveDown = function() {
            element.style.top = parseInt(element.style.top) + 200 + 'px';
            console.log("--->>> Movable.moveDown called <<<---");
        }

        return {
            moveLeft: moveLeft,
            moveRight: moveRight,
            moveUp: moveUp,
            moveDown: moveDown,
            element: element
        }
    };
})();

