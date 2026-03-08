# Monish K — Personal Portfolio

A dark, modern personal portfolio built with **React** and **Vite**, featuring glassmorphism UI, a vertical pill sidebar, and smooth scroll animations.

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 18.3.1 |
| Vite | 6.3.0 |
| lucide-react | 0.577.0 |
| Node.js | 22+ |

---

## Project Structure

```
portfolio 3/
├── public/
│   └── hero.jpg          # Your portrait photo (add manually)
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Vertical pill sidebar with lucide icons
│   │   ├── Hero.jsx      # Full-screen hero with portrait
│   │   ├── About.jsx     # 2×2 glass card grid
│   │   ├── Portfolio.jsx # Filterable project grid
│   │   ├── Services.jsx  # 2×2 glass service cards
│   │   ├── Contact.jsx   # Contact form + social links
│   │   └── Footer.jsx    # Minimal footer
│   ├── App.jsx           # Root layout + scroll reveal
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles + CSS variables
├── index.html
├── vite.config.js
└── package.json
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Opens at `http://localhost:5173/`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Adding Your Photo

Save your portrait image as `hero.jpg` inside the `public/` folder:

```
public/hero.jpg
```

---

## Customization

- **Colors** — Edit CSS variables in `src/index.css` (`:root` block): `--accent`, `--bg`, `--text`, etc.
- **Content** — Each section is its own component in `src/components/`
- **Social links** — Update `href` values in `src/components/Contact.jsx`
- **Email** — Change the `MAILTO` constant at the top of `src/components/Contact.jsx`

---

## Features

- Vertical pill sidebar with icon labels and active section tracking
- Glassmorphism cards (About, Services, Contact form)
- Filterable portfolio grid
- Hide-on-scroll navbar
- Scroll reveal animations
- Fully responsive (mobile bottom tab bar)
- Contact form with `mailto` integration
- Social links bar (LinkedIn, Instagram, GitHub)
