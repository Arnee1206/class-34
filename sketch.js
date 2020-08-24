var ball;
var database,position;
var locball;


function setup(){
    //setting name of our database 1
    database=firebase.database();
    createCanvas(500,500);
    //variable stores the address of the database 2
    //.ref (refers to teh location pf the database)
  locball=database.ref('ball/positions'); 
  //.on (keeps on reading the values from tha database )3
  locball.on("value",readPosition,showError);
  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";

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

//this function writes the value in to the database 
function writePosition(x,y){
    //.ref refers to database   .set writes into the database
    database.ref("ball/positions").set({
        'x': position.x+x,
        'y':position.y+y

    })
}

// reads the x and y position from the database
function readPosition(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;
}
function showError(){
    console.log("error");
}