-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255),
--   role VARCHAR(255),
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  type TEXT,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  status TEXT,
  insurance DATE,
  road_tax DATE,
  license_plate VARCHAR(255) NOT NULL,
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

-- INSERT INTO users (name, email, password, role) VALUES ('Timothy', 'timothykwok95@gmail.com', 'Deuteronomy_95!', 'business');
-- INSERT INTO users (username, email, password, role) VALUES ('Gale', 'bevunderscoreng@gmail.com', 'Taylorswift13!', 'user');

INSERT INTO vehicles (make, model, year, insurance, road_tax, license_plate, type ) VALUES ('Honda', 'Africa Twin', '2019', DATE '2029-10-04', DATE '2023-10-07', 'FBU435U', 'motorcycle' );
INSERT INTO vehicles (make, model, year, insurance, road_tax, license_plate, type) VALUES ('Mazda', '3', '2019', DATE '2029-06-04', DATE '2023-12-08', 'SMH489Z', 'car' );

INSERT INTO servicing (servicedate, description, cost, veh_id, mileage) VALUES (DATE '2023-04-27', 'Accident repair from 20 Feb 2023', 0, 1, 25000);
INSERT INTO servicing (servicedate, description, cost, veh_id, mileage) VALUES (DATE '2022-10-30', 'Oil and oil filter change', 130, 1, 24300);
INSERT INTO servicing (servicedate, description, cost, veh_id, mileage) VALUES (DATE '2023-03-15', 'Fork servicing and brake pads', 350, 1, 22000);

-- CREATE TABLE accounts
--   (
--     id                   SERIAL,
--     compound_id          VARCHAR(255) NOT NULL,
--     user_id              INTEGER NOT NULL,
--     provider_type        VARCHAR(255) NOT NULL,
--     provider_id          VARCHAR(255) NOT NULL,
--     provider_account_id  VARCHAR(255) NOT NULL,
--     refresh_token        TEXT,
--     access_token         TEXT,
--     access_token_expires TIMESTAMPTZ,
--     created_at           TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at           TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
--   );

-- CREATE TABLE sessions
--   (
--     id            SERIAL,
--     user_id       INTEGER NOT NULL,
--     expires       TIMESTAMPTZ NOT NULL,
--     session_token VARCHAR(255) NOT NULL,
--     access_token  VARCHAR(255) NOT NULL,
--     created_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
--   );

-- CREATE TABLE users
--   (
--     id             SERIAL,
--     name           VARCHAR(255),
--     username       VARCHAR(255),
--     password       CHAR(60),
--     role           VARCHAR(255),
--     email          VARCHAR(255),
--     email_verified TIMESTAMPTZ,
--     image          TEXT,
--     created_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
--   );

-- CREATE TABLE verification_requests
--   (
--     id         SERIAL,
--     identifier VARCHAR(255) NOT NULL,
--     token      VARCHAR(255) NOT NULL,
--     expires    TIMESTAMPTZ NOT NULL,
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
--   );

-- CREATE UNIQUE INDEX compound_id
--   ON accounts(compound_id);

-- CREATE INDEX provider_account_id
--   ON accounts(provider_account_id);

-- CREATE INDEX provider_id
--   ON accounts(provider_id);

-- CREATE INDEX user_id
--   ON accounts(user_id);

-- CREATE UNIQUE INDEX session_token
--   ON sessions(session_token);

-- CREATE UNIQUE INDEX access_token
--   ON sessions(access_token);

-- CREATE UNIQUE INDEX email
--   ON users(email);

-- CREATE UNIQUE INDEX token
--   ON verification_requests(token);

/* ACCOUNT */
-- ALTER TABLE accounts RENAME COLUMN "user_id" TO "userId";
-- ALTER TABLE accounts RENAME COLUMN "provider_id" TO "provider";
-- ALTER TABLE accounts RENAME COLUMN "provider_account_id" TO "providerAccountId";
-- ALTER TABLE accounts RENAME COLUMN "access_token_expires" TO "expires_at";
-- ALTER TABLE accounts RENAME COLUMN "provider_type" TO "type";

-- /* Do conversion of TIMESTAMPTZ to BIGINT */
-- ALTER TABLE accounts ALTER COLUMN "expires_at" TYPE TEXT USING CAST(extract(epoch FROM "expires_at") AS BIGINT)*1000;

-- /* Keep id as SERIAL with autoincrement when using ORM. Using new v4 uuid format won't work because of incompatibility */
-- /* ALTER TABLE accounts ALTER COLUMN "id" TYPE TEXT; */
-- /* ALTER TABLE accounts ALTER COLUMN "userId" TYPE TEXT; */
-- ALTER TABLE accounts ALTER COLUMN "type" TYPE TEXT;
-- ALTER TABLE accounts ALTER COLUMN "provider" TYPE TEXT;
-- ALTER TABLE accounts ALTER COLUMN "providerAccountId" TYPE TEXT;

