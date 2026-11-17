# Md. Kaisarul Islam Estey — Portfolio

Personal portfolio of **Md. Kaisarul Islam Estey**, a Computer Science & Engineering student at BUET (CSE '22). It covers backend engineering, applied machine learning, systems programming and embedded work.

Built with **React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · Lucide**. It is a single static page, so it deploys to GitHub Pages with no server.

---

## Features

- Dark-first design with a light theme toggle. The choice is remembered, and the page loads with no theme flash.
- Interactive hero "abstraction stack" (machine → kernel → languages → data → services → interface → intelligence). Each layer links to the matching project.
- Featured project showcase with hand-built SVG illustrations that follow the theme, plus an expandable index for the other projects.
- Skills grouped by area, with a live filter. There are no made-up proficiency percentages.
- Timeline for education and teaching, a recognition list, interests, and a contact section.
- Sticky navbar that highlights the current section, a mobile menu, a back-to-top button, and smooth scrolling.
- Accessible: semantic landmarks, a skip link, keyboard focus styles, ARIA on interactive parts, and `prefers-reduced-motion` support.
- SEO metadata, Open Graph tags, JSON-LD `Person` schema, and an SVG favicon.

---

## Editing your content

All content lives in **`src/data/`**. You should never need to touch the components.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, headline, intro, **email**, **photo**, **résumé**, availability line, social links, About text, strengths |
| `src/data/projects.ts` | Projects: descriptions, highlights, tech, **GitHub / demo links**, featured or not |
| `src/data/skills.ts` | Core stack and skill groups |
| `src/data/journey.ts` | Education, teaching, achievements, interests, hero stack layers |

**Empty values are hidden on the live site.** If `email`, a social URL or a project link is `''`, that button doesn't appear in production. While you run `npm run dev`, a small dashed hint shows each spot that still needs a value.

### Common edits

1. **Contact details**: `profile.email` and the `url` fields in `socialLinks` (`src/data/profile.ts`). Codeforces, Kaggle and Website are empty, so they're hidden.
2. **Project links**: `links.repo`, `links.demo` and the optional `links.video` in `src/data/projects.ts`.
3. **Profile photo**: `public/profile.jpg` (a 4:5 portrait, 800×1000) is used in About, and `public/profile-avatar.jpg` (a 192×192 face crop) is the small hero avatar. Both are set in `profile.ts`. `photoMonochrome: true` shows them in black and white, turning to color on hover; set it to `false` to always show color.
4. **Résumé** (optional): save it as `public/resume.pdf` and set `resume: 'resume.pdf'`. A "Résumé" button then appears in the navbar and hero.
5. **Project screenshots** (optional): put them in `public/projects/` and add `image: 'projects/hospitrack.webp'` to a project. The screenshot replaces the illustration.

---

## Local development

Requirements: **Node.js 20.19+** (or 22+) and **npm**.

```bash
# Arch / CachyOS: npm ships separately from nodejs
sudo pacman -S npm

# install dependencies
npm install

# start the dev server → http://localhost:5173
npm run dev
```

## Production build

```bash
npm run build     # type-checks, then builds to dist/
npm run preview   # serves dist/ locally → http://localhost:4173
```

---

## Deploying (live at https://estey144.github.io)

The site is served by GitHub Pages from the **`gh-pages`** branch. To publish your latest changes:

```bash
git add -A && git commit -m "Update portfolio"   # save your changes
git push                                          # back up the source on GitHub (main)
npm run deploy                                    # build and publish to gh-pages
```

`npm run deploy` (in `scripts/deploy.sh`) builds the site and force-pushes the output to `gh-pages`. GitHub Pages then updates the live site in about a minute. You need a GitHub login on this machine (`gh auth login`).

**Pages settings:** Settings → Pages → Source: **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.

### Automatic deploys (GitHub Actions)

`.github/workflows/deploy.yml` can build and deploy on every push to `main`, but GitHub Actions is currently blocked on this account ("account locked due to a billing issue"), so the workflow is set to manual-only. Once Actions works again:

1. In `.github/workflows/deploy.yml`, uncomment the `push:` trigger.
2. Settings → Pages → Source → **GitHub Actions**.
3. Push to `main`. From then on, every push deploys automatically and you won't need `npm run deploy`.

The workflow sets Vite's base path automatically: `/` for a `<user>.github.io` repo, `/<repo>/` for any other repo name. You can override it with a repository variable named `BASE_PATH`.

### Custom domain (optional)

Add the domain under **Settings → Pages → Custom domain**. The base path is already `/`, so nothing else changes.

### Troubleshooting

- **Blank page or 404s for JS/CSS:** the base path doesn't match the URL. The site must be built with `BASE_PATH=/<repo>/` when it isn't served from a `<user>.github.io` repo.
- **`npm run deploy` asks for a password:** run `gh auth login` first.
- **Live site not updating:** check the "pages build and deployment" run in the repo's **Actions** tab, and hard-refresh the browser (Ctrl+Shift+R).

---

## Project structure

```
├── .github/workflows/deploy.yml   # CI deploy (manual-only for now; see Deploying)
├── scripts/deploy.sh              # npm run deploy → publish to gh-pages
├── public/                        # static files (favicon, photo, résumé, screenshots)
├── index.html                     # SEO meta, fonts, theme bootstrap, JSON-LD
├── src/
│   ├── data/                      # ← all editable content lives here
│   ├── components/
│   │   ├── hero/                  # Hero + interactive stack diagram
│   │   ├── projects/              # Showcase, index rows, SVG illustrations
│   │   ├── sections/              # About, Skills, Journey, Recognition, Interests, Contact
│   │   ├── layout/                # Navbar, ThemeToggle, Footer, BackToTop
│   │   └── ui/                    # Section, Reveal, ButtonLink, Tag, ProfileImage, icons…
│   ├── hooks/                     # useTheme, useActiveSection, useScrolled
│   ├── lib/utils.ts
│   ├── App.tsx
│   └── index.css                  # Tailwind + design tokens (colors for both themes)
└── vite.config.ts
```

### Changing the look

Colors are CSS variables in `src/index.css`, defined once in `:root` (light) and once in `.dark`. Change `--accent` there to re-theme the whole site. Fonts (Geist, Geist Mono, Instrument Serif) load in `index.html` and are mapped in the `@theme` block.
