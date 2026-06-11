# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build a Hangman game in Python that uses strings, loops, conditionals, and user input to let players guess a hidden word before they run out of attempts.

## 📝 Tasks

### 🛠️ Build the game flow

#### Description
Create the main Hangman loop that selects a random word and lets the player guess letters until they win or lose.

#### Requirements
Completed program should:

- Choose a random word from a predefined list
- Prompt the player to guess one letter at a time
- Show the current progress with unguessed letters as underscores
- Track and display remaining incorrect guesses
- End the game with a clear win or lose message

### 🛠️ Handle guesses and game state

#### Description
Update the game state after each guess, including correct letters, incorrect guesses, and whether the player has completed the word.

#### Requirements
Completed program should:

- Reveal letters correctly when they are guessed
- Prevent duplicate penalties for repeated correct guesses
- Add incorrect guesses to a separate list
- Stop guessing when the word is fully revealed or no attempts remain
