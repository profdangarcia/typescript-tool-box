# 🧰 Fix String Encode


Sometimes you will need to handle strings with bad encode comming from a external service.
This method tries to fix the encode to UTF-8, and may be able to fix the string.

## Examples


```javascript
   const badEncodeString = 'Aguardando ConferÃªncia';
   const fixedString = fixStringEncode(badEncodeString); // returns 'Aguardando Conferência'
```

If it cannot handle the fix:

```javascript
   const fineString = 'Conferência';
   const fixedString = fixStringEncode(fineString); // returns the same string 'Conferência'
```
