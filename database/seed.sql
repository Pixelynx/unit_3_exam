DROP DATABASE IF EXISTS unit_3_exam;
CREATE DATABASE unit_3_exam;

\c unit_3_exam;

CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  is_mammal BOOLEAN
);

CREATE TABLE researchers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  job_title VARCHAR NOT NULL
);

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  species_id INT REFERENCES species(id),
  nickname VARCHAR NOT NULL
);

CREATE TABLE habitat (
  id SERIAL PRIMARY KEY,
  category VARCHAR NOT NULL
);

CREATE TABLE taggings (
  id SERIAL PRIMARY KEY,
  animal_id INT REFERENCES animals(id) ON DELETE CASCADE,
  researcher_id INT REFERENCES researchers(id) ON DELETE SET NULL
);

CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  researcher_id INT REFERENCES researchers(id) ON DELETE SET NULL,
  species_id INT REFERENCES species(id) ON DELETE CASCADE,
  habitat_id INT REFERENCES habitat(id)
);

INSERT INTO species (name, is_mammal) VALUES
  ('Dolphin', true), ('Moray Eel', false), ('Tiger Shark', false),
  ('Orca Whale', true), ('Moon Jelly', false);

INSERT INTO researchers (name, job_title) VALUES
  ('Mariana Aleta', 'Project Lead'), ('Javed Patrick', 'Senior Field Researcher'),
  ('Carolina Itai', 'Field Researcher'), ('Jazmyn Gottfried', 'Field Researcher'),
  ('Ezra Flip', 'Research Intern');

INSERT INTO animals (species_id, nickname) VALUES
  (1, 'Flip'), (5, 'Nox'), (2, 'Jenkins'), (3, 'Sally'), (5, 'Flapjack'),
  (1, 'Skip'), (5, 'Gibbous');

INSERT INTO habitat (category) VALUES
  ('Shallows'), ('Coral Reef'), ('Tide Pools'), ('Deeps');

INSERT INTO taggings (animal_id, researcher_id) VALUES
  (1, 5), (6, 3), (3, 1), (4, 2), (1, 4), (5, 4), (7, 4), (2, 2);

INSERT INTO sightings (researcher_id, species_id, habitat_id) VALUES
  (4, 4, 4), (3, 1, 4), (5, 3, 3), (2, 5, 2), (1, 2, 1), (2, 5, 1);
