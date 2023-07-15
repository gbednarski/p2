import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://proper-aardvark-43675.upstash.io',
  token: 'AaqbASQgNDhiNjIxZWUtZjEzOS00NWVlLTg3ZjUtMjAxOTEzMmQ2MmJhYTA0ZjJlM2I0NDhkNGIwYjkwZmUwOTlhZWMzN2JkNTY=',
})
   
const data = await redis.set('foo', 'bar');
