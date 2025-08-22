# colombia-bills-explorer


## Parte 1: Configuración inicial, creación de la base de datos y carga de datos

Este parte implementa un pipeline **ETL (Extract, Transform, Load)** en Python para cargar y normalizar información de proyectos de ley de Colombia en una base de datos **PostgreSQL**.  

### Estructura del proyecto

ETL/
│── db/
│ └── schema.sql # Definición de las tablas en PostgreSQL
│── extraction.py # Lectura de los datos (CSV, JSON, etc.)
│── transformation.py # Normalización y transformación
│── loading.py # Carga a PostgreSQL
│── main.py # Orquestador: corre el pipeline completo
│── notebooks/
│ └── scrapting.ipynb # Notebook que muestra una manera de obtener todos los registros de la página

### Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Python **3.9+**
- PostgreSQL **14+**
- pgAdmin (opcional, pero recomendado para ejecutar scripts y explorar datos)
- Un entorno virtual de Python (recomendado con venv)

### 1. Crear la base de datos en PostgreSQL

1. Abre pgAdmin o conéctate desde terminal a tu servidor PostgreSQL.

2. Crea una nueva base de datos llamada: colombia_bills_explorer

### 2. Crear las tablas con schema.sql

1. Abre pgAdmin y selecciona la base de datos colombia_bills_explorer.

2. Ve a Tools > Query Tool.

3. Carga el archivo ETL/db/schema.sql.

4. Ejecuta el script con el botón ▶️ o presiona F5.

### 3. Crear entorno virtual

1. Crear un entorno virtual (recomendado):

   En Windows (PowerShell):
   ```powershell
   python -m venv venv
   .\venv\Scripts\Activate


