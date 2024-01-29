import database from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseName = process.env.POSTGRES_DB;
  const openedConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname=$1",
    values: [databaseName],
  });
  const postgresVersion = await database.query("SHOW server_version");

  const maxConnections = await database.query(
    "SELECT setting from pg_settings WHERE name = 'max_connections'"
  );
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        postgres_version: postgresVersion.rows[0].server_version,
        opened_connections: openedConnections.rows[0].count,
        max_connections: +maxConnections.rows[0].setting,
      },
    },
  });
}

export default status;
