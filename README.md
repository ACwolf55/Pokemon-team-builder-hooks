# Pokémon Team Builder — Frontend

React frontend for the [Pokémon Team Builder](https://pokemon-team-builder-hooks.vercel.app) full-stack app. Build a competitive 6-Pokémon team, save it, and view your collection. Built with React hooks, Redux, and Tailwind.

> **Live:** [pokemon-team-builder-hooks.vercel.app](https://pokemon-team-builder-hooks.vercel.app)
> **Backend repo:** [pkm-team-builder-server](https://github.com/ACwolf55/pkm-team-builder-server) (Java + Spring Boot + JWT)

## Project History

Pokémon Team Builder started as my capstone project at **DevMountain bootcamp** — originally built with **React class components**, a Node/Express backend, and deployed to Heroku.

After three years teaching full-stack development at DevMountain and completing **Revature's Java / Spring Boot training program**, I'm rebuilding the project from the ground up to reflect what I've learned since:

- **Frontend (this repo):** rebuilding in React with **functional components and hooks**, plus TypeScript and Tailwind
- **Backend:** rebuilt in [Java + Spring Boot](https://github.com/ACwolf55/pkm-team-builder-server) to deepen enterprise/JVM skills
- **Deployment:** moving from Heroku to AWS Elastic Beanstalk (backend) + Vercel (frontend)

Same product, modern stack.

## What it does

- **Register / log in** — JWT auth against the Spring Boot backend
- **Browse Pokémon** — data sourced from [PokéAPI](https://pokeapi.co/)
- **Build a team** — pick 6 Pokémon, name the team
- **Save teams** — persisted to PostgreSQL via the backend
- **View your teams** — see all your saved teams with their Pokémon

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 (hooks, functional components) |
| Language | TypeScript |
| State | Redux + `redux-promise-middleware` (async actions) |
| Routing | React Router 6 |
| Styling | Tailwind CSS |
| HTTP | Axios |
| External data | PokéAPI |
| Auth | JWT (issued by backend, stored client-side) |
| Backend | Spring Boot / Java ([separate repo](https://github.com/ACwolf55/pkm-team-builder-server)) |
| Hosting | Vercel |
| Bootstrapped with | Create React App |

## Project Structure

```
src/
├── App.js           # root
├── index.js         # entry
├── pages/           # route components (home, login, team builder, view teams)
├── components/      # shared UI
├── App.css
├── index.css
└── tailwind.css
```

The frontend proxies API requests to `http://localhost:8080` in dev so it can hit the Spring Boot backend without CORS friction.

## Getting Started

### Prerequisites
- Node.js 18+
- Backend running locally (see [backend repo](https://github.com/ACwolf55/pkm-team-builder-server)) at `http://localhost:8080`

### Run

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Roadmap

- [ ] Edit team feature (waiting on backend PUT endpoint)
- [ ] Delete team feature
- [ ] Form validation: prevent empty input submits
- [ ] Handle page refresh correctly (auth persistence, state recovery)
- [ ] Mobile responsive polish (Tailwind breakpoints)
- [ ] Migrate from CRA to Vite (CRA was deprecated in 2024)
- [ ] Add type filters, abilities, and move sets to the Pokémon browser

## What I Learned

- Modern React with hooks: `useState`, `useEffect`, custom hooks
- The difference between class and functional component thinking — from rebuilding the same app twice
- Redux with `redux-promise-middleware` for clean async API actions
- TypeScript in React — typing props, state, and API responses
- Consuming a public REST API (PokéAPI) and reshaping its data for my UI
- JWT auth flow on the client (storage, attaching to requests, expiry handling)
- Tailwind utility-first styling vs traditional CSS
- The bootcamp-grad → working-pro mindset shift: cleaner code, smaller components, hooks for state
