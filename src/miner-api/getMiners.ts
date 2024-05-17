import { Miner } from "@/types/miner.types";
import casual from "casual";
import { format } from "date-fns";

function getRandomDateFromLastMonth() {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  date.setDate(casual.integer(1, 30));
  date.setTime(date.getTime() + casual.integer(0, 1000000));
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

function getDummyMiner(): Miner {
  return {
    publicKey: casual.uuid,
    username: casual.username,
    description: casual.description,
    location: casual.country,
    hashrate: casual.integer(0, 100),
    blocksMined: casual.integer(0, 1000),
    uptime: casual.integer(0, 100),
    status: casual.random_element(["active", "inactive"]),
    lastSeen: getRandomDateFromLastMonth(),
    ip: casual.ip,
    port: casual.integer(0, 100),
    taoEarned: casual.integer(0, 100),
    version: casual.numerify("v.#.#.#"),
  };
}

/**
 * function for generating 100 dummy miners.
 * Please use this as a placeholder for an actual API call.
 */
export async function getMiners() {
  const miners: Miner[] = Array.from({ length: 100 }, getDummyMiner);
  return { data: miners, error: null, status: 200 };
}
