# E-Cell RGPV Tech Recruitment Tasks

This repository contains two interactive web applications built as part of the E-Cell RGPV Tech Department recruitment process. 

## Project Overview

1. **Part A: Currency Converter**
   A simple, responsive currency converter that fetches real-time exchange rates from a public API. It allows users to input an amount, select source and target currencies, and view the converted result instantly. It includes network loading states and error handling.

2. **Part B: Guess the Number Game**
   An interactive browser game where the user attempts to guess a randomly generated number between 1 and 100. The game provides real-time feedback (too high, too low, or correct), tracks the total number of attempts, and offers a restart functionality.

## Technologies Used

* **HTML5:** Page structure and layout.
* **CSS3:** Styling, responsive design, and visual feedback.
* **Vanilla JavaScript:** DOM manipulation, game logic, and asynchronous API requests (`fetch`).

## Project Structure

```text
├── index.html          # Entry point and UI for the Currency Converter
├── style.css           # Global styles and Currency Converter specific styling
├── script.js           # Logic and API integration for the Currency Converter
├── partB/
│   ├── game.html       # UI for the Guess the Number game
│   ├── game.css        # Specific styling for the game board
│   └── game.js         # Game logic and state management
├── assets/
│   ├── images/         # Game sprites, backgrounds, and UI icons
│   ├── audio/          # Sound effects for correct/incorrect guesses and background music
│   └── fonts/          # Custom typography files
└── README.md           # Project documentation
How to Run
Clone the repository to your local machine using:
git clone <your-repository-url>

Navigate to the project folder. Ensure that all asset directories (images/, audio/, fonts/) are correctly placed in the root folder alongside the source files.

Launch the application: Open the index.html file in your preferred modern web browser.

Navigate between tasks: You can use the provided links on the web pages to switch seamlessly between the Currency Converter and the Guessing Game. No local server or build process is required.