import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "./product";

export class ProductData implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: "Samsung LED",
        productCode: "MG-0011",
        releaseDate: "March 19, 2020",
        description: "48-inch",
        price: 29999.99,
        starRating: 3.2,
        tags: ["Bed Room", "Living Room", "Home"],
      },
      {
        id: 2,
        productName: "HP",
        productCode: "MG-0023",
        releaseDate: "March 18, 2020",
        description: "Monitor COVID-19 Display",
        price: 32000.99,
        starRating: 4.2,
      },
      {
        id: 5,
        productName: "Hammer",
        productCode: "MG-0048",
        releaseDate: "Feb 21, 2020",
        description: "Curved claw steel hammer",
        price: 99.99,
        starRating: 4.8,
        tags: ["tools", "hammer", "construction"],
      },
      {
        id: 8,
        productName: "Saw",
        productCode: "MG-0022",
        releaseDate: "March 15, 2020",
        description: "15-inch steel blade hand saw",
        price: 110.55,
        starRating: 3.7,
      },
      {
        id: 10,
        productName: "Video Game Controller",
        productCode: "MG-0042",
        releaseDate: "January 15, 2020",
        description: "Standard two-button video game controller",
        price: 3499.95,
        starRating: 4.6,
      },
    ];
    return { products };
  }
}
