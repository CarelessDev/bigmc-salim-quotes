const { exec } = require("child_process");

async function cron() {
  exec("bash cron.sh", () => {});
}

cron();

setInterval(() => {
  cron();
}, 30000);
