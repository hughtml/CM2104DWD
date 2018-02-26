/**
 * Created by john on 10/03/2016.
 */

var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    console.log(cat.style.top);
    cat.style.left = (Math.cos(angle) * 200) + "px";
    console.log(cat.style.left);
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
