SELECT * FROM pokemon_members
WHERE pokemon_team_id IN(
  SELECT pokemon_team_id FROM pokemon_team
  WHERE pkm_user_id = $1)