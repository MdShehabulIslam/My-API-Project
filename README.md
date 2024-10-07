# Joke of the Day Website

## Overview

This project is a simple web application that fetches and displays jokes from the JokeAPI using Node.js and Express. It utilizes Axios for making HTTP requests and EJS as the templating engine to render dynamic content.

## Features

- Fetch a random joke from the JokeAPI.
- Display the joke in a user-friendly interface.
- Handle jokes that may contain explicit content.
- Responsive design with Bootstrap for a modern look.

## Technology Stack

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web framework for Node.js.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **EJS:** Templating engine for rendering HTML.
- **Bootstrap:** CSS framework for responsive design.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
```
git clone ** https://github.com/MdShehabulIslam/My-API-Project.git **
```
2. Navigate into the project directory:
```
cd <project-directory>
```
3. Install the dependencies:
```
npm install express axios ejs
```

## Running the Application

1. Start the server:
```
node app.js
```
3. Open your browser and go to  * http://localhost:3000 * to view the application.

## Usage

- Click the "Get Another Joke" button to fetch a new joke.
- The application will display jokes in a structured format, ensuring that jokes containing explicit content are filtered out.

## Error Handling

The application handles API errors and provides user-friendly messages when jokes cannot be retrieved.
