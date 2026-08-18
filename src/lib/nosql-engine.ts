// Dummy datasets
export const datasets = {
  cars: [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020, price: 20000 },
    { id: 2, brand: "Honda", model: "Civic", year: 2021, price: 22000 },
    { id: 3, brand: "Tesla", model: "Model 3", year: 2022, price: 40000 },
    { id: 4, brand: "Toyota", model: "Camry", year: 2019, price: 18000 },
  ],
  phones: [
    { id: 1, brand: "Apple", model: "iPhone 13", price: 799, stock: 50 },
    { id: 2, brand: "Samsung", model: "Galaxy S21", price: 699, stock: 30 },
    { id: 3, brand: "Google", model: "Pixel 6", price: 599, stock: 20 },
  ],
  fruits: [
    { id: 1, name: "Apple", color: "Red", price_per_kg: 3 },
    { id: 2, name: "Banana", color: "Yellow", price_per_kg: 1 },
    { id: 3, name: "Orange", color: "Orange", price_per_kg: 2 },
  ],
};

// NoSQL Evaluator Logic
export const evaluateNoSQL = (
  query: string,
  collectionName: keyof typeof datasets,
) => {
  const collection = datasets[collectionName];
  if (!collection) return { error: "Collection not found!" };

  try {
    // A VERY basic parser for finding objects (e.g., db.cars.find({ brand: 'Toyota' }))
    const findMatch = query.match(/db\.\w+\.find\((.*)\)/);

    if (findMatch && findMatch[1]) {
      // Safely evaluate the object string to JSON (Using Function constructor to avoid eval)
      const conditionStr = findMatch[1].trim();
      const condition = new Function(`return ${conditionStr || "{}"}`)();

      const results = collection.filter((item) => {
        for (const key in condition) {
          if (item[key as keyof typeof item] !== condition[key]) {
            return false;
          }
        }
        return true;
      });

      return { data: results };
    }

    // If query doesn't match standard find()
    return {
      error:
        "Unsupported query format. Try: db.collection.find({ key: 'value' })",
    };
  } catch (err) {
    return { error: "Syntax error in your query." };
  }
};
