# Polling API

Polling API is an application that allows you to create, manage, and vote on polls. It provides API endpoints for creating and viewing questions, options, and voting on options. This README will guide you through setting up and using the Polling API.

## Features

- Create and manage questions.
- Create and manage options associated with questions.
- Vote on options.
- Delete questions and options.

## Technologies Used

- Node.js: The server is built with Node.js, a JavaScript runtime.
- Express.js: A web application framework for Node.js used to build the API.
- MongoDB: A NoSQL database used to store questions and options.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- Postman: A popular API client used for testing the API endpoints.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running.
- Postman (or any API testing tool) for interacting with the API.

## Installation

1. Clone the repository: `<repository-link>`
2. Navigate to the project directory
3. Install the dependencies: `npm install`

## Usage

1. Create a `.env` file and set your environment variables, including the MongoDB connection URI and the server port.
2. Start the server: `npm start`
3. Use Postman or a similar tool to interact with the API endpoints.

## API Endpoints

- POST `/question/create`: Create a new question.
- GET `/question/view/:id`: View details of a question.
- DELETE `/question/delete/:id`: Delete a question.

- POST `/options/:id/create`: Create a new option for a question.
- POST `/options/:id/add_vote`: Add a vote to an option.
- DELETE `/options/delete/:id`: Delete an option.

Make requests to the respective endpoints using a tool like Postman.



## Contact
- Name: Nilajit Gope
- mailto:nilajitgope51@gmail.com
-Happy polling!

