import express, { json } from 'express';
import bodyParser from 'body-parser';
import categoryRouter from './Routes/categoryRoutes';

let app = express();
app.use(bodyParser.json());

// app.use(bodyParser.json());
app.use(express.json());

app.use('/category', categoryRouter);

app.listen(4000, () => {
    console.log('Server is running well...');
});
