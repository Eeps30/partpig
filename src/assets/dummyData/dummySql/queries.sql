-- Sample Query 1
SELECT u.first_name, u.last_name, u.id, p.seller_id, p.name, p.part_condition FROM `user` as u
JOIN part as p
on u.id = p.seller_id

-- Sample Query that finds all make of subaru with and a model name with wrx in it
SELECT * FROM `jsonparts` WHERE make='Subaru' AND modelName LIKE '%WRX%'
