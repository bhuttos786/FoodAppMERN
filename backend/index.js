const express = require('express')
const app = express()
const port = 4000
const mongoDB = require('./db')
const cors = require('cors'); // Import the cors package

mongoDB();

// app.use((req, res, next) => {
//     const allowedOrigins = ["http://localhost:3000", "http://localhost:4000", "http://localhost:4000/api/auth/OrderData"];
//     const origin = req.headers.origin;

//     if (allowedOrigins.includes(origin)) {
//         res.setHeader("Access-Control-Allow-Origin", origin);
//     }

//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );

//     next();
// });

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins

//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );

//     next();
// });

// Use the cors middleware to enable CORS
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000'], // Allow requests from these origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
    credentials: true, // Allow credentials (cookies, authentication headers, etc.)
}));


app.get('/', (req, res) => {
    res.send('Hello World! WASUP SHAZ')
})

app.use(express.json())
app.use('/api', require("./routes/createUser"));
app.use('/api', require("./routes/displayData.js"));
app.use('/api', require("./routes/OrderData.js"));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})