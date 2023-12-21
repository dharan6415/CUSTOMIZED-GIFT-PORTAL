const express = require('express');
const app = express();
const port = 3001; // Choose a port for your server

// Sample product data
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    // ... (other properties)
  },
  // ... (add more products)
];

// Endpoint to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint to get a specific product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
