import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/data', (req, res) => {
  res.json({ 
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
