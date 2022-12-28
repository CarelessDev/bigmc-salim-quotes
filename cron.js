const { exec } = require("child_process");

async function cron() {
  exec("bash cron.sh", () => {});
}

cron();

setInterval(() => {
  cron();
}, 60 * 60 * 1000);
