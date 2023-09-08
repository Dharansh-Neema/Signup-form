const redis = require("redis");
const client = redis.createClient();

const redisClient = async function Client() {
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
  return client;
};

module.exports = redisClient;
