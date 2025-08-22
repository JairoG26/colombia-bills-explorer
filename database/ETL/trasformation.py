import pandas as pd

def get_types(df):
    # Get unique types
    tipos = df["Tipo"].dropna().unique()
    dim_tipo = pd.DataFrame({"id": range(1, len(tipos)+1), "nombre": tipos})
    return dim_tipo

def get_states(df):
    # Get unique states
    estados = df["Estado"].dropna().unique()
    dim_estado = pd.DataFrame({"id": range(1, len(estados)+1), "nombre": estados})
    return dim_estado

def get_commissions(df):
    # Get unique commissions
    comisiones = df["Comisión"].dropna().unique()
    dim_comision = pd.DataFrame({"id": range(1, len(comisiones)+1), "nombre": comisiones})
    return dim_comision

def get_origins(df):
    # Get unique origins
    origenes = df["Origen"].dropna().unique()
    dim_origen = pd.DataFrame({"id": range(1, len(origenes)+1), "nombre": origenes})
    return dim_origen

def get_legislatures(df):
    # Get unique legislatures
    legislaturas = df["Legislatura"].dropna().unique()
    dim_legislatura = pd.DataFrame({"id": range(1, len(legislaturas)+1), "periodo": legislaturas})
    return dim_legislatura

def get_authors(df):
    # Get unique authors
    lista_autores = []
    for autores in df["Autor"].dropna():
        for autor in autores.split(","):
            lista_autores.append(autor.strip())
    dim_autor = pd.DataFrame(pd.Series(lista_autores).unique(), columns=["nombre"])
    dim_autor["id"] = range(1, len(dim_autor) + 1)
    return dim_autor

def intermediate_table(df, dim_autor):
    proyecto_autor = []
    for index, row in df.iterrows():
        autores = row["Autor"].split(",")
        for autor in autores:
            autor = autor.strip()
            if autor in dim_autor["nombre"].values:
                autor_id = dim_autor.loc[dim_autor["nombre"] == autor, "id"].values[0]
                proyecto_autor.append({"proyecto_id": row["id"], "autor_id": autor_id})
    return pd.DataFrame(proyecto_autor)

def transform_data(df):
    dim_tipo = get_types(df)
    # Get unique states
    dim_estado = get_states(df)
    # Get unique commissions
    dim_comision = get_commissions(df)
    # Get unique origins
    dim_origen = get_origins(df)
    # Get unique legislatures
    dim_legislatura = get_legislatures(df)
    # Get unique authors
    dim_autor = get_authors(df)

    proyectos = df.copy()
    proyectos = proyectos.merge(
        dim_tipo.rename(columns={"id": "tipo_id"}),
        left_on="Tipo", right_on="nombre", how="left"
        ).drop(columns=["nombre"])
    proyectos = proyectos.merge(
        dim_estado.rename(columns={"id": "estado_id"}),
        left_on="Estado", right_on="nombre", how="left"
        ).drop(columns=["nombre"])
    proyectos = proyectos.merge(
        dim_comision.rename(columns={"id": "comision_id"}),
        left_on="Comisión", right_on="nombre", how="left"
    ).drop(columns=["nombre"])
    proyectos = proyectos.merge(
        dim_origen.rename(columns={"id": "origen_id"}),
        left_on="Origen", right_on="nombre", how="left"
        ).drop(columns=["nombre"])
    proyectos = proyectos.merge(
        dim_legislatura.rename(columns={"id": "legislatura_id"}), 
        left_on="Legislatura", right_on="periodo", how="left"
        ).drop(columns=["periodo"])

    proyectos = proyectos[[
        "No. Cámara", "No. Senado", "Proyecto", "Autor", "tipo_id", "estado_id", "comision_id", "origen_id", "legislatura_id"
    ]].rename(columns={
        "No. Cámara":"numero_camara",
        "No. Senado":"numero_senado",
        "Proyecto":"proyecto"
    })
    proyectos["id"] = range(1, len(proyectos) + 1)

    # Create the 'proyecto_autor' table
    proyecto_autor = intermediate_table(proyectos, dim_autor)

    proyectos = proyectos.drop(columns=["Autor"])

    print("Transformación completa")

    return {
        "proyecto": proyectos,
        "tipo": dim_tipo,
        "estado": dim_estado,
        "comision": dim_comision,
        "origen": dim_origen,
        "legislatura": dim_legislatura,
        "autor": dim_autor,
        "proyecto_autor": proyecto_autor
    }

