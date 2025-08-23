FROM python:3.11-slim

WORKDIR /app

# Copiar el requirements general
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copiar solo la carpeta del ETL
COPY . .

CMD ["python", "main.py"]