'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  coin = new Coin();


}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }



}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function title() {
  background(0);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w / 2, h / 5);

  textSize(30);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}


function level1() {
  background(50, 150, 200);


  player.display();
  player.move();

  coin.display();
  coin.move();

  // check for collision, if there is a collision increase points by 1
  if (dist(player.x, player.y, coin.x, coin.y) <= (player.r + coin.r) / 2) {
    points++;
    console.log(points);
  }

  text(`points: ${points}`, w/4, h - 30);


}

function level1MouseClicked() {
  //  points++;
  //  console.log('points = ' + points);
  //
  //  if (points >= 10){
  //    state = 'you win';
  //  }
  // }

  function youWin() {
    background(255, 50, 80);
    textSize(80);
    stroke(254);
    text('YOU WIN', w / 2, h / 2);

    textSize(30);
    text('click anywhere to restart', h / 2, h * 3 / 4);

  }

  function youWinMouseClicked() {
    state = 'level 1';
    points = 0;
  }
}
