# 🚀 Alex Rivera — React Portfolio

Converted from single HTML file to **React component architecture** with separated HTML, CSS, JS files.

## 📁 Structure

```
PORTFOLIO TASK 1/
├── index.html           # Original complete portfolio (live-server)
├── portfolio.html       # Backup
├── package.json         # React dependencies
├── public/              # React public assets
├── src/
│   ├── App.js           # Main App component + cursor logic
│   ├── App.css          # Complete CSS (500+ lines)
│   └── components/      # 8 React components
│       ├── Hero.js
│       ├── Nav.js
│       ├── Ticker.js
│       ├── About.js
│       ├── Skills.js
│       ├── Projects.js
│       ├── Experience.js
│       ├── Contact.js
│       └── Footer.js
└── README.md            # This file
```

## 🚀 Run the Portfolio

### Option 1 - Instant Preview (Recommended)

```
npx live-server index.html
```

**URL:** `http://127.0.0.1:8080` — **original portfolio live instantly**

### Option 2 - React Development Server

```
npm install
npm start
```

**URL:** `http://localhost:3000` — React app with HMR

## 🎨 What Was Converted

**Separated:**

- **HTML** → React components (`App.js` + 8 files)
- **CSS** → `App.css` (full original styles)
- **JS** → React hooks (`useState`, `useEffect`, `useCallback`)

**Preserved:**

- Custom cursor trail effect
- Grain overlay texture
- Scroll reveal animations
- Mobile hamburger menu
- Project hover mockups
- Contact form state
- Amber design system
- Responsive grid

## 🛠️ Customize

1. **Your Info** - Edit `src/components/*` files
2. **Projects** - Update `Projects.js` tech/links
3. **Resume** - Add PDF to `public/resume.pdf`
4. **Deploy** - `npm run build` → `dist` folder

## 📦 Deploy

**Vercel (1-click):**

```
npm i -g vercel
vercel
```

**Netlify:** Drag `build` folder to netlify.com

**Production:** `npm run build` → static HTML/CSS/JS in `build/`

## 🔧 React Features Added

- Component reusability
- State management (form, menu)
- Custom hooks (cursor position)
- Hot module replacement
- ESLint/TypeScript ready

**Original single-file → Modern React app** complete! 🎉

Live preview: `http://127.0.0.1:8080`
