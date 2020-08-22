window.onload = function () {
  //definitions
  const canvas = document.getElementById("lab4-canvas");
  canvas.width = 900;
  canvas.height = 600;
  canvas.style.backgroundColor = "black";
  const context = canvas.getContext("2d");

  const radian = Math.PI / 180;

  // context.beginPath();
  // context.fillStyle = "yellow";
  // context.moveTo(450, 300);
  // context.arc(450, 300, 100, 30 * radian, 330 * radian, false);
  // context.lineTo(450, 300);
  // context.fill();
  // context.beginPath();
  // context.fillStyle = "black";
  // context.arc(450, 250, 10, 0, 360 * radian, false);
  // context.fill();

  let x = 0;
  let y = 0;
  let signx = 1;
  let signy = 1;
  let ball1x = canvas.width;
  let ball2x = canvas.width - 126;
  let ball3x = canvas.width - 250;

  function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = "yellow";
    context.moveTo(450, 300);
    context.arc(450, 300, 100, (30 - x) * radian, (330 + y) * radian, false);
    if (30 - x == 0) {
      signx = -1;
    } else if (30 - x == 30) {
      signx = +1;
    }
    if (330 + y == 360) {
      signy = -1;
    } else if (330 + y == 330) {
      signy = +1;
    }
    x = x + signx * 0.75;
    y = y + signy * 0.75;
    context.fill();
    context.beginPath();
    context.fillStyle = "black";
    context.arc(450, 250, 10, 0, 360 * radian, false);
    context.fill();
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(ball1x, 300, 10, 0, 360 * radian, false);
    context.fill();
    ball1x = ball1x - 2;
    if (ball1x === 500) {
      ball1x = canvas.width;
    }
    context.beginPath();
    context.arc(ball2x, 300, 10, 0, 360 * radian, false);
    context.fill();
    ball2x = ball2x - 2;
    if (ball2x === 500) {
      ball2x = canvas.width;
    }
    context.beginPath();
    context.arc(ball3x, 300, 10, 0, 360 * radian, false);
    context.fill();
    ball3x = ball3x - 2;
    if (ball3x === 500) {
      ball3x = canvas.width;
    }
  }
  animate();
};
