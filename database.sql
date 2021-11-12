CREATE TABLE "person" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(100) NOT NULL,
	"last_name" VARCHAR(100) NOT NULL,
);

CREATE TABLE "phone_number" (
	"id" SERIAL PRIMARY KEY,
	"person_id" VARCHAR(100) NOT NULL,
	"phone_number" VARCHAR(100) NOT NULL,
);

SELECT *
FROM person AS p
JOIN phone_number AS num
ON p.id = num.person_id;

SELECT *
FROM person AS p
JOIN phone_number AS num
ON p.id = num.person_id
WHERE phone_number IS NULL;

SELECT *
FROM person AS p
JOIN phone_number AS num
ON p.id = num.person_id
GROUP BY phone_number;