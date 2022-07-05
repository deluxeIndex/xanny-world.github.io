function titleAnimation(titleName, delay) {
  let int = 0;
  let direction = true;
  aniTitle = setInterval(function () {
    if (int == titleName.length) direction = false;
    if (int == false) direction = true;
    int = direction == true ? ++int : --int;
    newtitle = int == 0 ? "" : titleName.slice(0, int);
    document.title = newtitle;
  }, delay);
}
const titleName = "Xanny World!"
titleAnimation(titleName, 500);
function rain() {
  let amount = 200;
  let body = document.querySelector('body');
  let i = 0;
  while (i < amount) {
    let drop = document.createElement('i');

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
    body.appendChild(drop);
    i++;
  }
}

rain();
