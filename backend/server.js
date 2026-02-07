const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

mongoose.connect(
'mongodb+srv://barcodeUser:barcode123@cluster0.aw8f11n.mongodb.net/?appName=Cluster0')
app.use('/api/products', productRoutes);

mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/products', productRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});