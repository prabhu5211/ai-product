import Product from '../models/Product.js';

export const getAllProducts = (req, res) => {
  try {
    const { category } = req.query;
    
    if (category) {
      const filtered = Product.getByCategory(category);
      return res.json(filtered);
    }
    
    const products = Product.getAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = Product.getById(id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};
