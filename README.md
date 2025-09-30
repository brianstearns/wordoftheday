# Word of the Day Web App

A responsive, interactive web application that displays a daily word with its definition, pronunciation, and example usage. Users can save their favorite words locally and toggle between light and dark mode. The project demonstrates frontend development, API integration, and client-side storage using vanilla HTML, CSS, and JavaScript.

---

## Features

- Fetches a daily word from the **Wordnik API**  
- Displays **definition, pronunciation, and example usage**  
- **Dark mode** toggle for improved readability and user preference  
- **Favorites system** using `localStorage` to save and remove words  
- Confirmation dialog before deleting a favorite  
- Responsive and user-friendly interface, optimized for desktop and mobile  
- Deployed live on **Vercel** for global access  

---

## Live Demo

🔗 [Word of the Day](https://wordoftheday-gray.vercel.app)
---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **API:** Wordnik API  
- **Deployment:** Vercel  
- **Storage:** Browser `localStorage` for favorites  
- **Security:** API key stored securely (not exposed on GitHub)  

---

## Installation

### Desktop

1. Clone the repository:  
   ```bash
   git clone https://github.com/brianstearns/wordoftheday
   ```
2. Navigate to the project folder:  
   ```bash
   cd wordoftheday
   ```
3. Install dependencies if using Node (optional for static version):  
   ```bash
   npm install
   ```
4. Add your **Wordnik API key** in a `.env` file or server proxy script
5. Run using
   ```bash
   node server.js
   ```
### Mobile

1. Navigate to 🔗 [Word of the Day](https://wordoftheday-gray.vercel.app)
2. Hit share, make sure web app is turned on.
3. Hit add to home screen.

---

## Usage

- Open the app in your browser  
- The daily word, definition, and example will be displayed automatically  
- Click the **Save to Favorites** button to add words to your favorites list  
- Use the **X button** to remove words from favorites (with confirmation)  
- Toggle between **dark mode and light mode** using the button in the top right corner  

---

## Future Improvements

- Add audio playback for pronunciation  
- Allow searching for custom words  
- Provide multiple definitions and quotes from Wordnik  
- Sync favorites across devices using a backend service and log in

---

## Acknowledgments

- [Wordnik API](https://developer.wordnik.com/) for providing the word data  
- [Vercel](https://vercel.com/) for deployment hosting  

---
