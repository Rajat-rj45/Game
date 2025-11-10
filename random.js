const http = require('http');
const fs = require('fs');

// एक हेल्पर फ़ंक्शन जो फ़ाइल को पढ़ने और भेजने का काम करेगा
function serveFile(res, filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.error(err); // सर्वर कंसोल पर एरर दिखाएं
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("500 - Internal Server Error");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

// सर्वर बनाना
const server = http.createServer((req, res) => {
  
  console.log(`Request received for: ${req.url}`); // यह कंसोल में दिखाएगा कि कौन सा URL रिक्वेस्ट हुआ है

  switch (req.url) {
    case '/':
      // रूट URL (/) पर, एक मेनू पेज दिखाएं
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game Arcade - Launchpad</title>
  
  <style>
    /* English Comments Added as per your request.
    */

    /* Basic reset for consistency */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      /* Use a clean, modern font stack */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      
      /* Use a subtle gradient instead of a flat color for depth */
      background: linear-gradient(135deg, #3a3f4c, #282c34);
      color: #e0e0e0; /* Use a softer white than pure #FFF */
      
      /* Use Flexbox to perfectly center the content */
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden; /* Prevents scrollbars from layout shifts */
    }

    /* The main container with the "glass" effect */
    .arcade-container {
      width: 90%;
      max-width: 600px;
      padding: 2.5rem;
      text-align: center;

      /* Glassmorphism Effect */
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    /* Main Heading */
    h1 {
      /* Use the 'React blue' color for branding */
      color: #61dafb;
      font-size: 3rem; /* Larger font */
      font-weight: 700;
      margin-bottom: 0.75rem;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    /* Subtitle paragraph */
    p {
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      color: #c7c7c7;
    }

    /* Container for the game links */
    .game-menu {
      display: flex;
      flex-direction: column;
      gap: 1rem; /* Space between buttons */
    }

    /* Styling for the game links to make them look like buttons */
    .game-link {
      display: block;
      padding: 1rem 1.5rem;
      
      /* Use a transparent version of the main color for the button */
      background: rgba(97, 218, 251, 0.1);
      border: 2px solid #61dafb;
      color: #61dafb;
      
      font-size: 1.25rem;
      font-weight: 600;
      text-decoration: none;
      text-align: left; /* More professional than centered text */
      border-radius: 8px;
      
      /* Smooth transition for the hover effect */
      transition: all 0.3s ease;
    }

    /* Professional hover effect */
    .game-link:hover {
      /* Invert colors on hover */
      background: #61dafb;
      color: #282c34;

      /* Add a 'lift' effect */
      transform: translateY(-5px) scale(1.02);
      
      /* Add a glow */
      box-shadow: 0 4px 20px rgba(97, 218, 251, 0.3);
    }

    /* Add the emoji back with better spacing */
    .game-link span {
      margin-right: 1rem;
      display: inline-block;
      width: 25px; /* Align emojis nicely */
    }

  </style>
</head>
<body>

  <main class="arcade-container">
    
    <h1>🎮 Game Arcade</h1>
    <p>Choose a game to play:</p>

    <nav class="game-menu">
      <a href="/guess" class="game-link">
        <span>🎯</span> Guess the Number
      </a>
      <a href="/rps" class="game-link">
        <span>✊</span> Rock Paper Scissors
      </a>
      <a href="/ttt" class="game-link">
        <span>✖️</span> Tic-Tac-Toe
      </a>
    </nav>

  </main>

</body>
</html>
      `);
      break;

    case '/guess':
      // '/guess' URL पर, guess-the-number.html फ़ाइल सर्व करें
      serveFile(res, 'guess-the-number.html');
      break;

    case '/rps':
      // '/rps' URL पर, rock-paper-scissors.html फ़ाइल सर्व करें
      serveFile(res, 'rock-paper-scissors.html');
      break;

    case '/ttt':
      // '/ttt' URL पर, tic-tac-toe.html फ़ाइल सर्व करें
      serveFile(res, 'tic-tac-toe.html');
      break;

    default:
      // अगर कोई और URL है, तो 404 Not Found दिखाएं
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1><p>Page not found. Go to <a href="/">Homepage</a>.</p>');
  }
});

// सर्वर को 3000 पोर्ट पर सुनना
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});