DROP TABLE IF EXISTS resume CASCADE;
CREATE TABLE resume (
  id SERIAL PRIMARY KEY,
  text VARCHAR(n) TEXT NOT NULL,
  keywords VARCHAR(25) TEXT NOT NULL
);