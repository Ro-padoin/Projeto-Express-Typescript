import express from 'express';
import dotenv from 'dotenv';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(UsersRoutes);

export default app;
