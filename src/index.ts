import express from 'express';
import exchangeRoutes from './routes/exchangeRoute.js';

const app = express();
const PORT = 3000;

app.use('/api', exchangeRoutes);

app.listen(PORT, ()=> {
    console.log(`Server running on localhost:${PORT}`);
});