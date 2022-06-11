import { describe, it, expect } from "vitest";
import { Bullet } from "./Bullet";
import { setupPlane } from "./plane";

describe('Plane', () => {
  describe('move', () => {

    const defaultOptions = {
      speed: 1,
      x: 0,
      y: 0,
    }

    function creatPlane() {
      return setupPlane({}, [], { ...defaultOptions })
    }
    it('moveDown', () => {
      const Plane = creatPlane()

      Plane.moveDown()

      expect(Plane.y).toBe(1)
    })

    it('moveSpeed', () => {
      const Plane = creatPlane()

      Plane.moveDown()

      expect(Plane.y).toBe(1)
    })

    it('moveUp', () => {
      const Plane = creatPlane()

      Plane.moveUp()

      expect(Plane.y).toBe(-1)
    })

    it('moveRight', () => {
      const Plane = creatPlane()

      Plane.moveRight()

      expect(Plane.x).toBe(1)
    })
    it('moveLeft', () => {
      const Plane = creatPlane()

      Plane.moveLeft()

      expect(Plane.x).toBe(-1)
    })
  })
})


describe('attack', () => {
  it('attack', () => {
    const bullets = []
    const plane = setupPlane({}, bullets)
    plane.attack()
    expect(bullets.length).toBe(1)
  })
})



describe('run', () => {
  it('should move bullets', () => {
    const bullet = new Bullet()
    bullet.y = 0
    const plane = setupPlane({}, [bullet])

    plane.run()
    expect(bullet.y).not.toBe(0)
  })

  it('should remove bullets', () => {
    const bullets = []

    const plane = setupPlane({}, bullets, { x: 0, y: 0 })
    plane.attack()
    plane.run()
    expect(bullets.length).toBe(0)
  })

})