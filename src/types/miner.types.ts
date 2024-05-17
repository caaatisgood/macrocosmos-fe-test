export type Miner = {
  publicKey: string; // public key of the miner - like a uuid
  username: string;
  description: string;
  location: string;
  hashrate: number;
  blocksMined: number;
  taoEarned: number;
  uptime: number;
  status: string;
  lastSeen: string;
  ip: string;
  port: number;
  version: string;
};
