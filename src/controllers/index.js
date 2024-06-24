import { pool } from "../db.js";
import { config } from "dotenv";
config()

export const getHospitales = async (req, res) => {
    try {
        // Perform the query
        const result = await pool.query('SELECT * FROM hospitales');

        // Extract rows from the result
        const rows = result.rows;

        // Send the rows as the response
        res.json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Server error');
    }
}

export const fillDb = async (req, res) => {
    try {
        // Perform the query
        // const result = await pool.query('SELECT * FROM hospitales');

        // Extract rows from the result
        // const rows = result.rows;

        // Send the rows as the response
        res.json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Server error');
    }
}