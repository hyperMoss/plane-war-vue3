import { describe, it, expect } from "vitest";
import { setupPlane } from "./plane";

describe('Plane', () => {
  describe('move', () => {

    const defaultOptions = {
      speed: 1,
      x: 0,
      y: 0,
    }
    it('moveDown', () => {
      const Plane = setupPlane({}, defaultOptions)

      Plane.moveDown()

      expect(Plane.y).toBe(1)
    })

    it('moveSpeed', () => {
      const Plane = setupPlane({}, { y: 0, speed: 5 })

      Plane.moveDown()

      expect(Plane.y).toBe(5)
    })

    it('moveUp', () => {
      const Plane = setupPlane({}, defaultOptions)

      Plane.moveUp()

      expect(Plane.y).toBe(-1)
    })

    it('moveRight', () => {
      const Plane = setupPlane({}, defaultOptions)

      Plane.moveRight()

      expect(Plane.x).toBe(1)
    })
    it('moveLeft', () => {
      const Plane = setupPlane({}, defaultOptions)

      Plane.moveLeft()

      expect(Plane.x).toBe(-1)
    })
  })
})