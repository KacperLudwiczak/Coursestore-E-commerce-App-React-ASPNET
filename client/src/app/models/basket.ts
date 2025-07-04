import type { Product } from "./product"

export type Basket = {
    basketId: string
    items: Item[]
}

export class Item {
    constructor(product: Product, quantity: number) {
    this.productId = product.id;
    this.name = product.name;
    this.price = product.price;
    this.pictureUrl = product.pictureUrl;
    this.author = product.author;
    this.type = product.type;
    this.quantity = quantity;
    }

    productId: number
    name: string
    price: number
    pictureUrl: string
    author: string
    type: string
    quantity: number
  }