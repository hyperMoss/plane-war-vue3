export class EnemyPlane {
  public x: number = 0
  public y: number = 0
  public speed: number = 1
  public border: number = 400;
  public width: number = 0
  public height: number = 0
  public onDestroy: any;
  constructor() {
  }

  move() {
    this.y += this.speed

    if (this.y > this.border) {
      this.onDestroy && this.onDestroy();
    }
  }

}

export function initEnemyPlanes(enemyPlanes: EnemyPlane[]) {

  const enemy = new EnemyPlane()


  enemyPlanes.push(enemy)
}

export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {


  enemyPlanes.forEach(enemy => {
    enemy.onDestroy = enemyPlanes.splice(enemyPlanes.indexOf(enemy), 1)
    enemy.move()

  })

}