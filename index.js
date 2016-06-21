import zrender from 'zrender';
import Circle from 'zrender/lib/graphic/shape/Circle';
import LinearGradient from 'zrender/lib/graphic/LinearGradient';

let width = 1000;
let height = 600;

window.onload = function() {
  let zr = zrender.init(document.getElementById("main"));
  let  gradient = new LinearGradient();
  let originPosition = generateRandomPosition();

  gradient.addColorStop(0, 'yellow');
  gradient.addColorStop(1, 'black');

  let circle = new Circle({
                  position: originPosition,
                  scale: [1, 1],
                  shape: {
                      cx: 0,
                      cy: 0,
                      r: 50
                  },
                  style: {
                      lineWidth: 5,
                      text:'circle',
                      textPosition:'inside',
                      fill: gradient
                  }
              });
  zr.add(circle);

  circle.animate('', true)
        .when(500, {
          position: generateRandomPosition()
        })
        .when(1000, {
          position: generateRandomPosition()
        })
        .when(1500, {
          position: generateRandomPosition()
        })
        .when(2000, {
          position: originPosition
        })
        .start();
};

function generateRandomPosition() {
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  return [x, y];
}
