# Nullish checks

Guard functions for checking nullish/non-nullish values.

## Installation

```bash
npm install --save @gmjs/nullish-checks
```

## Usage

```ts
function isNullish<T>(value: T): value is T extends null | undefined ? T : never;

function isNotNullish<T>(value: T): value is T extends null | undefined ? never : T;
```
