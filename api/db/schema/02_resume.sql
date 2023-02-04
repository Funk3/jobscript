DROP TABLE IF EXISTS resume CASCADE;
CREATE TABLE resume (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  text TEXT NOT NULL,
  keywords VARCHAR(25),
  timestamp TIMESTAMP
);