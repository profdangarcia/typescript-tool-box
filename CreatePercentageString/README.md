# 🧰 Create Percentage String (PT-BR)


This method was created to calculate the percentage of a value in relation to a total and return the value formatted in PT-BR with a maximum of two decimal places as a string.

## Examples

```javascript
   
   const formattedValue = createPercentageString(100, 50); // returns 50%

   const anotherPercentage = createPercentageString(130, 22); // returns 16,92%

   const invalidTotal = createPercentageString(0, 12); // returns 0%

```
