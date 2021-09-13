# 🧰 Is Complete Date?


It is possible that the backend returns date strings, both UTC, but in different layouts.
Long one (with time): 2018-06-02T14:56:30.8879164
Short one: 2018-06-02
You may face problems converting short ones to date, so it's useful to know what type of date 
is received before handling it. 

## Examples


```javascript
   const completeDate = isCompleteDate('2018-06-02T14:56:30.8879164'); // returns true
```

```javascript
   const completeDate = isCompleteDate('2018-06-02'); // returns false
```
