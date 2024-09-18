import oracledb from 'oracledb'

const oracleDBConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  connectionString: process.env.DB_HOST,
}

async function runQuery(query: string) {
  let connection: oracledb.Connection

  // Establish a connection do OracleDB and send query, send error if connection or query is failed.
  try {
    connection = await oracledb.getConnection(oracleDBConfig)

    // This is the part where we send the query, and return to its result.
    const result = await connection.execute(query)
    return result.rows
  } catch (err) {
    throw new Error(err)
  } finally {
    // After succesfully establishing the connection and sending the query
    if (connection) {
      await connection.close()
    }
  }
}

export default runQuery
