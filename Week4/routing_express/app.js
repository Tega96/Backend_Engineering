const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const middleware = (req, res, next) => {
    const currrenTime = new Date();
    const formattedTime = currenTime.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });
    console.log(`Request received at ${formattedTime}`);
    next(); // Call the next middleware or route handler
}
app.use(middleware);

app.get('/', (req, res) => {
    res.end('Home Page');
});

app.get('/about', (req, res) => {
    res.end('About Page');
});

app.get('/contact', (req, res) => {
    res.end('Contact Page');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
