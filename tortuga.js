(function() {

    console.log("tortuga.js is defining...");

    var element = document.getElementById("tortuga");

    Tortuga = Object.create(new Movable(element));

    Tortuga.element.style.left= 200 + 'px';
    Tortuga.element.style.top= 200 + 'px';

    Tortuga.createdDate = new Date();
})();