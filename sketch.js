var lines = [];

//setup
function setup() {
  createCanvas(800, 500);

  lines = new Array(width);
  let colr = color(255, 0, 0);

  for (let i = 0; i < lines.length; i++) {
    var high = random(height);
    lines[i] = new aLine(i, height, i, high, colr);
  }
}

function bubbleSort() {
  var i = 0;
  var r = color(255, 0, 0);
  var g = color(0, 255, 0);
  var b = color(0, 0, 255);
  var p = color(255, 102, 204);

  if (i < lines.length) {
    for (let j = 0; j < lines.length - i - 1; j++) {
      
      if ((lines[j].getHeight()) < (lines[j + 1].getHeight())) {
        lines[j].setColor(g);
        lines[j+1].setColor(g);
        swap(lines, j, j+1);
      } else {
        //frameRate(20);
        lines[j].setColor(r);
        lines[j+1].setColor(r);
      }
      
    }
    i++;
  }
}

//swap
function swap(arr, a, b) {
  //swapColor(arr, a, b);
  var r = color(255, 0, 0);
  var temp = lines[a].getHeight();
  lines[a].setHeight(lines[b].getHeight());
  lines[b].setHeight(temp);
  
  //arr[a].setColor(r);
  //arr[b].setColor(r);
  
}

//draw
function draw() {
  background(0);
  var r = color(255, 0, 0);
    var g = color(0, 255, 0);
    var b = color(0, 0, 255);

  frameRate(80);
  for (let i = 0; i < lines.length; i++) {
    lines[i].show();
  }

  bubbleSort();
}

//aLine class
class aLine {
  constructor(x1, y1, x2, y2, sColor) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.sColor = sColor;
  }

  setColor(color) {
    this.sColor = color;
  }

  setHeight(y2) {
    this.y2 = y2;
  }

  getHeight() {
    return this.y2;
  }

  show() {
    stroke(this.sColor);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}