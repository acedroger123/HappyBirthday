var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

// Create and setup background music
var bgMusic = new Audio('Taylor_Swift_-_Love_Story__Karaoke_Version_(128k).m4a');
bgMusic.loop = true;
bgMusic.volume = 0.5;

// Create overlay for initial interaction
var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.cursor = 'pointer';
overlay.style.zIndex = '1000';

var text = document.createElement('div');
text.textContent = 'Click anywhere to begin';
text.style.color = 'white';
text.style.fontSize = '24px';
text.style.fontFamily = 'Arial, sans-serif';

overlay.appendChild(text);
document.body.appendChild(overlay);

// Access the button
var button = document.getElementById("Button");
button.style.visibility = "hidden";

// Function to start everything
function startExperience() {
  bgMusic.play();
  overlay.style.display = 'none';
  draw(); // Start the animation
}

// Handle click on overlay
overlay.addEventListener('click', function() {
  startExperience();
});

// Create and load background image
var bgImage = new Image();
bgImage.src = 'image.png'; // Make sure to replace with your actual image path

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "everyday day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "everyday day I cannot believe how lucky I am",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 600) {
    opacity = 0;
  }
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "amongst trillions and trillions of stars, over billions of years",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "amongst trillions and trillions of stars, over billions of years",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1200) {
    opacity = 0;
  }
  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "to be alive, and to get to spend this life with you",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "to be alive, and to get to spend this life with you",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1800) {
    opacity = 0;
  }
  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "is so incredibly, unfathomably unlikely",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "is so incredibly, unfathomably unlikely",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2400) {
    opacity = 0;
  }
  if (frameNumber > 2400 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I love you so much , more than all the time and space in the universe can contain",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }

  if (opacity >= 1 && !button.classList.contains("visible")) {
    setTimeout(() => {
      button.style.visibility = "visible";
      button.classList.add("visible"); // Smooth fade-in using CSS
    }, 10000); // 10-second delay
  }
}

// Draw background function
function drawBackground() {
  context.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
}

function draw() {
  if (bgImage.complete) {
    drawBackground();
  } else {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  drawText();
  frameNumber++;
  requestAnimationFrame(draw);
}

// Handle resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (bgImage.complete) {
    drawBackground();
  } else {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
});
