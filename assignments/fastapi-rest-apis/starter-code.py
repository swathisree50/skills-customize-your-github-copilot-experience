from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class Task(BaseModel):
    id: int
    title: str
    description: str
    completed: bool = False

class TaskCreate(BaseModel):
    title: str
    description: str
    completed: bool = False

fake_tasks_db: List[Task] = [
    Task(id=1, title="Learn FastAPI", description="Read the FastAPI docs and build a sample app.", completed=False),
    Task(id=2, title="Write tests", description="Create unit tests for the API endpoints.", completed=False),
]

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI task manager API"}

@app.get("/tasks", response_model=List[Task])
def get_tasks(completed: Optional[bool] = None):
    if completed is None:
        return fake_tasks_db
    return [task for task in fake_tasks_db if task.completed == completed]

@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in fake_tasks_db:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@app.post("/tasks", response_model=Task)
def create_task(task_in: TaskCreate):
    new_id = max(task.id for task in fake_tasks_db) + 1 if fake_tasks_db else 1
    new_task = Task(id=new_id, **task_in.dict())
    fake_tasks_db.append(new_task)
    return new_task

# Run with: uvicorn starter-code:app --reload
