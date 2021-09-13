# 🧰 Handle Two Digit Value


Numbers are better shown with a min of two digits. This method will handle this parse for you.
Works better with integer numbers.

## Examples


```javascript
   const formatedNumber = handleTwoDigitValue(1); // returns '01'
```

If it cannot handle the fix:

```javascript
   const formatedNumber = handleTwoDigitValue(12); // returns '12'
```
