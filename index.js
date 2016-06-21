import zrender from 'zrender';
import Circle from 'zrender/lib/graphic/shape/Circle';

const width = 600;
const height = 400;

window.onload = function() {
  let zr = zrender.init(document.getElementById("main"));
  let circle = new Circle({
                  position: generateRandomPosition(),
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
                      fill: 'green'
                  }
              });
  zr.add(circle);
  circle.animate('position', true)
        .when(1000, {
          position: generateRandomPosition()
        })
        .when(1000, {
          position: generateRandomPosition()
        })
        .when(1000, {
          position: generateRandomPosition()
        })
        .start();
};

function generateRandomPosition() {
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  return [x, y];
}
