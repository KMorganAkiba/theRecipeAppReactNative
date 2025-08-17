import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function(){
    https.get(process.env.API_URL, (res) => {
        if (res.statusCode === 200) console.log("GET request sent successfully");
        else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request", e));
});

export default job;

//Cron job explanation:
// Job runs every 14 mins to keep the api web service running as 15 mins of inactivity
// will deactivate the api webservice and will cause a min of 50 sec delay for service to restart on 
// redner.com

// Timing examples
// * 14 * * * * = every 14 mins. 
// * 0 0 * * 0 * = at midnight on every sunday
// * 30 3 15 * * = at 0330 on the 15th of every month 
// * 0 0 1 1 * = at midnight, Jan 1
// * 0 * * * * = every hour