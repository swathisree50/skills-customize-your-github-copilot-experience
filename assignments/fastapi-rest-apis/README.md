# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build a simple REST API using the FastAPI framework, including endpoints, request validation, and response models.

## 📝 Tasks

### 🛠️ Create the FastAPI App

#### Description

Create a FastAPI application that serves multiple endpoints for a basic task manager.

#### Requirements
Completed project should:

- Use `FastAPI()` to create the app instance.
- Define at least three routes: `GET /`, `GET /tasks`, and `POST /tasks`.
- Return JSON responses from each route.

### 🛠️ Use Request and Response Models

#### Description

Define Pydantic models to validate incoming request data and structure outgoing responses.

#### Requirements
Completed project should:

- Create a Pydantic model named `Task` with fields: `id`, `title`, `description`, and `completed`.
- Create an input model `TaskCreate` with `title`, `description`, and `completed`.
- Use `TaskCreate` for the `POST /tasks` request body.
- Return created tasks using the `Task` model.

### 🛠️ Add Path and Query Parameters

#### Description

Add support for fetching a single task by ID and filtering tasks by completion state.

#### Requirements
Completed project should:

- Add route `GET /tasks/{task_id}` to return a single task by ID.
- Return a 404 error if the requested task does not exist.
- Add route `GET /tasks/search` with optional query parameter `completed`.
- Return tasks filtered by the `completed` value when provided.

### 🛠️ Run and Test the API

#### Description

Run the FastAPI server locally and test the routes using a browser or API client.

#### Requirements
Completed project should:

- Include a `uvicorn` command comment showing how to run the app, such as `uvicorn starter_code:app --reload`.
- Use the automatic docs at `/docs` or `/redoc` to verify the API.
- Add at least one example request and response in the README.
