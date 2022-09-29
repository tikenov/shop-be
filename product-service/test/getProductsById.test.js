import { getProductsById } from "../getProductsById"

describe("getProductsById Tests", () => {

  test("should return product with status code 200", async () => {
    const response = await getProductsById({
      pathParameters: { productId: 1614 }
    });
    const data = JSON.parse(response.body);
    const banana = {
      count: 6,
      description: "Fresh bananas from Africa.",
      id: "1614",
      price: 10,
      title: "Banana",
      image: "https://source.unsplash.com/Kl3467edwsE"
    };
    expect(data).toEqual(banana);
    expect(response.statusCode).toBe(200);
  });

  test("should return error with status code 404", async () => {
    const response = await getProductsById({
      pathParameters: { productId: 7777 }
    });
    const data = JSON.parse(response.body);
    expect(data).toEqual({ error: "Product not found" });
    expect(response.statusCode).toBe(404);
  });

});