# 🧩 15 Puzzle Game

> A modern, responsive implementation of the classic sliding puzzle game built with Next.js and React

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🎮 About

The 15 Puzzle is a sliding puzzle game consisting of numbered tiles in a 4×4 grid with one missing tile. The objective is to arrange the tiles in numerical order by sliding them into the empty space.

### ✨ Features

- 🎯 **Classic Gameplay** - Traditional 15-puzzle mechanics
- ⏱️ **Timer & Move Counter** - Track your performance
- 🎨 **Modern UI** - Glassmorphism design with smooth animations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔄 **Visual Feedback** - Highlights correctly positioned tiles
- ⏸️ **Pause/Resume** - Control your game flow
- 🚀 **Fast Performance** - Optimized React components

## 🎯 Game Rules

```
┌─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │
├─────┼─────┼─────┼─────┤
│  5  │  6  │  7  │  8  │
├─────┼─────┼─────┼─────┤
│  9  │ 10  │ 11  │ 12  │
├─────┼─────┼─────┼─────┤
│ 13  │ 14  │ 15  │     │
└─────┴─────┴─────┴─────┘
```

**Goal**: Arrange tiles from 1-15 in order with the empty space in the bottom-right

**How to play**:
1. Click on any tile adjacent to the empty space
2. The tile will slide into the empty position
3. Continue until all tiles are in numerical order
4. Try to solve it in the fewest moves and fastest time!

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/15-puzzle-game.git
   cd 15-puzzle-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
15-puzzle-game/
├── 📁 components/
│   ├── 🎮 GameBoard.tsx      # Main game component
│   ├── ⏱️ GameTimer.tsx       # Timer functionality
│   └── 🔢 MoveCounter.tsx     # Move counter
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 🎨 globals.css     # Global styles
│   │   ├── 📄 layout.tsx      # App layout
│   │   └── 🏠 page.tsx        # Home page
│   └── 📁 types/
│       └── 📝 types.tsx       # TypeScript definitions
├── 📁 public/               # Static assets
└── 📋 README.md
```

## 🎨 Design System

The game features a modern glassmorphism design with:

### Color Palette
```css
Primary Background: rgb(87, 64, 124)   /* Deep purple */
Secondary Background: rgb(61, 41, 99)  /* Darker purple */
Tile Color: rgb(111, 189, 185)        /* Teal */
Correct Tile: rgb(232, 138, 69)       /* Orange */
Text: #ededed                          /* Light gray */
```

### Visual States

| State | Description | Visual Feedback |
|-------|-------------|-----------------|
| **Normal Tile** | Default numbered tile | Teal background with hover effect |
| **Correct Position** | Tile in right place | Orange background highlight |
| **Empty Space** | Missing tile slot | Transparent background |
| **Hover** | Mouse over tile | Brightened background |
| **Active** | Tile being clicked | Slight scale animation |

## 🔧 Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework | 14+ |
| **React** | UI library | 18+ |
| **TypeScript** | Type safety | 5+ |
| **Tailwind CSS** | Styling | 3+ |
| **Vercel Analytics** | Performance tracking | Latest |

## 📱 Responsive Design

The game adapts to different screen sizes:

- **Desktop** (1024px+): Full-sized grid with large tiles
- **Tablet** (768px-1023px): Medium-sized grid
- **Mobile** (320px-767px): Compact grid with touch-friendly tiles

## 🎯 Performance Features

- ⚡ **React Hooks** - Efficient state management
- 🔄 **Memoized Callbacks** - Prevent unnecessary re-renders
- 🎨 **CSS Animations** - Hardware-accelerated transitions
- 📦 **Code Splitting** - Optimized bundle size
- 🚀 **Fast Refresh** - Instant development feedback

## 🎮 Game Mechanics

### Tile Movement Logic
```typescript
// Simplified movement validation
const canMove = (tileIndex: number, emptyIndex: number) => {
  const tileRow = Math.floor(tileIndex / 4);
  const tileCol = tileIndex % 4;
  const emptyRow = Math.floor(emptyIndex / 4);
  const emptyCol = emptyIndex % 4;
  
  return (
    (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol) ||
    (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow)
  );
};
```

### Win Condition
The game checks if tiles match the solved state: `[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null]`

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Features

1. **New Components**: Add to `components/` directory
2. **Styling**: Use Tailwind classes or extend `globals.css`
3. **Types**: Define interfaces in `src/types/types.tsx`
4. **State Management**: Use React hooks in components

## 📊 Game Statistics

Track your performance with:
- ⏱️ **Time**: How long it takes to solve
- 🔢 **Moves**: Number of tile movements
- 🎯 **Efficiency**: Moves per minute ratio

## 🌟 Coming Soon

- [ ] 🏆 High score leaderboard
- [ ] 🎵 Sound effects and music
- [ ] 🎨 Theme customization
- [ ] 📸 Screenshot sharing
- [ ] 👥 Multiplayer mode
- [ ] 🎮 Different grid sizes (3x3, 5x5)
- [ ] 📱 PWA support
- [ ] 🌙 Dark/light mode toggle

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Test on multiple devices
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Inspired by the classic 15-puzzle invented by Noyes Palmer Chapman
- Built with amazing open-source technologies
- Design inspired by modern glassmorphism trends

## 📞 Support

Having issues? Here's how to get help:

- 🐛 **Bug Reports**: [Open an issue](https://github.com/yourusername/15-puzzle-game/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/yourusername/15-puzzle-game/discussions)
- 📧 **Contact**: your-email@example.com

---

<div align="center">

**[⬆ Back to Top](#-15-puzzle-game)**

Made with ❤️ using Next.js and React

[🎮 Play Now](https://your-deployment-url.vercel.app) | [📖 Documentation](./DOCUMENTATION.md) | [🐛 Report Bug](https://github.com/yourusername/15-puzzle-game/issues)

</div>
