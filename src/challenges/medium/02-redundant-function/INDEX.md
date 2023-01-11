# A Redundant Function

Write a function `redundant` that takes in a string `str` and returns a function that returns `str`.

---

### Examples:

```
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
```

---

### Solution:

- [Code](/src/challenges/medium/02-redundant-function/redundant-function.ts)
- [Tests](/src/challenges/medium/02-redundant-function/test/redundant-function.test.ts)
