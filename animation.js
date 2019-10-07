var airplane = createSprite("airplane",300,50,50,50);
setInterval(takeOff,10);
var x = 0;
var y = 0;
var d = 180;

function takeOff(){
	airplane.x = Math.sin(d)*500+250;
	airplane.y = Math.cos(d)*50;
	d=d-.05;
	setPosition(airplane);
}


function createSprite(name, x, y, w, h){
    var sprite = new Object()
    sprite.id = name;
    sprite.x = x;
    sprite.y = y;
    sprite.w = w;
    sprite.h = h;
    return sprite;
}

function setPosition(sprite){
    var e = document.getElementById(sprite.id);
    e.style.left = sprite.x+'px';
    e.style.top = sprite.y + 'px';
}
