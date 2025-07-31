import express from 'express';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

// mounting middleware
app.use(express.static('public'));
app.use(express.json());
app.use(middleware);
app.use(users);





// define endpoints
app.get('/', (req, res) => {
    res.end('Home Page');
});
app.get('/about', (req, res) => {
    res.end('About Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});