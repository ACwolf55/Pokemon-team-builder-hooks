-- SAVE TEAM Pokemon_members1


INSERT INTO pokemon_team
(pkm_user_id,team_name)
VALUES
($1,$2)
returning *;

-- SAVE TEAM2
-- INSERT INTO pokemon_members
-- (pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
-- VALUES
-- ($1,$2,$3,$4,$5,$6)
-- returning *


-- CREATE TABLE Pokemon_members (
-- Pokemon_team_id SERIAL PRIMARY KEY,
-- pokemon_1 TEXT,
-- pokemon_2 TEXT,
-- pokemon_3 TEXT,
-- pokemon_4 TEXT
-- pokemon_5 TEXT,
-- pokemon_6 TEXT
-- );

-- CREATE TABLE Pokemon_team(
-- Pokemon_team_id INT REFERENCES pokemon_members(Pokemon_team_id),
-- pkm_user INT REFERENCES pkm_users(pkm_user_id)
-- team_team VARCHAR(30)
-- );