# Week5-James_Deepa

You can find our deployed site here https://week5-deepa-james-2048.netlify.app/

# React + Vite

To get started, follow these steps:

Clone the repository:

git clone https://github.com/fac28/Week5-James_Deepa.git

Change your current directory to the project directory:
`cd Week5-James_Deepa`

Install the project dependencies: `npm install`

Start the development server: `npm run dev`

This will run the game in your development environment. You can access it in your browser at http://localhost:5173/

# How to Play

Use the arrow keys (Up, Down, Left, Right) to move the tiles on the game board.
When two tiles with the same value collide, they combine into one tile with the sum of their values.
After every move 2 tiles are added at random locations on the board
The goal is to reach the 2048 tile or the highest possible value.
Your Score, High Score and your game is stored in local storage

# Project Structure

The project is organized as follows:

src/components: Contains React components for the game, such as the generating game board, Managing conditions for Game Over, Win, New Game and keeping score.
src/App.js: The main application component.
src/index.js: Entry point of the application.
public: Contains the HTML template and other public assets.

# Technologies Used

React: The JavaScript library for building user interfaces.
CSS: Styling for the game components.
Create React App: The development environment for React.
