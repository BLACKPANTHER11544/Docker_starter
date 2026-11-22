# Manual installation

manual_steps:

- step: 1
  title: Install Node.js
  command: null
  url: "https://nodejs.org"

- step: 2
  title: Initialize an empty project/npm package
  command: "npm init -y"

- step: 3
  title: Install TypeScript
  command: "npm install typescript"

- step: 4
  title: Get a free PostgreSQL database
  command: null

- step: 5
  title: Install Prisma ORM
  command: "npm install prisma"
  recommended_command: "npm install prisma@6 @prisma/client@6"
  note: "This project uses Prisma@6 and @prisma/client@6."

- step: 6
  title: Set up environment variables
  environment_variables:
  DATABASE_URL: "LINK_OF_YOUR_POSTGRESDB"

- step: 7
  title: Install Express and its TypeScript types
  command: "npm install express @types/express"

- step: 8
  title: Initialize Prisma
  command: "npx prisma init"
  note: "This generates a prisma folder containing schema.prisma."

- step: 9
  title: Migrate Prisma schema to PostgreSQL
  command: "npx prisma migrate dev"

- step: 10
  title: Generate Prisma Client
  command: "npx prisma generate"

# Docker installation

docker_steps:

- step: 1
  title: Install Docker
  command: null

- step: 2
  title: Create a Docker network
  command: "docker network create <NETWORK_NAME>"

- step: 3
  title: Create and run a PostgreSQL container
  description: "This starts a local PostgreSQL database using the postgres:latest image."
  command: "docker run -d --name pgdb -e POSTGRES_PASSWORD=<password> -p 5432:5432 --network <network_name> postgres:latest"

- step: 4
  title: Configure database environment variable
  file: ".env"
  environment_variables:
  DATABASE_URL: "postgresql://postgres:<postgres_password>@pgdb:5432/postgres"

- step: 5
  title: Run the Node.js project Docker container
  command: "docker run -d -p 8080:8080 --network <network_name> --env-file ./src/.env node_project:latest"
