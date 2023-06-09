
const gCubes = [];
const canvas_height = 10;
const canvas_width  = 10;

function setup() {
  initCanvas();
}
function preload() {
  soundFormats('mp3', 'ogg');
  sound = loadSound('correct.mp3');
  sound2 = loadSound('Buzzer.mp3');
}

let old_letter;
// let incorrect_answer = ["B","C", "D"];
correctAnswer = "A";
function draw() {
  asyncCubeControl();
  ellipse( mouseX, mouseY, 20, 20 );
//   for( const cube of gCubes ){
    cube = gCubes[0];
    moving_cube = gCubes[1];
    if(hasGameStarted) {
      if( cube ){
          //this checks the position on the letters
      //   console.log(cube.standardId, cube.angle);
        letter = cube.standardId;
        if(letter){
        letter = letter.charAt(letter.length-1);
        if(letter == correctAnswer && letter != old_letter && moving_cube){
          moving_cube.move(50, 50, move_distance);
          sound.play();
          old_letter = letter;
          currentQuestionIndex++;
          setNextQuestion();
        }else if((letter == "A" || letter == "B" || letter == "C" || letter == "D") && letter != old_letter && moving_cube){
          moving_cube.move(-50, -50, move_distance);
          sound2.play();
          old_letter = letter;
        }
      }else{
          old_letter = letter;
        }
        console.log(letter);
        
      }
    }
// }
}

function windowResized() {
  initCanvas();
}

async function asyncCubeControl() {


}
//this connects the cube
function mouseClicked() {
    if(mouseX >=0 && mouseX <= canvas_width && mouseY<=canvas_height && mouseY>=0){
  P5tCube.connectNewP5tCube().then( cube => {
    gCubes.push( cube );
    cube.turnLightOn( 'white' );
  } );
}
}

let move_distance = 50;


//this moves the cube
function keyPressed() {
  console.log( keyCode );

    
//   for( const cube of gCubes ){
  cube = gCubes[1];

  if( cube ){
    cube.move(50, 50, move_distance);
    
  }
    // }

}

const connectCube = () => {
    P5tCube.connectNewP5tCube().then( cube => {

      gCubes.push( cube );
      cube.turnLightOn( color( 255, 255, 255, 255 ) );
      // cube.lightChar.turnLightOnRGBA( 255, 255, 255, 255 );
    } );

}

const initCanvas = () => {

  resizeCanvas( canvas_width, canvas_height);
  

  const COLOR_SMOKEWHITE = 245;
	background( COLOR_SMOKEWHITE );

}