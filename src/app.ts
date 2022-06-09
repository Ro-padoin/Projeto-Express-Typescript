import express from 'express';
import dotenv from 'dotenv';
import ProductsRoutes from './routes/products.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(ProductsRoutes);

export default app;
