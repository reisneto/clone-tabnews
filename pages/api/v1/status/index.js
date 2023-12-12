import database from "infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as test");
  response.status(200).json({ status: "ok" });
}

export default status;
