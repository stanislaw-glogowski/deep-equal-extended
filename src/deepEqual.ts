import * as BN from "bn.js";
import { Buffer } from "buffer";
import { IDeepEqualOptions } from "./interfaces";

/**
 * checks if a and b are deep equal
 * @param a
 * @param b
 * @param options
 * @param depth
 */
export function deepEqual(a: any, b: any, options: IDeepEqualOptions = {}, depth = 0): boolean {
  options = {
    maxDepth: 5,
    ...options,
  };

  let result: boolean = false;

  if (depth <= options.maxDepth) {
    if (a === b) {
      result = true;
    } else {
      const aType = typeof a;
      const bType = typeof b;
      if (
        aType === bType &&
        !!a === !!b &&
        aType === "object"
      ) {
        if (
          BN.isBN(a) &&
          BN.isBN(b)
        ) {
          result = (a as BN.IBN).eq(b);
        } else if (
          Buffer.isBuffer(a) &&
          Buffer.isBuffer(b)
        ) {
          result = (a as Buffer).equals(b);
        } else if (
          Array.isArray(a) &&
          Array.isArray(b)
        ) {
          const aLength = a.length;
          const bLength = b.length;
          if (aLength === bLength) {
            result = (a as any[]).every((value, index) => deepEqual(value, b[ index ], options, depth + 1));
          }
        } else {
          const aKeys = Object.keys(a);
          const bKeys = Object.keys(b);
          const keys = [
            ...new Set([
              ...aKeys,
              ...bKeys,
            ]),
          ];

          if (
            aKeys.length === keys.length &&
            bKeys.length === keys.length
          ) {
            result = keys.every((key) => deepEqual(a[ key ], b[ key ], options, depth + 1));
          }
        }
      }
    }
  }

  return result;
}
