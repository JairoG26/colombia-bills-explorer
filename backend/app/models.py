from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Tipo(Base):
    __tablename__ = "tipo"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), unique=True)

class Estado(Base):
    __tablename__ = "estado"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), unique=True)

class Comision(Base):
    __tablename__ = "comision"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(200), unique=True)

class Origen(Base):
    __tablename__ = "origen"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(50), unique=True)

class Legislatura(Base):
    __tablename__ = "legislatura"
    id = Column(Integer, primary_key=True, index=True)
    periodo = Column(String(50), unique=True)

class Autor(Base):
    __tablename__ = "autor"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(200), unique=True)

class Proyecto(Base):
    __tablename__ = "proyecto"
    id = Column(Integer, primary_key=True, index=True)
    numero_camara = Column(String(20))
    numero_senado = Column(String(20))
    proyecto = Column(Text)

    tipo_id = Column(Integer, ForeignKey("tipo.id"))
    estado_id = Column(Integer, ForeignKey("estado.id"))
    comision_id = Column(Integer, ForeignKey("comision.id"))
    origen_id = Column(Integer, ForeignKey("origen.id"))
    legislatura_id = Column(Integer, ForeignKey("legislatura.id"))

    tipo = relationship("Tipo")
    estado = relationship("Estado")
    comision = relationship("Comision")
    origen = relationship("Origen")
    legislatura = relationship("Legislatura")
    autores = relationship("Autor", secondary="proyecto_autor")

class ProyectoAutor(Base):
    __tablename__ = "proyecto_autor"
    proyecto_id = Column(Integer, ForeignKey("proyecto.id"), primary_key=True)
    autor_id = Column(Integer, ForeignKey("autor.id"), primary_key=True)