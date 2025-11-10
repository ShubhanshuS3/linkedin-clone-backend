require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://delicate-twilight-da5d11.netlify.app/"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ Add this root route
app.get('/', (req, res) => {
  res.send('✅ LinkedIn Clone Backend is running successfully on Render!');
});

// ✅ Use /api prefix for your routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error(err));
