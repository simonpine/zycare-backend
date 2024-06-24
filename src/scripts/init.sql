CREATE TABLE hospitales (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255),
  fotourl TEXT,
  especialidad TEXT,
  nivel SMALLINT,
  privado SMALLINT,
  queAtiende TEXT
  );