CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

--------------TABLE SETUP---------------------------
-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);
--  Table to store favorite images
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (150),
	"url" VARCHAR (400), 
	"category_id" INT  DEFAULT(1) REFERENCES "category"
);
--------------END TABLE SETUP-----------------------

--------------EXAMPLE DATA---------------------------
-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('default'),('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
-- Default favorites. You may change them :)
INSERT INTO "favorites" ("title","url","category_id")
VALUES ('example gif','https://media1.giphy.com/media/duexIlfr9yYwYE23UA/200.gif?cid=1a0aaad910q54gbhjfvm1qumr80igjeo6dsx6s615ygs2z8p&rid=200.gif&ct=g', '1');
--------------END EXAMPLE DATA---------------------------




SELECT *
FROM "favorites"
JOIN "category" ON "category"."id" = "favorites"."category_id";