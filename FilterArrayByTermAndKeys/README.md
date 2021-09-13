# 🧰 Filter Array By Term and Keys


This method was created to find in an array of objects the ones that, provided an
array of keys to look at, have a match for the provided search term for those keys
values.
It will return a filtered array for those matches.

## Examples

Given the following data array:

```javascript
   const dataArray = [
      {
         id: 1,
         name: 'Teste 2',
         description: 'Achocolatado',
      },
      {
         id: 2,
         name: 'Teste 88',
         description: 'Farofa',
      },
      {
         id: 3,
         name: 'Teste 0000',
         description: 'Camomila',
      },
   ];
```

1. If no search term is provided:

```javascript
   
   const filteredArray = filterArrayByTermAndKeys(dataArray, '', ['id']); // returns the same dataArray

```


2. Searching in the id key the ones who have the value '1'

```javascript
   const filteredArray = filterArrayByTermAndKeys(dataArray, '1', ['id']);
```

Will returns:
```javascript
   [
      {
         id: 1,
         name: 'Teste 2',
         description: 'Achocolatado',
      }
   ]
```

3. Searching in the keys 'id' and 'name' the ones who have the value '2'

```javascript
   const filteredArray = filterArrayByTermAndKeys(dataArray, '2', ['id', 'name']);
```

Will returns:
```javascript
   [
      {
         id: 1,
         name: 'Teste 2',
         description: 'Achocolatado',
      },
      {
         id: 2,
         name: 'Teste 88',
         description: 'Farofa',
      },
   ]
```

4. Searching in the key 'description' the ones who have the value 'mila'

```javascript
   const filteredArray = filterArrayByTermAndKeys(dataArray, 'mila', ['description']);
```

Will returns:
```javascript
   [
      {
         id: 3,
         name: 'Teste 0000',
         description: 'Camomila',
      },
   ]
```
