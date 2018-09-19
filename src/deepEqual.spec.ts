import * as BN from "bn.js";
import { deepEqual } from "./deepEqual";

describe("deepEqual()", () => {

  it("should returns true for same BN", () => {
    expect(deepEqual(new BN(1), new BN(1))).toBeTruthy();
  });

  it("should returns true for same arrays", () => {
    expect(deepEqual([ new BN(1) ], [ new BN(1) ])).toBeTruthy();
  });

  it("should returns true for same objects", () => {
    expect(deepEqual({ a: new BN(1) }, { a: new BN(1) })).toBeTruthy();
  });

  it("should returns false for different types", () => {
    expect(deepEqual(1, true)).toBeFalsy();
  });

  it("should returns false for different objects", () => {
    expect(deepEqual({ a: new BN(1) }, { a: new BN(1), b: 1 })).toBeFalsy();
  });
});
