require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();

// ✅ CORS setup — allows Netlify & local dev
const allowedOrigins = [
  "http://localhost:5173",
  "https://delicate-twilight-da5d11.netlify.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or direct curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ Root route — for testing Render health
app.get('/', (req, res) => {
  res.send('✅ LinkedIn Clone Backend is running successfully on Render!');
});

// ✅ API routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
