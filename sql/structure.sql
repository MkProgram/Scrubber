DROP DATABASE IF EXISTS "Scrubber";
CREATE DATABASE "Scrubber";

DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "boards" CASCADE;
DROP TABLE IF EXISTS "tickets" CASCADE;
DROP TABLE IF EXISTS "priorities" CASCADE;

CREATE TABLE "users" (
    "id"        UUID    PRIMARY KEY,
    "lastName"  VARCHAR NOT NULL,
    "givenName" VARCHAR NOT NULL,
    "salt"      VARCHAR NOT NULL,
    "password"  VARCHAR NOT NULL
);

CREATE TABLE "boards" (
    "id"        UUID    PRIMARY KEY,
    "owner"     UUID    NOT NULL,
    "name"      VARCHAR NOT NULL
);

CREATE TABLE "tickets" (
    "id"            UUID    PRIMARY KEY,
    "title"         VARCHAR NOT NULL,
    "description"   VARCHAR NULL,
    "private"       BOOLEAN NOT NULL DEFAULT FALSE,
    "priority"      UUID    NOT NULL,
    "user"          UUID    NOT NULL,
    "board"         UUID    NOT NULL
);

CREATE TABLE "priorities" (
    "id"            UUID    PRIMARY KEY,
    "displayValue"  VARCHAR NOT NULL
);

ALTER TABLE "boards" ADD CONSTRAINT "boardsBelongToUsers" FOREIGN KEY ("owner") REFERENCES "users" ("id");
ALTER TABLE "tickets" ADD CONSTRAINT "ticketsBelongToUsers" FOREIGN KEY ("user") REFERENCES "users" ("id");
ALTER TABLE "tickets" ADD CONSTRAINT "ticketsBelongToBoards" FOREIGN KEY ("board") REFERENCES "boards" ("id");
ALTER TABLE "tickets" ADD CONSTRAINT "ticketsHavePriorities" FOREIGN KEY ("priority") REFERENCES "priorities" ("id");