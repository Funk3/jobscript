DROP TABLE IF EXISTS job_description CASCADE;
CREATE TABLE job_description (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  cover_letter_text VARCHAR(25) NOT NULL,
  keywords VARCHAR(25) NOT NULL,
  interview_questions TEXT NOT NULL,
  company_summary TEXT NOT NULL
);