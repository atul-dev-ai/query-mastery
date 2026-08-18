import initSqlJs, { Database, SqlJsStatic } from "sql.js";

let SQL: SqlJsStatic | null = null;
let db: Database | null = null;

// Initialize SQL.js engine asynchronously
export async function initializeSQL() {
  if (db) return db;

  try {
    SQL = await initSqlJs({
      // Ekhon amra specifically browser er wasm file tar kothai bole dicchi
      locateFile: () => `/sql-wasm-browser.wasm`,
    });

    db = new SQL.Database();
    seedDatabase(db);
    return db;
  } catch (error) {
    console.error("Failed to initialize SQL Engine:", error);
    throw new Error("Engine loading failed.");
  }
}

// Prepare tables and populate data
function seedDatabase(database: Database) {
  const seedQuery = `
    CREATE TABLE cars (
      id INTEGER PRIMARY KEY,
      brand TEXT,
      model TEXT,
      year INTEGER,
      price INTEGER
    );
    INSERT INTO cars (brand, model, year, price) VALUES
      ('Toyota', 'Corolla', 2020, 20000),
      ('Honda', 'Civic', 2021, 22000),
      ('Tesla', 'Model 3', 2022, 40000),
      ('Toyota', 'Camry', 2019, 18000);

    CREATE TABLE phones (
      id INTEGER PRIMARY KEY,
      brand TEXT,
      model TEXT,
      price INTEGER,
      stock INTEGER
    );
    INSERT INTO phones (brand, model, price, stock) VALUES
      ('Apple', 'iPhone 13', 799, 50),
      ('Samsung', 'Galaxy S21', 699, 30),
      ('Google', 'Pixel 6', 599, 20);

    CREATE TABLE fruits (
      id INTEGER PRIMARY KEY,
      name TEXT,
      color TEXT,
      price_per_kg INTEGER
    );
    INSERT INTO fruits (name, color, price_per_kg) VALUES
      ('Apple', 'Red', 3),
      ('Banana', 'Yellow', 1),
      ('Orange', 'Orange', 2);
  `;

  database.run(seedQuery);
}

// Function to handle execution of queries securely
export function executeSQLQuery(query: string) {
  if (!db) {
    return { error: "Database engine not ready yet. Please wait." };
  }

  try {
    const results = db.exec(query);

    if (results.length === 0) {
      return { data: [], message: "Query executed successfully." };
    }

    const columns = results[0].columns;
    const values = results[0].values;

    const formattedData = values.map((row) => {
      let obj: Record<string, any> = {};
      columns.forEach((col, index) => {
        obj[col] = row[index];
      });
      return obj;
    });

    return { data: formattedData };
  } catch (err: any) {
    return { error: err.message || "SQL Syntax Error." };
  }
}
