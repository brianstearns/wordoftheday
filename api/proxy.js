import dotenv from "dotenv";
dotenv.config({ path: "../.env.local" });

export default async function handler(req, res) {
  try {
    const apiKey = process.env.API_KEY;
    const url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    // Map Wordnik response to expected fields
    const word = data.word || '';
    const definition = data.definitions?.[0]?.text || '';
    const example = data.examples?.[0]?.text || '';

    res.status(200).json({ word, definition, example });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch word of the day.' });
  }
}
