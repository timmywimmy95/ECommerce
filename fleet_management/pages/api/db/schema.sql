CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  role VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  insurance DATE,
  road_tax DATE,
  license_plate VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE servicing (
  id SERIAL PRIMARY KEY,
  serviceDate DATE,
  description VARCHAR(255),
  cost INTEGER,
  mileage INTEGER,
  veh_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE
);

INSERT INTO users (name, email, password, role) VALUES ('Timothy', 'timothykwok95@gmail.com', 'Deuteronomy_95!', 'business');
INSERT INTO users (name, email, password, role) VALUES ('Beverly', 'bevunderscoreng@gmail.com', 'Taylorswift13!', 'personal');

INSERT INTO vehicles (make, model, year, insurance, road_tax, license_plate, user_id) VALUES ('Honda', 'Africa Twin', '2019', DATE '2029-10-04', DATE '2023-10-07', 'FBU435U', 2);
INSERT INTO vehicles (make, model, year, insurance, road_tax, license_plate, user_id) VALUES ('Mazda', '3', '2019', DATE '2029-06-04', DATE '2023-12-08', 'SMH489Z', 1);

INSERT INTO servicing (servicedate, description, cost, veh_id, mileage) VALUES (DATE '2023-04-27', 'Accident repair from 20 Feb 2023', 0, 1, 25000);
INSERT INTO servicing (servicedate, description, cost, veh_id, mileage) VALUES (DATE '2022-10-30', 'Oil and oil filter change', 130, 1, 24300);
INSERT INTO servicing (servicedate, description, cost, veh_id, mileage) VALUES (DATE '2023-03-15', 'Fork servicing and brake pads', 350, 1, 22000);