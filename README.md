Live Demo: https://your-link-here
> Web Project : Golden Calculator 
A fully functional, responsive web calculator built with a focus on clean UI and robust input logic. This project was my first deep dive into handling  user input and data handling using JavaScript.


> Features included:
1-Smart Input Validation: Prevents invalid mathematical expressions (
  -prevents multiple consecutive operators ,
  -multiple decimals in one number
  -inserting x or / at the start of the calculation,
  -preventing operations after a decimal
   ).
2-Keyboard Support: Fully playable via keyboard (Numbers, Enter for   equals, Backspace for delete and operations (+ - / *)).
3-Error Handling: Detects and manages division by zero or invalid calculations with a temporary "Error" display.
4-Responsive Design: Optimized for both desktop and mobile screens using CSS Grid and Flexbox.
5-Dynamic UI: Includes a custom-built particle background effect for a modern aesthetic.


> Tech Stack:
-HTML5
-CSS3
-JavaScript (ES6+)
Icons: FontAwesome


> Project Structure
.
├── main.html
├── README.md
├── js/
│   └── script.js    
└── css/
    └── style.css      


> Technical Challenges Overcome
1-The leading zeros Bug: handling numbers like 05 + 00.2 was a challenge . Using standard eval() on these caused errors.
I solved this by creating a custom loop that splits the string into a numbers list, converts each segment to a proper number type, and then joins them back together before evaluation.
2-Multiple Operators Problem:  to prevent broken expressions like 5 ++ 3 or 8 */ 2. I implemented a state checking mechanism that inspects the final character of the display string.
If a user attempts to enter two operators in a row, the application either blocks the input (like an operator after a decimal) or intelligently swaps the existing operator for the new one if possible ,
ensuring the expression remains mathematically valid.
3-Keyboard Syncing: I implemented a keydown listener that searches the DOM for a button matching the pressed key and triggers a .click() event.
Like numbers , the operators , and enter/backspace.


> How to Run
Clone or download the project
Open main.html in your browser :)

11-2025 Youssef .MK