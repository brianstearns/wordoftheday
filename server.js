import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env.local') });
console.log('Loaded API_KEY:', process.env.API_KEY);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (index.html, styles.css) from project root
app.use(express.static(__dirname));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Proxy endpoint for Word of the Day
app.get('/api/proxy', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const word = data.word || '';
    const definition = data.definitions?.[0]?.text || '';
    const example = data.examples?.[0]?.text || '';
    res.json({ word, definition, example });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch word of the day.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
