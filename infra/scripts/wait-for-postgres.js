const { exec } = require("node:child_process")

function checkPostgres() {
  exec('docker exec postgres-dev pg_isready --host localhost', handleReturn)

  function handleReturn(error, stdout) {
    process.stdout.write('.')
    if(stdout.search('accepting connections') === -1) {
      checkPostgres();
      return;
    }
    process.stdout.write("\n\n🟢 Postgres está pronto e aguardando conexões\n");
  }

}
process.stdout.write("\n\n🔴 Aguardando postgres aceitar conexões\n");
checkPostgres();

