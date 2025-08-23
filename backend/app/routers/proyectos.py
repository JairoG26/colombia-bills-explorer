from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session, joinedload
from ..database import get_db
from .. import schemas, models

router = APIRouter(prefix="/proyectos", tags=["Proyectos"])

# Listar proyectos (filtro de búsqueda por título)
@router.get("/", response_model=list[schemas.ProyectoSchema])
def listar_proyectos(keyword: str, db: Session = Depends(get_db)):
    return db.query(models.Proyecto).filter(models.Proyecto.proyecto.ilike(f"%{keyword}%"))\
        .options(
            joinedload(models.Proyecto.tipo),
            joinedload(models.Proyecto.estado),
            joinedload(models.Proyecto.comision),
            joinedload(models.Proyecto.origen),
            joinedload(models.Proyecto.legislatura),
            joinedload(models.Proyecto.autores)
        ).all()

# Consultar por ID
@router.get("/{proyecto_id}", response_model=schemas.ProyectoSchema)
def obtener_proyecto(proyecto_id: int, db: Session = Depends(get_db)):
    return db.query(models.Proyecto).filter(models.Proyecto.id == proyecto_id)\
        .options(
            joinedload(models.Proyecto.tipo),
            joinedload(models.Proyecto.estado),
            joinedload(models.Proyecto.comision),
            joinedload(models.Proyecto.origen),
            joinedload(models.Proyecto.legislatura),
            joinedload(models.Proyecto.autores)
        ).filter(models.Proyecto.id == proyecto_id).first()
