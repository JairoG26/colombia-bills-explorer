from fastapi import FastAPI
from .routers import proyectos

app = FastAPI(title="Colombia Bills Explorer")

app.include_router(proyectos.router)

@app.get("/")
def root():
    return {"message": "Bienvenido a Colombia Bills Explorer API"}