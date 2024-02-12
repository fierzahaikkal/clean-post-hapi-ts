## Introduction

This project is a practical exercise implementing a CRUD (Create, Read, Update, Delete) functionality for managing posts. It utilizes various technologies such as Hapi.js, TypeScript, Prisma ORM, PostgreSQL, and follows principles of Clean Architecture and Domain-Driven Design (DDD) for structuring the application.

## Installation

1. Clone the repository from GitHub:

   ```
   git clone https://github.com/fierzahaikkal/clean-post-hapi-ts
   ```

2. Navigate to the project directory:

   ```
   cd clean-post-hapi-ts
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Configuration

1. **Database Setup**: Ensure you have PostgreSQL installed and running. Configure the database connection in the `.env` file.

2. **Prisma Configuration**: Modify the `prisma/schema.prisma` file according to your database schema.

## Usage

1. **Start Server**: Run the following command to start the server:

   ```
   npm run dev
   ```

2. **API Endpoints**: The following endpoints are available for CRUD operations on posts:

   - **GET /posts**: Fetch all posts.
   - **GET /posts/{id}**: Fetch a post by ID.
   - **POST /posts**: Create a new post.
   - **PUT /posts/{id}**: Update a post.
   - **DELETE /posts/{id}**: Delete a post.

## Project Structure

The project follows a modular and organized structure based on Clean Architecture principles:

```
clean-post-hapi-ts/
│
├── dist/                      # Compiled TypeScript files
│
├── prisma/                    # Prisma ORM configuration
│   └── schema.prisma          # Database schema definition
│
├── src/
│   ├── application/           # Application layer
│   │   ├── usecase/           # Business logic services
│   │   └── dto/               # Data Transfer Objects
│   │
│   ├── domain/                # Domain layer (Domain models, repositories, interfaces)
│   │   ├── entities/          # Domain models
│   │   └── repository/        # Interfaces for interacting with data
│   │
│   ├── infrastructure/        # Infrastructure layer (Database, external services)
│   │   ├── config/            # Configuration files
│   │   ├── orm/               # Database access layer (Prisma ORM)
│   │   └── webserver/         # Web server setup
│   │
│   ├── interfaces/            # Interface adapters (API controllers, DTO mappers)
│   │   ├── controllers/       # Request handlers
│   │   └── routes/            # Route definitions
│   │
│
├── test/                      # Test files
│
├── .env                       # Environment variables
│
├── index.ts                   # Entry point file
│
└── README.md                  # Project README file
```

## Technologies Used

- **Hapi.js**: A rich framework for building applications and services in Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma ORM**: A modern database toolkit for TypeScript and Node.js.
- **PostgreSQL**: An open-source relational database system.
- **Clean Architecture**: A software design philosophy that separates concerns into distinct layers.
- **Domain-Driven Design (DDD)**: An approach to software development that prioritizes domain understanding and modeling.

## Acknowledgments

- Special thanks to the developers of Hapi.js, Prisma ORM, and other open-source libraries used in this project.
- Inspired by Clean Architecture and DDD principles advocated by Robert C. Martin and Eric Evans, respectively.
