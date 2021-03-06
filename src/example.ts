import { CoinSchedule } from "./coinschedule";
import * as config from "config";

const cs = new CoinSchedule(config.get("coinschedule.apiKey"));

cs.getPlatform()
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error(e);
    });
