# Task Management Backend Server

## Overview

This project is a backend server designed to manage tasks. It provides a RESTful API for creating, retrieving, updating, and deleting tasks, as well as categorizing them. The server is built using Node.js, Express.js, MongoDB, Mongoose, and Jest for testing.

## Features

- **Create Task**: Allows users to create new tasks.
- **Retrieve All Tasks**: Provides an endpoint to fetch all tasks.
- **Mark Task as Completed**: Updates the status of a task to completed.
- **Edit Task**: Modifies the details of an existing task.
- **Delete Task**: Removes a task from the system.
- **Category Tasks**: Organizes tasks into categories.

## Getting Started

### Prerequisites

- Node.js v14 or later
- MongoDB v4 or later

### Installation

1. Clone the repository:
```html
git clone https://github.com/salimehdi/Task-Management-Backend-NodeJS-Project
```
2. Navigate to the project directory:
```html
cd yourrepository
```
3. Install dependencies:
```html
npm install
```
4. Set up environment variables by copying `.env.example` to `.env` and filling in the necessary values.

### Running the Application

To start the server, run the following command:
```html
npm run start
```

## API Endpoints

- `POST /create`: Create a new task
- `GET /allTask`: Retrieve all tasks
- `PATCH /completed/:id`: Mark a task as completed
- `PATCH /edit`: Edit a task
- `DELETE /deleteTask`: Delete a task
- `GET /category`: Get tasks by category

### To view this backend, use postman to send request on 
```json 
https://task-man-tryx.onrender.com/api/fetch/ 
``` 

## Contributing

Contributions are welcome! Please read the contributing guide before submitting pull requests.

## Contact

For any questions or concerns, please open an issue on GitHub.
