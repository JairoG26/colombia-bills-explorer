from pydantic import BaseModel
from typing import List, Optional

class TipoSchema(BaseModel):
    id: int
    nombre: str
    class Config:
        orm_mode = True

class EstadoSchema(BaseModel):
    id: int
    nombre: str
    class Config:
        orm_mode = True

class ComisionSchema(BaseModel):
    id: int
    nombre: str
    class Config:
        orm_mode = True

class OrigenSchema(BaseModel):
    id: int
    nombre: str
    class Config:
        orm_mode = True

class LegislaturaSchema(BaseModel):
    id: int
    periodo: str
    class Config:
        orm_mode = True

class AutorSchema(BaseModel):
    id: int
    nombre: str
    class Config:
        orm_mode = True

class ProyectoSchema(BaseModel):
    id: int
    numero_camara: Optional[str]
    numero_senado: Optional[str]
    proyecto: str
    
    tipo: Optional[TipoSchema]
    estado: Optional[EstadoSchema]
    comision: Optional[ComisionSchema]
    origen: Optional[OrigenSchema]
    legislatura: Optional[LegislaturaSchema]
    autores: List[AutorSchema] = []

    class Config:
        orm_mode = True