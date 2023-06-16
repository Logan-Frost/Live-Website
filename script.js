let colours = ["green", "white", "red", "green"]
let index1 = 0
let timeElapsed = 0
const numCircles = 30; // there will be 30 circles altogether
let circles = []; // this will store the 30 circles
let index = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(width, height);
  for (let index = 0; index < numCircles; index++) { // makes 30 circles that form together to look like a shooting star
    let circle = {
      xValue: 5 * index, // this puts the leftmost circle at the edge
      yValue: height / 2,
      radius: index / 2,
      diameter: index,
      speed: 3,
      colour: {
        r: 255,
        g: 255,
        b: 255 - index * 255 / 30, // this makes it darker yellow near the front and a lighter yellow at the back
        t: 10 + 8 * index // this is the transparency
      }
    }
    circles.push(circle); // puts the circle into the array
  }
  noStroke();
}




function draw() {
  let colour = document.getElementById("colour").value;
  background(colour)

  let colour2 = document.getElementById("colour2").value;
  // fill(colour2)


  background(colour); // the black background
  for (let circle of circles) { // goes through each of the 30 circles
    if (colour2 != "") {
      colour3 = color(colour2);
      colour3.setAlpha(circle.colour.t)
      fill(colour3);
    }
    ellipse(circle.xValue, circle.yValue, circle.diameter);
    // What else goes here?
    circle.xValue += 10
    if (circle.xValue >= windowWidth) {
      circle.xValue = -120
    }
  }

  // name
  textSize(25)
  fill(colours[index1])
  text("Logan", width - 100, height - 100);

  if (index1 == 3) {
    index1 = 0
  }

  timeElapsed++
  // time inbetween colour changes in name 
  if (timeElapsed % 60 == 0) {
    index1++
  }
}


function clearColour() {
  document.getElementById("colour").value = ""
  document.getElementById("colour2").value = ""
}

