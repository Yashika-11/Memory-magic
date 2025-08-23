# Memory Match Game

A modern, responsive memory card matching game built with React. Test your memory by finding matching pairs of cards!



## 🎮 Features

### Core Gameplay
- **Card Matching**: Flip cards to find matching pairs
- **Move Counter**: Track the number of moves made
- **Timer**: Real-time game timer
- **Multiple Difficulties**: Easy (4×4) and Medium (6×6) modes
- **Smooth Animations**: Beautiful card flip animations

### Bonus Features
- **Leaderboard**: Local storage-based score tracking
- **Game Reset**: Restart the game at any time
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Feedback**: Different card states with color coding
- **Accessibility**: Keyboard and touch-friendly interface

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memory-match-game.git
   cd memory-match-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game!

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## 🎯 How to Play

1. **Start the Game**: The game begins with all cards face-down
2. **Flip Cards**: Click on any card to reveal its content
3. **Find Matches**: Click on a second card to see if it matches the first
4. **Match Success**: If cards match, they stay face-up (green)
5. **No Match**: If cards don't match, they flip back after 1 second (red)
6. **Complete the Game**: Find all matching pairs to win!

### Game Rules
- Each pair of card flips counts as 1 move
- Timer starts when you flip the first card
- Game ends when all pairs are matched
- Lower moves and faster time = better score

## 🏗️ Project Structure

```
memory-match-game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.js              # Individual card component
│   │   ├── Card.css
│   │   ├── GameBoard.js         # Main game grid
│   │   ├── GameBoard.css
│   │   ├── GameControls.js      # Difficulty and reset controls
│   │   ├── GameControls.css
│   │   ├── GameOver.js          # End game screen
│   │   ├── GameOver.css
│   │   ├── GameStats.js         # Moves and time display
│   │   └── GameStats.css
│   ├── utils/
│   │   ├── gameUtils.js         # Game logic utilities
│   │   └── gameUtils.test.js    # Utility tests
│   ├── App.js                   # Main application component
│   ├── App.css
│   ├── App.test.js              # Main component tests
│   ├── index.js                 # Application entry point
│   └── index.css                # Global styles
├── package.json
└── README.md
```

## 🧪 Testing

The project includes comprehensive unit tests covering:

- **Component Tests**: Game logic, user interactions, state management
- **Utility Tests**: Card generation, array shuffling, time formatting
- **Integration Tests**: Game flow, localStorage persistence

Run tests with:
```bash
npm test
```

## 🎨 Design Decisions

### Architecture
- **Component-Based**: Modular React components for maintainability
- **State Management**: React hooks for clean state handling
- **Utility Functions**: Separated game logic for testability
- **CSS Modules**: Scoped styling to prevent conflicts

### User Experience
- **Visual Feedback**: Color-coded card states (blue=face-down, red=no-match, green=matched)
- **Smooth Animations**: CSS transitions for card flipping
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Semantic HTML and keyboard navigation

### Performance
- **Optimized Rendering**: React.memo for performance-critical components
- **Efficient Algorithms**: Fisher-Yates shuffle for card randomization
- **Local Storage**: Minimal data persistence for leaderboard

## 🔧 Technical Stack

- **Frontend Framework**: React 18.2.0
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with Flexbox and Grid
- **Testing**: Jest + React Testing Library
- **Build Tool**: Create React App
- **Package Manager**: npm

## 🚀 Deployment

### GitHub Pages
1. Add homepage to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/memory-match-game"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Netlify/Vercel
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Assumptions

- **Browser Support**: Modern browsers with ES6+ support
- **Local Storage**: Available for leaderboard persistence
- **Touch Devices**: Touch events work for mobile gameplay
- **Performance**: Game runs smoothly on mid-range devices

## 🐛 Known Issues

- None currently identified



## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the development setup
- Testing Library for comprehensive testing utilities
- Emoji providers for the card content

---

