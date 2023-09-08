const redis = require("redis");
const redisClient = redis.createClient();

// const redisClient = async function Client() {
//   client.on("error", (err) => console.log("Redis Client Error", err));

//   await client.connect();
//   return client;
// };
(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
