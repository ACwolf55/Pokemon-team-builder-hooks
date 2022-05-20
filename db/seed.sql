CREATE TABLE pkm_users (
pkm_user_id SERIAL PRIMARY KEY,
user_name VARCHAR(18),
hash TEXT
);

CREATE TABLE pokemon_team (
pokemon_team_id SERIAL PRIMARY KEY,
pkm_user_id INT REFERENCES pkm_users(pkm_user_id),
team_name VARCHAR(30)
);

CREATE TABLE pokemon_members (
pokemon_team_id INT REFERENCES pokemon_team(pokemon_team_id),
pokemon_1 TEXT,
pokemon_2 TEXT,
pokemon_3 TEXT,
pokemon_4 TEXT,
pokemon_5 TEXT,
pokemon_6 TEXT
);

INSERT INTO pkm_users
(user_name,hash)
VALUES
('AC','Ketchum');

INSERT INTO pkm_users
(user_name,hash)
VALUES
('Erika','grasspkm');

INSERT INTO pokemon_team
(pkm_user_id,team_name)
VALUES
(1,'team1');

INSERT INTO pokemon_team
(pkm_user_id,team_name)
VALUES
(1,'team2');

INSERT INTO pokemon_members
(pokemon_team_id,pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES
(2,'arcanine','cinccino','golem','venusaur','kabutops','furret');

INSERT INTO pokemon_members
(pokemon_team_id,pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES
(3,'feraligatr','nidoking','lilligant','lycanroc-midday','raichu-alola','pidgeot-mega');

