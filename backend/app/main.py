from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import proyectos

app = FastAPI(title="Colombia Bills Explorer")

origins = [
    "http://localhost:5173",  # tu frontend en Vite/React
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Orígenes permitidos
    allow_credentials=True,
    allow_methods=["*"],    # Métodos permitidos: GET, POST, etc.
    allow_headers=["*"],    # Headers permitidos
)

app.include_router(proyectos.router)

@app.get("/")
def root():
    return {"message": "Bienvenido a Colombia Bills Explorer API"}