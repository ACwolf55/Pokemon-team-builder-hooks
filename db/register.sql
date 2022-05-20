INSERT INTO pkm_users
(user_name, hash)
VALUES
($1, $2)
returning *;