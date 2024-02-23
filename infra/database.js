import { Client } from "pg";

function resolveSSL() {
  if (process.env.NODE_ENV === "production") {
    return {
      ca: process.env.CA_CERT.replace(/\\n/g, "\n"),
    };
  } else {
    return false;
  }
}

async function query(queryObj) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    // ssl: process.env.NODE_ENV === "production",
    ssl: resolveSSL(),
  });

  try {
    await client.connect();
    const result = await client.query(queryObj);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
