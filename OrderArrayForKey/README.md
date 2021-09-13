# 🧰 Order Array for Key


This method will reorder an object array looking for the specified key.
It will return a reordered array in alphabetical order or ascending order
for the provided key.
Also, you may use an optional string array to specify a custom order for the 
array elements.
If no key value is provided, the same array will be returned.

## Examples

Given the following data array:

```javascript
   const dataArray = [
      {
        id: 2,
        name: 'Teste 88',
        description: 'Farofa',
      },
      {
        id: 1,
        name: 'Teste 2',
        description: 'Achocolatado',
      },
      {
        id: 3,
        name: 'Teste 0000',
        description: 'Camomila',
      },
   ];
```

1. If you choose to order by 'id':

```javascript
   
  const reorderedArray = orderArrayForKey(dataArray, 'id'); 

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
    {
      id: 3,
      name: 'Teste 0000',
      description: 'Camomila',
    },
  ];
```


2. If you choose to order by 'description':

```javascript
  const reorderedArray = orderArrayForKey(dataArray, 'description');;
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
      id: 3,
      name: 'Teste 0000',
      description: 'Camomila',
    },
    {
      id: 2,
      name: 'Teste 88',
      description: 'Farofa',
    },
   ]
```

3. If no key is provided

```javascript
  const reorderedArray = orderArrayForKey(dataArray, ''); // will return the same array
```

4. If you provide a custom order

```javascript
  const customOrder = ['Camomila', 'Farofa', 'Achocolatado'];
  const filteredArray = orderArrayForKey(dataArray, 'description', customOrder);
```

Will returns:
```javascript
   [
      {
        id: 3,
        name: 'Teste 0000',
        description: 'Camomila',
      },
      {
        id: 2,
        name: 'Teste 88',
        description: 'Farofa',
      },
      {
        id: 1,
        name: 'Teste 2',
        description: 'Achocolatado',
      },
   ]
```
