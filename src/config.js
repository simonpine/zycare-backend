import { config } from "dotenv";
config()
// export const db = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
// };
export const db = {
    user: "postgres",
    password: "0521",
    host: "localhost",
    port: 4000,
    database: "zycare",
};


export const port = process.env.PORT;