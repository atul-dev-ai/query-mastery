"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Terminal,
  Lightbulb,
  Code,
  ArrowLeft,
} from "lucide-react";

const sqlData = [
  {
    category: "1. Basics & Data Retrieval",
    commands: [
      {
        name: "SELECT",
        usage: "SELECT column1, column2 FROM table_name;",
        example: "SELECT first_name, email FROM employees;",
        description:
          "Retrieves data from one or more tables. Use * to select all columns.",
      },
      {
        name: "SELECT DISTINCT",
        usage: "SELECT DISTINCT column_name FROM table_name;",
        example: "SELECT DISTINCT department FROM employees;",
        description:
          "Returns only distinct (different) values, removing duplicates from the result.",
      },
      {
        name: "CREATE TABLE",
        usage: "CREATE TABLE table_name (col1 datatype, col2 datatype);",
        example: "CREATE TABLE invoices (id UUID, amount DECIMAL(10,2), status VARCHAR(20));",
        description:
          "Creates a new table in the database with specified columns and data types.",
      },
      {
        name: "INSERT INTO",
        usage: "INSERT INTO table_name (col1, col2) VALUES (val1, val2);",
        example: "INSERT INTO orders (customer_id, total_amount) VALUES (1045, 250.75);",
        description: "Adds new rows of data into a specific table.",
      },
    ],
  },
  {
    category: "2. Filtering & Searching",
    commands: [
      {
        name: "WHERE",
        usage: "SELECT * FROM table WHERE condition;",
        example: "SELECT * FROM transactions WHERE amount > 5000.00;",
        description: "Filters records that fulfill a specified condition.",
      },
      {
        name: "AND / OR / NOT",
        usage: "SELECT * FROM table WHERE cond1 AND cond2;",
        example: "SELECT * FROM users WHERE status = 'active' AND last_login >= '2023-01-01';",
        description: "Used to combine multiple conditions in a WHERE clause.",
      },
      {
        name: "IN",
        usage: "SELECT * FROM table WHERE column IN (val1, val2);",
        example: "SELECT * FROM products WHERE category IN ('Electronics', 'Kitchen', 'Furniture');",
        description:
          "Allows you to specify multiple possible values for a column.",
      },
      {
        name: "BETWEEN",
        usage: "SELECT * FROM table WHERE column BETWEEN val1 AND val2;",
        example: "SELECT * FROM employee_logs WHERE login_time BETWEEN '2023-10-01' AND '2023-10-31';",
        description: "Selects values within a given range (inclusive).",
      },
      {
        name: "LIKE",
        usage: "SELECT * FROM table WHERE column LIKE pattern;",
        example: "SELECT * FROM customers WHERE email LIKE '%@gmail.com';",
        description:
          "Searches for a specified pattern in a column using wildcards (% or _).",
      },
      {
        name: "IS NULL",
        usage: "SELECT * FROM table WHERE column IS NULL;",
        example: "SELECT * FROM users WHERE phone_number IS NULL;",
        description: "Used to test for empty values (NULL).",
      },
    ],
  },
  {
    category: "3. Sorting & Pagination",
    commands: [
      {
        name: "ORDER BY",
        usage: "SELECT * FROM table ORDER BY column ASC|DESC;",
        example: "SELECT * FROM products ORDER BY price DESC;",
        description:
          "Sorts the result set in ascending (ASC) or descending (DESC) order.",
      },
      {
        name: "LIMIT",
        usage: "SELECT * FROM table LIMIT number;",
        example: "SELECT * FROM leaderboards ORDER BY score DESC LIMIT 10;",
        description:
          "Specifies the maximum number of records to return (useful for Top N queries).",
      },
      {
        name: "OFFSET",
        usage: "SELECT * FROM table LIMIT number OFFSET number;",
        example: "SELECT * FROM blog_posts ORDER BY published_at DESC LIMIT 20 OFFSET 40;",
        description:
          "Skips a specific number of rows before beginning to return the rows (useful for pagination).",
      },
    ],
  },
  {
    category: "4. Aggregation & Grouping",
    commands: [
      {
        name: "COUNT()",
        usage: "SELECT COUNT(column) FROM table;",
        example: "SELECT COUNT(*) FROM subscriptions WHERE status = 'active';",
        description:
          "Returns the number of rows that matches a specified criterion.",
      },
      {
        name: "SUM() / AVG()",
        usage: "SELECT AVG(column) FROM table;",
        example: "SELECT SUM(amount) FROM sales WHERE date = CURRENT_DATE;",
        description:
          "Calculates the total sum or the average value of a numeric column.",
      },
      {
        name: "MIN() / MAX()",
        usage: "SELECT MAX(column) FROM table;",
        example: "SELECT MAX(salary) FROM employees WHERE department = 'Engineering';",
        description:
          "Returns the smallest (MIN) or largest (MAX) value of the selected column.",
      },
      {
        name: "GROUP BY",
        usage: "SELECT col, COUNT(*) FROM table GROUP BY col;",
        example: "SELECT department, COUNT(*) FROM employees GROUP BY department;",
        description: "Groups rows that have the same values into summary rows.",
      },
      {
        name: "HAVING",
        usage: "SELECT col, COUNT(*) FROM table GROUP BY col HAVING cond;",
        example:
          "SELECT customer_id, SUM(total) FROM orders GROUP BY customer_id HAVING SUM(total) > 1000;",
        description:
          "Used to filter records that work on aggregated group data (because WHERE doesn't work with aggregates).",
      },
    ],
  },
  {
    category: "5. Joins & Relationships",
    commands: [
      {
        name: "INNER JOIN",
        usage: "SELECT cols FROM t1 INNER JOIN t2 ON t1.id = t2.id;",
        example:
          "SELECT users.email, orders.total FROM users INNER JOIN orders ON users.id = orders.user_id;",
        description:
          "Returns records that have matching values in both tables.",
      },
      {
        name: "LEFT JOIN",
        usage: "SELECT cols FROM t1 LEFT JOIN t2 ON t1.id = t2.id;",
        example:
          "SELECT customers.name, support_tickets.issue FROM customers LEFT JOIN support_tickets ON customers.id = support_tickets.customer_id;",
        description:
          "Returns all records from the left table, and the matched records from the right table.",
      },
    ],
  },
  {
    category: "6. Data Modification",
    commands: [
      {
        name: "UPDATE",
        usage: "UPDATE table SET col = val WHERE condition;",
        example: "UPDATE users SET plan = 'premium' WHERE id = 801;",
        description:
          "Modifies existing records in a table. ALWAYS use a WHERE clause to avoid updating all rows!",
      },
      {
        name: "DELETE",
        usage: "DELETE FROM table WHERE condition;",
        example: "DELETE FROM sessions WHERE expires_at < CURRENT_TIMESTAMP;",
        description: "Removes existing records from a table.",
      },
      {
        name: "DROP TABLE",
        usage: "DROP TABLE table_name;",
        example: "DROP TABLE temp_migration_data;",
        description:
          "Deletes an entire table and all the data inside it from the database.",
      },
    ],
  },
];

