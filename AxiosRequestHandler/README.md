# 🧰 Axios Request Handler


This method is useful to handle the axios requests for you. Once you have this there will be no need
to treat each request you create with try/catch blocks. It is an asynchronous method, so remember to use
async await.

## Example

Imagine you have a service to create a product and an axios configured api
you can use the axiosRequestHandler as following.

```javascript
// createProduct.ts
import { Product } from '../../../@types/Product';
import myApi from '../../../services/myApi';
import axiosRequestHandler from '../../../utils/axiosRequestHandler';

type RawProduct = Omit<Product, 'id'>

const createProduct = async (productData: RawProduct) => {
  const requestData = await axiosRequestHandler<Product>(() =>
    myApi.post(`/product/${itemEan}`, productData),
    201
  );
  return requestData;
};
 
export default searchForItems;
```

If everything went well, your 'requestData' will have the following payload.

```javascript
{
  errors: false,
  data: 'newProductData', // a product with the created id
  status: 201,
  errorData?: {},
  errorMessage: '',
}
```

If you receive an status different than the 201 expected, like a 203, 'requestData' 
will have the following payload.

```javascript
{
  errors: true,
  data: {}
  status: 203,
  errorData?: {},
  errorMessage: 'Status de resposta inesperado',
}
```

If you receive an error code, like a 500, 'requestData' will have the
following payload.

```javascript
{
  errors: true,
  data: {}
  status: 500,
  errorData?: {}, // the payload returned from the api
  errorMessage: 'Erro no servidor',
}
```