import {doSomething} from "./test";
import "./pixi";

require('../css/app.scss');

//Aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    Text = PIXI.Text,
    Sprite = PIXI.Sprite;

let state;

let width = window.innerWidth === 0 ? 1920 : window.innerWidth,
    height = window.innerHeight === 0 ? 1080 : window.innerWidth;

//Create the renderer
let renderer = PIXI.autoDetectRenderer(width, height);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
let stage = new Container();
setup();

function setup () {	
	let message = new Text(
	  "PIXI Webpack Boilerplate",
	  {
	      fontFamily: "sans-serif",
	      fontSize: "40px", 
	      fill: "white"
	  }
	);
	message.position.set(100, 210);
	stage.addChild(message);
    
    loop();
}

function loop () {
    // loop this function 60 times/second
    requestAnimationFrame(loop);
    renderer.render(stage);
}