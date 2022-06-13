import { describe, expect, it } from 'vitest';
import { Bullet } from './Bullet';
import { EnemyPlane } from './EnemyPlane';
import { fighting } from './fighting';
import { setupPlane } from './Plane';


describe('crash', () => {

  it('bullet with enemy'), () => {
    const bullet = new Bullet()

    bullet.x = 0
    bullet.y = 0
    bullet.width = 100
    bullet.height = 100

    const bullets = [bullet]
    const plane = setupPlane({}, bullets);
    const enemy = new EnemyPlane()

    enemy.x = 50
    enemy.y = 50
    enemy.width = 100
    enemy.height = 100
    const enemyPlanes = [enemy]


    fighting(plane, enemyPlanes)

    expect(bullets.length).toBe(0)
    expect(enemyPlanes.length).toBe(0)
  }

})