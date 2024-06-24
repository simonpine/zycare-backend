CREATE TABLE hospitales (
  id SERIAL PRIMARY KEY,
  nombreHospital VARCHAR(255) UNIQUE,
  description VARCHAR(255)
  );