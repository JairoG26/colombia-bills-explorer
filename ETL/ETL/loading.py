from sqlalchemy import create_engine

def load_to_postgres(data, db_uri):
    engine = create_engine(db_uri)
    tables = ["tipo", "estado", "comision", "origen", "legislatura", "autor", "proyecto", "proyecto_autor"]
    with engine.connect() as connection:
        for table in tables:
            data[table].to_sql(table, connection, if_exists="append", index=False)
        print("Carga completa")
