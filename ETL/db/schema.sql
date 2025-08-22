CREATE TABLE tipo (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

CREATE TABLE estado (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

CREATE TABLE comision (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) UNIQUE
);

CREATE TABLE origen (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE legislatura (
    id SERIAL PRIMARY KEY,
    periodo VARCHAR(50) UNIQUE
);

CREATE TABLE autor (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) UNIQUE
);

CREATE TABLE proyecto (
    id SERIAL PRIMARY KEY,
    numero_camara VARCHAR(20),
    numero_senado VARCHAR(20),
    proyecto TEXT,
    tipo_id INT REFERENCES tipo(id),
    estado_id INT REFERENCES estado(id),
    comision_id INT REFERENCES comision(id),
    origen_id INT REFERENCES origen(id),
    legislatura_id INT REFERENCES legislatura(id)
);

CREATE TABLE proyecto_autor (
    proyecto_id INT REFERENCES proyecto(id),
    autor_id INT REFERENCES autor(id),
    PRIMARY KEY (proyecto_id, autor_id)
);