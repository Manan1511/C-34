var ball,ball1;
var database;
var pos;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball1 = createSprite(260,250,10,10);
    ball1.shapeColor = "blue";
    var ball1pos = database.ref('Ball/Position');
    ball1pos.on("value",function(data){
        pos = data.val();
        ball1.x = pos.x;
        ball1.y = pos.y;
    });
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function writePosition(x,y){
    database.ref('Ball/Position').set({
        x: pos.x+x,
        y: pos.y+y
    })

}