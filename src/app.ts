import express from 'express';
import dotenv from 'dotenv';
import ProductsRoutes from './routes/products.route';
import UsersRoutes from './routes/users.route';
import OrdersRoutes from './routes/orders.route';
import LoginRoutes from './routes/login.route';

dotenv.config();

const app = express();

app.use(express.json());
app.use(ProductsRoutes);
app.use(UsersRoutes);
app.use(OrdersRoutes);
app.use(LoginRoutes);

export default app;
