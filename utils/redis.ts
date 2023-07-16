import { createClient } from "redis"

const client = createClient ({
  url : "rediss://default:a04f2e3b448d4b0b90fe099aec37bd56@proper-aardvark-43675.upstash.io:43675"
});

client.on("error", function(err) {
  throw err;
});
await client.connect()
await client.set('foo','bar');
