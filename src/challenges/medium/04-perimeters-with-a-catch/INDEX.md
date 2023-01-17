# Perimeters With A Catch

Write a function that takes a number and returns the perimeter of either a circle or a square. 

The input will be in the form (letter `shape`, number `length`) where the letter will be either `"s"` for square, or `"c"` for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

```
Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.
```

The catch is you can only use arithmetic or comparison operators, which means:

- No if... else statements.
- No objects.
- No arrays.
- No formatting methods, etc.

---

### Examples:

```
perimetersWithACatch("s", 7) ➞ 28
perimetersWithACatch("c", 4) ➞ 25.12
perimetersWithACatch("c", 9) ➞ 56.52
```

### Notes:

- No rounding is needed.

---

### Solution:

- [Code](/src/challenges/medium/04-perimeters-with-a-catch/perimeters-with-a-catch.ts)
- [Tests](/src/challenges/medium/04-perimeters-with-a-catch/test/perimeters-with-a-catch.test.ts)
