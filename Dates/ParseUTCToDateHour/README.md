# 🧰 Parse UTC to Date Hour


Given an UTC string date it will returns another string in the format:
'dd/mm/yyyy hh:mm:ss'

## Examples


```javascript
   const parsedDate = parseUTCToDateHour('2010-03-22T14:56:30.8879164'); 
   // returns '22/03/2010 14:56:30'
```

```javascript
   const parsedDate = parseUTCToDateHour('2011-03-01'); 
   // returns '01/03/2011 00:00:00'
```
