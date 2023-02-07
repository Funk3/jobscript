
DROP TABLE IF EXISTS job_description CASCADE;
CREATE TABLE job_description (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  company_name TEXT,
  job_title TEXT,
  description TEXT NOT NULL,
  cover_letter_text TEXT ,
  keywords VARCHAR(255),
  interview_questions TEXT,
  company_summary TEXT,
  timestamp TIMESTAMP DEFAULT now()
);