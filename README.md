# Extended deepEqual function

[![NPM version][npm-image]][npm-url]

Supports BN.js, Buffer, primitives, objects and array. 

## Installation

```bash
$ npm i deep-equal-extended -S
```

## Usage

```typescript
import * as BN from "bn.js";
import { deepEqual } from "deep-equal-extended";

console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true

console.log(deepEqual({ a: new BN(1), b: 2 }, { a: new BN(1), b: 2 })); // true

console.log(deepEqual({ a: new BN(2), b: 2 }, { a: new BN(1), b: 2 })); // false
```

## Testing

```bash
$ npm test
```

## License

The MIT License

[npm-image]: https://badge.fury.io/js/deep-equal-extended.svg
[npm-url]: http://npmjs.com/package/deep-equal-extended