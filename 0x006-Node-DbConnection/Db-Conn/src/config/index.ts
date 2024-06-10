import mssql from 'mssql';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'ADMINPC',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};

async function run() {
    let pool = await mssql.connect(sqlConfig);
    let results = (await pool.request().query('SELECT * FROM EmployeeDetails')).recordset;
    console.log(results);
}

run();
