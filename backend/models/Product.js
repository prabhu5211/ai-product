import { readFile } from 'fs/promises';

class Product {
  constructor() {
    this.products = [];
  }

  async loadProducts() {
    try {
      const data = await readFile('./data/products.json', 'utf-8');
      this.products = JSON.parse(data);
      return this.products;
    } catch (error) {
      throw new Error(`Failed to load products: ${error.message}`);
    }
  }

  getAll() {
    return this.products;
  }

  getByCategory(category) {
    return this.products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  getByIds(ids) {
    return this.products.filter(p => ids.includes(p.id));
  }

  getById(id) {
    return this.products.find(p => p.id === parseInt(id));
  }

  getProductContext() {
    return this.products.map(p => 
      `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Price: $${p.price}, Tags: ${p.tags.join(', ')}`
    ).join('\n');
  }
}

export default new Product();
