DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;


USE pokemon;
CREATE TABLE pokemonfinder (
  position INT NOT NULL,
  name VARCHAR(100) NULL,
  species INT NULL,
  height INT NULL,
   weight INT NULL,
  base_expierence INT NULL,
  numorder INT NULL,
  isdault INT NULL,
  PRIMARY KEY (position)
);

-- populate pokemon.pokefinder with data from pokemon.csv

ALTER TABLE pokemon.pokemonfinder
ADD image varchar(255);

CREATE TABLE pokemon.tempimagetable (
  id INT,
  imagepath VARCHAR(255)
);

-- populate tempimagetable with data from photos.csv

USE pokemon;
UPDATE pokemon.pokemonfinder
INNER JOIN tempimagetable ON tempimagetable.id = pokemonfinder.position
SET pokemonfinder.image = tempimagetable.imagepath
