import { it, describe, expect } from "vitest"
import { hitTestObject } from "./hitTestObject"


describe('hitTestObject', () => {


  it('two box cross', () => {

    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }
    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100
    }
    const r = hitTestObject(rectA, rectB)
    expect(r).toBe(true)
  })


  it('two box cross not', () => {

    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }
    const rectB = {
      x: 150,
      y: 150,
      width: 100,
      height: 100
    }
    const r = hitTestObject(rectA, rectB)
    expect(r).toBe(false)
  })
})
