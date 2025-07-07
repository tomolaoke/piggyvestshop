# PiggyShop (PiggyVest Clone)

A modern, responsive React web app inspired by PiggyVest, built with Vite and Tailwind CSS. This project demonstrates savings, investment, and e-commerce features with a clean UI, engaging animations, and beginner-friendly code comments.

## Features

- **Hero Section**: Eye-catching hero with synchronized bounce animation, download buttons, and a report link.
- **Shop**: Modern product cards, wishlist/favorite, and add-to-cart (using [Fake Store API](https://fakestoreapi.com/)).
- **Invest**: Investment opportunities, info cards, and call-to-action.
- **Targets, Safelock, Flex Naira, Flex Dollar, House Money**: Simulated PiggyVest features for saving and investing.
- **Blog & Stories**: Informational and promotional content.
- **FAQs**: Common questions and answers about savings, security, and app features.
- **Responsive Design**: Mobile-friendly layouts and navigation.
- **Custom Animations**: Synchronized bounce, hover, and spin effects for engaging UI.
- **Beginner-Friendly Comments**: Code is well-commented for easy learning and onboarding.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd piggyshop
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
├── public/           # Static assets (images, icons)
├── src/
│   ├── assets/       # Images and static resources
│   ├── components/   # Reusable and page components
│   ├── pages/        # Main pages (Home, Shop, Invest, etc.)
│   ├── static/       # Navbar, Footer, etc.
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   ├── App.css       # Custom styles & animations
│   └── index.css     # Tailwind and global styles
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

## Customization
- **Animations**: Edit `App.css` for custom bounce and hover effects.
- **API**: Shop uses [Fake Store API](https://fakestoreapi.com/) for demo products. Replace with your own API for real data.
- **Branding**: Swap images and colors in `/public` and `/src/assets` for your own branding.

## Credits
- Inspired by [PiggyVest](https://www.piggyvest.com/)
- Built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)

## License
This project is for educational/demo purposes only. Not affiliated with PiggyVest.
