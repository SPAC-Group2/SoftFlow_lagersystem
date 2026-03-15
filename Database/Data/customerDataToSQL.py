import csv

input_csv = r"C:\Users\LineWienke\Documents\StockFlow_lagersystem\Database\Data\customer_DATA.csv"
output_sql = r"C:\Users\LineWienke\Documents\StockFlow_lagersystem\Database\Data\insertCustomers.sql"

with open(input_csv, newline='', encoding="utf-8") as csvfile, open(output_sql, "w", encoding="utf-8") as sqlfile:
    reader = csv.DictReader(csvfile)

    for row in reader:
        
        first_name= row["first_name"].replace("'", "''")
        last_name = row["last_name"].replace("'", "''")
        email = row["email"]
        location = row["location"].replace("'", "''")

        sql = f"INSERT INTO Customers (first_name, last_name, email, customer_location) VALUES ('{first_name}', '{last_name}', '{email}', '{location}');\n"
        sqlfile.write(sql)

print("SQL file generated.")