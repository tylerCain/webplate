import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({ connectionString: "postgres://postgres:testpassword@localhost:5432/postgres" })
