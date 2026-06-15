# Abishan Portfolio

Premium personal portfolio website — React.js + Framer Motion + Tailwind CSS.

## Stack

- **React 18** — Component architecture
- **Framer Motion** — All animations (preloader, scroll reveals, hover interactions)
- **Tailwind CSS** — Utility styling
- **Inter** + **JetBrains Mono** — Typography

## Setup

```bash
npm install
npm start        # Development server
npm run build    # Production build
```

## Add your content

### Hero video
Place your AI-generated introduction video at:
```
public/videos/hero-video.mp4
```
The video will auto-load. Click the ▶ PLAY REEL button to start/pause it.

### Profile photo
Place a square profile image at:
```
public/images/profile.jpg
```
This shows inside the hanging ID card in the About section.
If the image is missing, a 👨‍💻 emoji placeholder appears automatically.

### Update personal details
Edit `src/components/Contact.jsx` — replace `abishan@example.com` with your real email.
Edit `src/components/Footer.jsx` — same email + social links.

## Sections

| Section | File | Key features |
|---------|------|-------------|
| Preloader | `Preloader.jsx` | Water-fill text animation → shutter reveal |
| Navbar | `Navbar.jsx` | Glassmorphism, sticky scroll, red mobile menu |
| Hero | `Hero.jsx` | Video background, play/pause reel, stroke text |
| About | `About.jsx` | Hanging ID card, red background, torn paper divider |
| Skills | `Skills.jsx` | 4 animated cards + certification badges |
| Timeline | `Timeline.jsx` | Scroll-driven curved SVG path, cards activate on scroll |
| Projects | `Projects.jsx` | 4 portfolio cards with stack tags + links |
| Contact | `Contact.jsx` | Clean CTA with email + LinkedIn |
| Footer | `Footer.jsx` | Giant ABISHAN text, monospace metadata grid |

## Color palette

| Token | Hex |
|-------|-----|
| Red accent | `#FF2A2A` |
| Black body | `#0a0a0a` |
| Footer bg | `#111111` |
| White text | `#F4F4F4` |
| Muted text | `rgba(255,255,255,0.6)` |

## Deploy

Works with Vercel, Netlify, or any static host:

```bash
npm run build
# Upload the build/ folder
```
