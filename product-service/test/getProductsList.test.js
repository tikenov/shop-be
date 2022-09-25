import { getProductsList } from "../getProductsList"

describe("getProductsList Tests", () => {

  test("should return array of products", async () => {
    const response = await getProductsList();
    const data = JSON.parse(response.body);
    expect(Array.isArray(data)).toBe(true);
  });

  test("should include banana", async () => {
    const response = await getProductsList();
    const data = JSON.parse(response.body);
    const banana = {
      count: 6,
      description: "Fresh bananas from Africa.",
      id: "1614",
      price: 10,
      title: "Banana",
      image: "https://source.unsplash.com/Kl3467edwsE"
    };
    expect(data).toContainEqual(banana);
  });

  test("should have status code 200", async () => {
    const response = await getProductsList();
    expect(response.statusCode).toBe(200);
  });
});