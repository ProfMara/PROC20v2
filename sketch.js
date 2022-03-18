const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine, world;
var solo, parado;
var mexendo;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    parado = {
        isStatic: true
    }

    solo = Bodies.rectangle(200, 390, 400, 20, parado);
    World.add(world, solo);

    rectMode(CENTER);

}

function draw() {
    Engine.update(engine);
    background("cyan");
    fill("brown");
    rect(solo.position.x, solo.position.y, 400, 20);



}