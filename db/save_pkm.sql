INSERT INTO pokemon_members
(pokemon_team_id,pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES
($1,$2,$3,$4,$5,$6,$7)
returning *
