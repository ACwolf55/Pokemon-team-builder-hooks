# Pokémon Team Builder — Spring Boot Server

REST API backend for the [Pokémon Team Builder](https://pokemon-team-builder-hooks.vercel.app) full-stack app. Handles user accounts, authentication, and team CRUD. Built in Java with Spring Boot and JWT-based auth.

> **Live frontend:** [pokemon-team-builder-hooks.vercel.app](https://pokemon-team-builder-hooks.vercel.app)
> **Frontend repo:** [Pokemon-team-builder-hooks](https://github.com/ACwolf55/Pokemon-team-builder-hooks)

## Project History

This project started as my bootcamp capstone built with React class components and a Node/Express backend hosted on Heroku.

I am currently rebuilding it with:
- React functional components and hooks (modern React patterns)
- Java + Spring Boot backend (transitioning from Node/Express to deepen enterprise JVM skills)
- AWS deployment (moving from Heroku to AWS for the backend)

The same product surface, but a fundamentally different stack. The migration was a chance to work through Spring Security, JPA, and JWT authentication from scratch while keeping the frontend familiar.

## Tech Stack

| Layer | Tech |
|-------|------|
| Language / Runtime | Java 20 |
| Framework | Spring Boot 3.2 |
| Security | Spring Security + JWT (jjwt 0.11.5), BCrypt hashing |
| Data | Spring Data JPA / Hibernate, PostgreSQL |
| Build | Maven |
| Monitoring | Spring Actuator |

## Architecture

Standard Spring layered architecture:

- **`controller/`** — REST endpoints (`TrainerController`, `PokemonTeamController`)
- **`service/`** — business logic, transaction boundaries
- **`repository/`** — JPA repositories (data access)
- **`entity/`** — JPA entities (`Trainer`, `PokemonTeam`)
- **`security/`** — JWT filter, JWT utility, password encoding, `SecurityConfig`

## API Endpoints

### Authentication (`/auth/**` — public)

| Method | Path | Body | Returns |
|--------|------|------|---------|
| POST | `/auth/register` | `{ trainerName, password }` | Trainer (201) or 409 conflict |
| POST | `/auth/login` | `{ trainerName, password }` | `{ token, trainerId, trainerName }` (200) or 401 |

### Teams (`/pokemon-teams/**` — JWT required)

| Method | Path | Returns |
|--------|------|---------|
| POST | `/pokemon-teams/pokemon_team` | Created team |
| GET | `/pokemon-teams/pokemon_team/team_id/{id}` | Single team |
| GET | `/pokemon-teams/pokemon_team/{trainer_id}` | All teams for a trainer |
| DELETE | `/pokemon-teams/pokemon_team/{id}` | Row count affected |

Authenticated requests must include `Authorization: Bearer <token>`.

## Authentication Flow

1. Client `POST`s credentials to `/auth/login`.
2. Server verifies password with BCrypt, generates a JWT signed with the configured secret.
3. Client stores the token and attaches it to every subsequent request as `Authorization: Bearer <token>`.
4. `JwtFilter` intercepts each request, validates the token, and populates Spring's `SecurityContext` before reaching protected endpoints.
5. Sessions are **stateless** — no server-side session storage.

## Getting Started

### Prerequisites

- Java 20+
- Maven 3.9+
- PostgreSQL (or use the H2 in-memory option included for testing)


### Run

```bash
mvn spring-boot:run
```

Server starts on `http://localhost:8080`.

## Roadmap

- [ ] Add `PUT /pokemon-teams/pokemon_team/{id}` for team editing (currently only create/read/delete)
- [ ] Deploy to AWS Elastic Beanstalk (in progress)
- [ ] Profile-based CORS config: `application-dev.properties` (allow all) vs `application-prod.properties` (restrict to Vercel domain)
- [ ] Refactor `PokemonTeam` entity to use a join table instead of six denormalized columns
- [ ] Add integration tests
- [ ] OpenAPI / Swagger docs

## What I Learned

- Spring Security's filter chain and how JWT integration plugs into it
- Stateless authentication patterns (no `HttpSession`, all state in the token)
- BCrypt password hashing and why salt matters
- JPA entity mapping and the trade-offs of denormalized vs. normalized schemas
- CORS configuration and how to scope it for different environments