'use strict';
import { mockProductsList } from "./mockData"

export const getProductsList = async (event) => {
  const productsList = await mockProductsList();
  return {
    statusCode: 200,
    body: JSON.stringify(
      productsList
    ),
  };
};
