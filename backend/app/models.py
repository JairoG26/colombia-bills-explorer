from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship

class Proyecto():
    __tablename__ = 'proyecto'
    
    id = Column(Integer, primary_key=True, index=True)
    numero_camara = Column(String(20))
    numero_senado = Column(String(20))
    proyecto = Column(Text)
    tipo_id = Column(Integer, ForeignKey('tipo.id'))
    estado_id = Column(Integer, ForeignKey('estado.id'))
    comision_id = Column(Integer, ForeignKey('comision.id'))
    origen_id = Column(Integer, ForeignKey('origen.id'))
    legislatura_id = Column(Integer, ForeignKey('legislatura.id'))

    tipo = relationship("Tipo", back_populates="proyectos")
    estado = relationship("Estado", back_populates="proyectos")
    comision = relationship("Comision", back_populates="proyectos")
    origen = relationship("Origen", back_populates="proyectos")
    legislatura = relationship("Legislatura", back_populates="proyectos")