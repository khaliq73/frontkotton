# Kotton Fruit - Premium B2B Wholesale Streetwear Website

A premium B2B wholesale streetwear website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Premium UI/UX design
- 📱 Fully responsive (mobile-first)
- 🎬 Video gallery with hover-to-play and modal popup
- 💬 WhatsApp integration for wholesale inquiries
- 🛍️ Product collections and filtering
- 📝 Blog section
- 📞 Contact form
- 🔍 Product search and filtering

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM v6** - Routing
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/       # Reusable components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── ui/           # UI components (ProductCard, VideoGallery, etc.)
│   ├── pages/            # Page components
│   ├── data/             # Static data (products, blog posts)
│   ├── assets/           # Images and videos
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## WhatsApp Integration

The website uses WhatsApp for wholesale inquiries. The WhatsApp number is configured in the `WhatsAppButton` component.

## Notes

- All product data is currently static
- Instagram feed uses static data (can be connected to API later)
- No backend integration yet (ready for future backend connection)

## License

Private project - All rights reserved
