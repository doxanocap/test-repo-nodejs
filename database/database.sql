CREATE DATABASE test;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    isActivated Boolean NOT NULL,
    activationLink VARCHAR(255),
    password TEXT NOT NULL
);


CREATE TABLE tokens (
    id INT NOT NULL,
    refreshToken TEXT NOT NULL
);


