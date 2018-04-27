(function() {

    console.log("movable.js is defining...");

    Movable = function(id) {
        var element = document.getElementById(id);
        
        getElement = function() { 
            return document.getElementById(id); 
        },
        
        moveLeft = function() {
            element.style.left = parseFloat(element.style.left) - 200 + 'px';
            console.log("getFloatLeft() = " + getFloatLeft());
            // console.log("--->>> Movable.moveLeft called <<<---");
        },
        moveRight = function() {
            element.style.left = parseFloat(element.style.left) + 200 + 'px';
            console.log("getFloatLeft() = " + getFloatLeft());
            // console.log("--->>> Movable.moveRight called <<<---");
        },
        moveUp = function() {
            element.style.top = parseFloat(element.style.top) - 1 + 'px';
            // console.log("--->>> Movable.moveUp called <<<---");
        },
        moveDown = function() {
            element.style.top = parseFloat(element.style.top) + 1 + 'px';
            // console.log("--->>> Movable.moveDown called <<<---");
        },
        

        getFloatParentHeight = function() { return parseFloat(element.parentElement.getBoundingClientRect().height); },
        getFloatParentWidth = function() { return parseFloat(element.parentElement.getBoundingClientRect().width); },
        getFloatHeight = function() { return parseFloat(element.getBoundingClientRect().height); }
        getFloatWidth = function() { return parseFloat(element.getBoundingClientRect().width); },
        getFloatTop = function() { return parseFloat(element.style.top); },
        getFloatLeft = function() { return parseFloat(element.style.left); },

        isInLeftZone = function() { return parseFloat(element.style.left) < getFloatParentWidth() / 2; }

        return {
            moveLeft: moveLeft,
            moveRight: moveRight,
            moveUp: moveUp,
            moveDown: moveDown,

            element: element,

            getFloatHeight: getFloatHeight,
            getFloatWidth: getFloatWidth,
            getFloatParentHeight: getFloatParentHeight,
            getFloatTop: getFloatTop,
            getFloatLeft: getFloatLeft,

            isInLeftZone: isInLeftZone
        }
    };
})();