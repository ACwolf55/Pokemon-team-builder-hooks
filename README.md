# Pokémon Team Builder — Frontend

React + TypeScript frontend for the Pokémon Team Builder full-stack app. Build and save your competitive Pokémon team using live data from PokéAPI. Register, log in, and manage your teams — all persisted to a real database.

> **Live:** [pkmteambuilder.xyz](https://pkmteambuilder.xyz) · [pokemon-team-builder-hooks.vercel.app](https://pokemon-team-builder-hooks.vercel.app)  
> **Backend:** [pkm-team-builder-server](../pkm-team-builder-server) — Spring Boot on AWS Elastic Beanstalk

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS 3 |
| HTTP | Axios |
| Auth | JWT (stored in localStorage) |
| Build | Create React App |
| Hosting | Vercel |

## Features

- Register + login with JWT auth
- Search any Pokémon — live sprites, types, and base stats from PokéAPI
- Build a team of up to 6 Pokémon
- Save teams to your account (persisted to PostgreSQL)
- View all your saved teams with full stats summary
- Delete teams
- 404 page (with Furret)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # global nav + home link
│   ├── Nav.tsx             # main nav
│   ├── UserNav.tsx         # logged-in user nav
│   ├── RegLoginNav.tsx     # register/login nav
│   ├── NewPokemon.tsx      # pokemon search + add to team
│   └── NewPokemonTeam.tsx  # build team form
├── pages/
│   ├── Home.tsx            # landing page
│   ├── Register.tsx        # register + login
│   ├── TrainerTeams.tsx    # list of saved teams
│   ├── SavedPokemonTeam.tsx # team detail + stats
│   └── NotFound.tsx        # 404
├── App.js                  # routes
└── index.js                # entry
```

## Getting Started

```bash
npm install
npm start    # runs on localhost:3000
```

Set your backend URL in the axios calls (or add a `.env`):
```
REACT_APP_API_URL=http://localhost:8080
```

## Remaining Work

- [ ] Edit team UI + backend PUT endpoint
- [ ] Point frontend at deployed AWS backend (pkmteambuilder.xyz → Cloudflare proxy → AWS EB)
- [ ] Team ownership auth — JWT-derived trainerId check so users only see their own teams
- [ ] Replace alert/confirm with toast/modal
- [ ] Footer
- [ ] Make Header a global nav showing logged-in user on every page

## Talking Points

- Deployed Spring Boot API to AWS Elastic Beanstalk
- Debugged a real production IPv6/IPv4 routing issue — Supabase direct host is IPv6-only, AWS is IPv4 → switched to Supabase session pooler to fix
- JWT auth with protected routes on both frontend and backend
- Live data from PokéAPI — sprites, types, base stats
