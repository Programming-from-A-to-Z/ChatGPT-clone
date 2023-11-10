# ChatGPT Clone

This project is a simple clone of ChatGPT using the OpenAI API. It consists of a Node.js server that handles requests and responses to and from OpenAI's language models, and a front-end client that provides a user interface for interacting with the chatbot.

## Getting Started

To run this project, you'll need Node.js and npm installed on your computer. After cloning this repository, run the following commands in your terminal:

```
npm install
node index.js
```

This will install all necessary dependencies and start the server.

## Interacting with the Chatbot

Once the server is running, open your web browser and navigate to `http://localhost:3000`. You will see a simple chat interface where you can type messages to the ChatGPT clone, which uses OpenAI's API to generate responses.

## OpenAI API

To use the API, you will need to sign up for an API key from OpenAI and set it in your environment variables.

You can find more information and the API documentation here:

- OpenAI API Documentation: https://platform.openai.com/docs/introduction
- Getting started with the OpenAI API: https://platform.openai.com/docs/quickstart

## Project Structure

- `index.js`: The Node.js server script that sets up the API endpoint and handles communication with the OpenAI API.
- `chat.js`: The client-side JavaScript that manages the chat interface and sends messages to the server.
- `index.html`: The HTML file for the front-end client.
- `style.css`: The CSS file for styling the chat interface.
- `package.json`: Defines the project dependencies and scripts.

## Prerequisites

- Node.js
- npm
- An API key from OpenAI

## Dependencies

- Express
- Body-parser
- Dotenv (for managing environment variables)

These dependencies are listed in the `package.json` file and will be installed when you run `npm install`.
