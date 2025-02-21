import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router/router';

dotenv.config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Node.js!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
