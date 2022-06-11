import { describe, expect, it } from "vitest"
import { Bullet } from './Bullet'


describe('Bullet', () => {

  it('move', () => {

    const bullet = new Bullet();
    bullet.y = 1
    bullet.speed = 1
    bullet.move()

    expect(bullet.y).toBe(0)
  })

  it('over the border', () => {
    const bullet = new Bullet()
    bullet.y = 0
    bullet.x = 0
    bullet.speed = 1
    bullet.border = 0
    bullet.move()

    expect(bullet.y).toBe(-1)

  })

})