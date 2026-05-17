# 🎵 Aura — Mood-Based Music Discovery

> Discover songs that match how you feel — instantly.

Aura is a mood-based music discovery web app built with React + Vite. Pick your current mood and Aura will instantly fetch songs that match your vibe using the iTunes Search API — no login, no API key required.

---

## ✨ Features

- 🎯 **Mood-Based Discovery** — Choose from 5 moods: Chill, Energetic, Melancholic, Focus, Hype
- 🎵 **Live Music Fetching** — Powered by iTunes Search API (free, no key needed)
- ▶️ **30s Preview Player** — Mini player bar with native HTML5 audio
- 🌐 **Multi-Page** — Built with React Router (Discover & My Mood pages)
- ⏳ **Loading & Error State** — Skeleton loading and graceful error handling
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + Vite 6 | UI framework & build tool |
| React Router DOM v7 | Client-side routing |
| Tailwind CSS v3 | Styling & responsive design |
| iTunes Search API | Music data source (free) |

---

## 📁 Struktur Folder

```
src/
├── assets/
├── components/
│   ├── ui/               # Atoms: Button, Badge, Spinner, Avatar, Skeleton
│   ├── common/           # Molecules: SongCard, MoodPill, SearchBar
│   └── Layout/           # Organisms: Navbar, PlayerBar, MoodSelector, SongList
├── container/
│   ├── Discover/
│   └── MyMood/
├── pages/
│   ├── DiscoverPage.jsx
│   ├── MyMoodPage.jsx
│   └── NotFound.jsx
├── hooks/
│   ├── useFetchMusic.js
│   └── usePlayer.js
├── constants/
│   ├── moodConfig.js
│   ├── navigations.js
│   ├── menu.js
│   └── info.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Prerequisites

Pastikan sudah terinstall:
- Node.js >= 18
- npm >= 9

### Installation

```bash
# 1. Clone repository
git clone https://github.com/FaizZzhue/aura.git
cd aura

# 2. Install dependencies
npm install

# 3. Setup environment variable
cp .env.example .env

# 4. Jalankan development server
npm run dev
```

Buka browser di **http://localhost:5173**


## 🎨 Design System

- **Font Display** — Outfit (heading, label)
- **Font Body** — DM Sans (body text)
- **Primary Accent** — `#00d4aa` (Aura Green)
- **Background** — `#0a0a0f` (Deep void dark)
- **Pattern** — Atomic Design (atoms → molecules → organisms → pages)

---

## 📡 API Reference

Project ini menggunakan **iTunes Search API** dari Apple.

```
GET https://itunes.apple.com/search?term={keyword}&media=music&limit=20
```

| Parameter | Value | Keterangan |
|---|---|---|
| `term` | string | keyword sesuai mood |
| `media` | `music` | filter hanya musik |
| `limit` | number | jumlah hasil (max 200) |

Tidak memerlukan API key — langsung bisa diakses dari browser.

---

## 📝 Commit Convention

Project ini menggunakan **Conventional Commits**:

```
feat: add mood selector component
feat: implement iTunes API fetching
feat: add player bar with audio preview
fix: handle error state on failed fetch
style: apply responsive layout on mobile
chore: setup tailwind and project structure
```

---

## 👤 Author

**Achmad Faiz Yudha Ramadhan** — [github.com/FaizZzhue](https://github.com/FaizZzhue)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).