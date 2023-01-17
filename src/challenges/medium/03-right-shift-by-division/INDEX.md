# Right Shift by Division

The right shift operation is similar to floor division by powers of two.

Sample calculation using the right shift operator (`>>`):

```
80  >> 3 = floor(80/2^3)  = floor(80/8)  = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5  >> 1 = floor(-5/2^1)  = floor(-5/2)  = -3
```

Write a function that mimics (without the use of `>>`) the right shift operator and returns the result from the two given integers.

---

### Examples:

```
rightShiftByDivision(80, 3) ➞ 10
rightShiftByDivision(-24, 2) ➞ -6
rightShiftByDivision(-5, 1) ➞ -3
rightShiftByDivision(4666, 6) ➞ 72
rightShiftByDivision(3777, 6) ➞ 59
rightShiftByDivision(-512, 10) ➞ -1
```

### Notes:

- There will be no negative values for the second parameter `y`.
- This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
- Alternatively, you can solve this challenge via recursion.

---

### Solution:

- [Code](/src/challenges/medium/03-right-shift-by-division/right-shift-by-division.ts)
- [Tests](/src/challenges/medium/03-right-shift-by-division/test/right-shift-by-division.test.ts)
