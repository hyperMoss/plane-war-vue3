


interface Plane {
  x: number;
  y: number;
  speed: number;
  moveUp: () => void;
  moveDown: () => void;
  moveLeft: () => void;
  moveRight: () => void;
}

const defaultOptions = {
  y: 0,
  x: 0,
  speed: 5,
}

export function setupPlane(plane, options?): Plane {
  // init
  Object.assign(plane, defaultOptions, options)

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

  return plane
}