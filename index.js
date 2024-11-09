const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());



connectDB(); 

app.use(express.json());

app.use(userRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
