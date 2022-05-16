
import Bullet from './Bullet';


export interface Plane {
  x: number;
  y: number;
  speed: number;
  moveUp: () => void;
  moveDown: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  attack: () => void;
  run: () => void;
}

const defaultOptions = {
  y: 0,
  x: 0,
  speed: 5,
}

export function setupPlane(plane, bullets: Bullet[] = [], options?): Plane {
  // init
  plane.bullets = bullets
  Object.assign(plane, defaultOptions, options)

  initMove(plane)
  initRun(plane, bullets)
  initAttack(plane, bullets)



  return plane
}


function initAttack(plane, bullets) {
  plane.attack = () => {
    const bullet = new Bullet()
    bullet.x = plane.x + 25
    bullet.y = plane.y;
    bullet.border = 0;
    bullet.onDestroy = () => {
      bullets.splice(bullets.indexOf(bullet), 1)
    }
    bullets.push(bullet)
  }

}

function initRun(plane, bullets) {
  plane.run = () => {
    bullets.forEach(bullet => {
      bullet.move()

      if (bullet.y < 0) {
        bullets.splice(bullets.indexOf(bullet), 1)
      }
    })
  }
}
function initMove(plane) {

  plane.moveDown = function () {
    plane.y += plane.speed;
  }

  plane.moveUp = function () {
    plane.y -= plane.speed;
  }

  plane.moveRight = function () {
    plane.x += plane.speed;
  }

  plane.moveLeft = function () {
    plane.x -= plane.speed;
  }
}