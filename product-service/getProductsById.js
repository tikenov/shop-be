'use strict';
import { mockProductsList } from "./mockData"

const notFound = {
  statusCode: 404,
  body: JSON.stringify(
    { error: 'Product not found' }
  ),
}

export const getProductsById = async (event) => {
  if (!event.pathParameters)
    return notFound;

  const { productId } = event.pathParameters;
  if (!productId)
    return notFound;

  const productsList = await mockProductsList();
  const product = productsList.find(el => el.id == productId)
  if (!product)
    return notFound;

  return {
    statusCode: 200,
    body: JSON.stringify(
      product
    ),
  };
};