export default function CheatSheet() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCommand, setExpandedCommand] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedCommand(expandedCommand === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <button className="flex cursor-pointer items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8 px-4 py-2 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Code className="text-purple-600 dark:text-purple-500" /> SQL Cheat Sheet
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Quick reference guide for common SQL commands and syntax.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search commands (e.g. SELECT, WHERE)..."
            className="w-full bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl py-4 pl-12 pr-4 text-gray-900 dark:text-white outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-all shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>

        {/* Command List */}
        <div className="space-y-12">
          {sqlData.map((section) => (
            <div key={section.category}>
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-purple-600 dark:bg-purple-500 rounded-full"></div>{" "}
                {section.category}
              </h2>

              <div className="grid gap-4">
                {section.commands
                  .filter((c) => c.name.toLowerCase().includes(searchTerm))
                  .map((cmd) => (
                    <div
                      key={cmd.name}
                      className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleExpand(cmd.name)}
                        className="w-full cursor-pointer duration-300 transition-all p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[#161b22]"
                      >
                        <div className="flex items-center gap-4">
                          <Terminal size={18} className="text-purple-600 dark:text-purple-400" />
                          <span className="font-mono text-lg font-bold text-gray-900 dark:text-gray-200">
                            {cmd.name}
                          </span>
                        </div>
                        {expandedCommand === cmd.name ? (
                          <ChevronUp size={20} className="text-gray-500" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-500" />
                        )}
                      </button>

                      {expandedCommand === cmd.name && (
                        <div className="p-6 bg-gray-50 dark:bg-[#161b22] border-t border-gray-200 dark:border-gray-800 space-y-6 animate-in slide-in-from-top-2 duration-300">
                          <div>
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">
                              Usage:
                            </span>
                            <code className="text-blue-700 dark:text-blue-400 font-mono text-sm bg-gray-200/50 dark:bg-black/30 p-2 rounded block border border-gray-200 dark:border-transparent">
                              {cmd.usage}
                            </code>
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">
                              Example:
                            </span>
                            <code className="text-emerald-700 dark:text-green-400 font-mono text-sm bg-emerald-50 dark:bg-black/30 p-2 rounded block border border-emerald-100 dark:border-transparent">
                              {cmd.example}
                            </code>
                          </div>
                          <div className="flex gap-3">
                            <Lightbulb
                              className="text-amber-500 shrink-0"
                              size={18}
                            />
                            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                              {cmd.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
