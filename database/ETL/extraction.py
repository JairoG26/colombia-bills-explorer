import requests
from bs4 import BeautifulSoup
import pandas as pd


def scrape_data(url):

    # Do a GET request
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        print("Solicitud exitosa!")
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')
        table = soup.find('table', class_='table cols-9')

        # Check if the table was found
        if table:
            # Extract the headers
            header = [th.text.strip() for th in table.find_all('th')]
            rows = table.find_all('tr')[1:]  # Ignore header

            # Extract the rows
            data = []
            for row in rows:  # Skip the header row
                cells = row.find_all('td')
                if cells:
                    row_data = [cell.text.strip() for cell in cells]
                    data.append(row_data)

            # Create a DataFrame
            df = pd.DataFrame(data, columns=header)
            print("DataFrame created!")
            return df
        else:
            print("Table not found.")
            return None
