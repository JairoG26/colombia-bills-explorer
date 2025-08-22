import os
from dotenv import load_dotenv
from ETL.extraction import scrape_data
from ETL.trasformation import transform_data
from ETL.loading import load_to_postgres

load_dotenv()

DB_URI = os.getenv("DB_URI")
BASE_URL = os.getenv("BASE_URL")

# Extract
data = scrape_data(BASE_URL)

# Transform
transformed_data = transform_data(data)

# Load
load_to_postgres(transformed_data, DB_URI)
