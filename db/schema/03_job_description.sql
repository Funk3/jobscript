DROP TABLE IF EXISTS job_description CASCADE;
CREATE TABLE job_description (
  id SERIAL PRIMARY KEY,
  text VARCHAR(n) TEXT NOT NULL,
  cover_letter_text VARCHAR(25) TEXT NOT NULL,
  keywords VARCHAR(25) TEXT NOT NULL,
  interview_questions VARCHAR(n) TEXT NOT NULL,
  company_summary VARCHAR(name) TEXT NOT NULL
);