/**
 * Created by john on 10/03/2016.
 */

var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    var topValue = (Math.sin(angle) * 20);
    if ((topValue < 0)) {
      topValue = 0;
    }
    cat.style.top = topValue + "px";

    var leftValue = (Math.cos(angle) * 200);
    while ((leftValue < 0)) {
      leftValue++;
    }
    cat.style.left = leftValue + "px";

    requestAnimationFrame(Math.cos(angle) * 200);
}
requestAnimationFrame(animate);