-- ALTER TABLE accounts ADD CONSTRAINT fk_user_id FOREIGN KEY ("userId") REFERENCES users(id);
-- ALTER TABLE accounts
-- DROP COLUMN IF EXISTS "compound_id";
-- /* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
-- ALTER TABLE accounts
-- DROP COLUMN IF EXISTS "created_at",
-- DROP COLUMN IF EXISTS "updated_at";

-- ALTER TABLE accounts
-- ADD COLUMN IF NOT EXISTS "token_type" TEXT NULL,
-- ADD COLUMN IF NOT EXISTS "scope" TEXT NULL,
-- ADD COLUMN IF NOT EXISTS "id_token" TEXT NULL,
-- ADD COLUMN IF NOT EXISTS "session_state" TEXT NULL;
-- /* Note: These are only needed if you're going to be using the old Twitter OAuth 1.0 provider. */
-- /* ALTER TABLE accounts
-- ADD COLUMN IF NOT EXISTS "oauth_token_secret" TEXT NULL,
-- ADD COLUMN IF NOT EXISTS "oauth_token" TEXT NULL; */

-- /* USER */
-- ALTER TABLE users RENAME COLUMN "email_verified" TO "emailVerified";

-- /* Keep id as SERIAL with autoincrement when using ORM. Using new v4 uuid format won't work because of incompatibility */
-- /* ALTER TABLE users ALTER COLUMN "id" TYPE TEXT; */
-- ALTER TABLE users ALTER COLUMN "name" TYPE TEXT;
-- ALTER TABLE users ALTER COLUMN "email" TYPE TEXT;
-- ALTER TABLE users ALTER COLUMN "image" TYPE TEXT;
-- /* Do conversion of TIMESTAMPTZ to BIGINT and then TEXT */
-- ALTER TABLE users ALTER COLUMN "emailVerified" TYPE TEXT USING CAST(CAST(extract(epoch FROM "emailVerified") AS BIGINT)*1000 AS TEXT);
-- /* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
-- ALTER TABLE users
-- DROP COLUMN IF EXISTS "created_at",
-- DROP COLUMN IF EXISTS "updated_at";

-- /* SESSION */
-- ALTER TABLE sessions RENAME COLUMN "session_token" TO "sessionToken";
-- ALTER TABLE sessions RENAME COLUMN "user_id" TO "userId";

-- /* Keep id as SERIAL with autoincrement when using ORM. Using new v4 uuid format won't work because of incompatibility */
-- /* ALTER TABLE sessions ALTER COLUMN "id" TYPE TEXT; */
-- /* ALTER TABLE sessions ALTER COLUMN "userId" TYPE TEXT; */
-- ALTER TABLE sessions ALTER COLUMN "sessionToken" TYPE TEXT;
-- ALTER TABLE sessions ADD CONSTRAINT fk_user_id FOREIGN KEY ("userId") REFERENCES users(id);
-- /* Do conversion of TIMESTAMPTZ to BIGINT and then TEXT */
-- ALTER TABLE sessions ALTER COLUMN "expires" TYPE TEXT USING CAST(CAST(extract(epoch FROM "expires") AS BIGINT)*1000 AS TEXT);
-- ALTER TABLE sessions DROP COLUMN IF EXISTS "access_token";
-- /* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
-- ALTER TABLE sessions
-- DROP COLUMN IF EXISTS "created_at",
-- DROP COLUMN IF EXISTS "updated_at";

-- /* VERIFICATION REQUESTS */
-- ALTER TABLE verification_requests RENAME TO verification_tokens;
-- /* Keep id as ORM needs it */
-- /* ALTER TABLE verification_tokens DROP COLUMN IF EXISTS id; */
-- ALTER TABLE verification_tokens ALTER COLUMN "identifier" TYPE TEXT;
-- ALTER TABLE verification_tokens ALTER COLUMN "token" TYPE TEXT;
-- /* Do conversion of TIMESTAMPTZ to BIGINT and then TEXT */
-- ALTER TABLE verification_tokens ALTER COLUMN "expires" TYPE TEXT USING CAST(CAST(extract(epoch FROM "expires") AS BIGINT)*1000 AS TEXT);
-- /* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
-- ALTER TABLE verification_tokens
-- DROP COLUMN IF EXISTS "created_at",
-- DROP COLUMN IF EXISTS "updated_at";

-- ALTER TABLE users
-- ADD COLUMN role VARCHAR(255);