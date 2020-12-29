const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground 

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

}

function draw(){
    background("black")

}

function mouseDragged(){
    Matter.Body.setPosition (polygon.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
    slingShot.fly()
}