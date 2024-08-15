Here’s a `README.md` for your URL shortener project:

```markdown
# URL Shortener

A simple URL shortener application built with Node.js, Express, Sequelize, PostgreSQL, and Swagger for API documentation.

## Features

- Shorten URLs with a generated unique ID
- Redirect to original URLs using the shortened version
- API documentation using Swagger

## Project Structure

```
/url-shortener
├── /config
│   └── config.js         # Database configuration
├── /models
│   └── url.js            # Sequelize model for URLs
├── /routes
│   └── urlRoutes.js      # API routes for URL shortening and redirection
├── /controllers
│   └── urlController.js  # Controller for handling URL operations
├── /swagger
│   └── swagger.js        # Swagger setup for API documentation
├── /migrations
│   └── <migration files> # Migration files for database schema
├── /swagger.json         # Swagger API specification (optional)
└── index.js              # Main application entry point
```

## Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/seremwen/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database:

   ```bash
   createdb urlshortener
   ```

4. Configure database credentials in `/config/config.js`:

   ```javascript
   const sequelize = new Sequelize('urlshortener', 'your_username', 'your_password', {
     host: 'localhost',
     dialect: 'postgres',
   });
   ```

5. Run migrations to create the database schema:

   ```bash
   npx sequelize-cli db:migrate
   ```

### Running the Application

Start the application:

```bash
node index.js
```

The server will run on `http://localhost:5000`.

### API Endpoints

#### Shorten URL

- **URL:** `/api/shorten`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "originalUrl": "https://example.com",
    "shortUrl": "abc123"
  }
  ```

#### Redirect to Original URL

- **URL:** `/api/{shortUrl}`
- **Method:** `GET`
- **Response:** Redirects to the original URL.

### Swagger API Documentation

The API documentation is available at `http://localhost:5000/api-docs`.

### Project Configuration

#### Database Configuration

The database connection is managed in `/config/config.js`. Update this file with your PostgreSQL credentials.

#### Swagger Configuration

The Swagger setup is managed in `/swagger/swagger.js`. You can customize the Swagger options as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Swagger](https://swagger.io/)
- [PostgreSQL](https://www.postgresql.org/)
```

You can customize this `README.md` as needed to fit your project's specific details and requirements.